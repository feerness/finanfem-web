import { Router } from "express";
import { getForo } from "../controllers/foro.controller.js";
import { auth } from "../middlewares/validateTokens.js";

const router = Router();

router.get("/profile", auth, getForo); // Obtener un foro específico

export default router; 