import { Router } from "express";
import {
  createForo,
  getPost,
  deleteForo,
  updatePost,
  getAllPost,
  addComment,
  getComments,
  getCommentsCount,
  deleteComment,
} from "../controllers/foro.controller.js";
import { auth } from "../middlewares/validateTokens.js";
import { validateSchema } from "../middlewares/validateMiddlewares.js";
import {
  createForoSchema,
  createCommentSchema,
} from "../schemas/foro.schema.js";

const router = Router();

router.get("/:id", auth, getPost); // Obtener un post específico
router.get("/", auth, getAllPost); // Obtener todos los foros
router.post("/", auth, validateSchema(createForoSchema), createForo); // Crear un nuevo foro
router.delete("/:id", auth, deleteForo); // Eliminar un foro
router.put("/:id", auth, updatePost); // Actualizar un foro

// Rutas de comentarios
router.post(
  "/:id/comments",
  auth,
  validateSchema(createCommentSchema),
  addComment
); // Añadir un comentario a un foro específico
router.get("/:id/comments", auth, getComments); // Obtener todos los comentarios de un foro específico
router.get("/:id/comments/count", auth, getCommentsCount); // Obtener el número de comentarios de un foro específico
router.delete("/:foroId/comments/:commentId", auth, deleteComment);

export default router;
