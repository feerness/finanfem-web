import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken, createRefreshToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({
        message: ["The email is already in use"],
      });

    // hashing the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the user
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // saving the user in the database
    const userSaved = await newUser.save();

    // create access token
    const token = await createAccessToken({
      id: userSaved._id,
    });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    // Crear el Access Token
    const accessToken = await createAccessToken({
      id: userFound._id,
      username: userFound.username,
    });

    // Crear el Refresh Token
    const refreshToken = await createRefreshToken({
      id: userFound._id,
      username: userFound.username,
    });

    // Guardar el Access Token en una cookie
    res.cookie("token", accessToken, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    // Guardar el Refresh Token en una cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // Asegura que la cookie solo sea accesible por el servidor
      secure: process.env.NODE_ENV === "production", // solo enviar en https en producción
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días en milisegundos
    });

    // Enviar la respuesta con los datos del usuario
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export function refreshToken(req, res) {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.status(401).json({ message: "No refresh token, authorization denied" });

  jwt.verify(refreshToken, process.env.TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid refresh token" });

    // Verifica si el usuario todavía existe
    const dbUser = await User.findById(user.id);
    if (!dbUser) return res.status(403).json({ message: "User not found" });

    const newAccessToken = await createAccessToken({ id: user.id });
    res.json({ accessToken: newAccessToken });
  });
}
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.json({
      username: user.username,
      description: user.description,
      photo: user.photo,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el perfil' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    console.log("Cuerpo de la solicitud:", req.body);
    console.log("Archivo subido:", req.file);

    const { username, description } = req.body;
    const photo = req.file ? req.file.filename : req.user.photo;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { username, description, photo },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Error al actualizar el perfil:", error);
    res.status(500).json({ message: "Error al actualizar el perfil" });
  }
};

export const getUserComments = async (req, res) => {
  try {
    const userId = req.params.userId;
    const comments = await Post.find({ author: userId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: "Error loading comments", error });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Comment.find({ author: userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: "Error loading posts", error });
  }
};
