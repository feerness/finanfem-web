import { Router } from "express";
import {
  login,
  register,
  logout,
  verifyToken,
  getProfile,
  updateProfile,
  getUserComments,
  getUserPosts,
  refreshToken,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validateMiddlewares.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { auth } from "../middlewares/validateTokens.js";
import { upload } from "../middlewares/multerConfig.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/verify", verifyToken);
router.post("/refresh-token", refreshToken);
router.post("/logout", logout);
router.get("/profile", verifyToken, auth, getProfile);
router.put("/profile", auth, upload.single("photo"), updateProfile);
router.get("/profile", auth, updateProfile);
router.get("/activity", auth, getUserComments);
router.get("/activity", auth, getUserPosts);


export default router;
