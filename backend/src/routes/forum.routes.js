import { Router } from 'express';
import { getForo, createForo, getPost, deleteForo, updatePost, getAllPost } from '../controllers/foro.controller.js';
import { auth } from "../middlewares/validateTokens.js";
import { validateSchema } from '../middlewares/validateMiddlewares.js';
import { createForoSchema } from '../schemas/foro.schema.js';
const router = Router();

router.get('/:id', auth, getForo);
router.get('/:id', auth, getPost);
router.get('/', auth, getAllPost);
router.post('/', auth, validateSchema(createForoSchema), createForo);
router.delete('/:id', auth, deleteForo);
router.put('/:id', auth, updatePost);

export default router;