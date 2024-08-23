import { Router } from "express";
import {login, register, logout, verifyToken, getProfile, updateProfile, getUserComments, getUserPosts } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validateMiddlewares.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";


const router = Router()


router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.get("/verify", verifyToken);
router.post('/logout', logout);
router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updateProfile);
router.get('/user-comments', verifyToken, getUserComments);
router.get('/user-posts', verifyToken, getUserPosts);




export default router;