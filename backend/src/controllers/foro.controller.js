import Foro from "../models/foro.model.js";
import mongoose from "mongoose";

export const getForo = async (req, res) => {
  try {
    const foro = await Foro.find({
      user: req.user.id,
    }).populate("user");
    res.json(foro);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createForo = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const image = req.file ? req.file.filename : null; // Obtiene el nombre del archivo si existe

    const newForo = new Foro({
      title,
      description,
      image,
      date,
      user: req.user.id,
    });
    await newForo.save();
    res.json(newForo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getPost = async (req, res) => {
  try {
    const foro = await Foro.findById(req.params.id);
    if (!foro) return res.status(404).json({ message: "Foro no encontrado" });
    return res.json(foro);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  try {
    const { title, description, date } = req.body; // Extrayendo los datos que se desean actualizar desde el cuerpo de la solicitud

    // Actualizando el foro en la base de datos usando el ID proporcionado en la URL
    const foroUpdate = await Foro.findByIdAndUpdate(
      { _id: req.params.id }, // Condición de búsqueda: el ID del foro
      { title, description, date }, // Campos que serán actualizados
      { new: true } // Opción para devolver el documento actualizado
    );

    return res.json(foroUpdate); // Devolviendo el foro actualizado en la respuesta
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Manejando posibles errores
  }
};

export const deleteForo = async (req, res) => {
  try {
    const deletedForo = await Foro.findByIdAndDelete(req.params.id);
    if (!deletedForo)
      return res.status(404).json({ message: "Foro no encontrado" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllPost = async (req, res) => {
  try {
    const postCollection = await Foro.find().populate("user");
    res.json(postCollection);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Funciones de comentarios: 
export const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const foro = await Foro.findById(req.params.id);
    if (!foro) {
      return res.status(404).json({ message: "Foro no encontrado" });
    }
    const newComment = {
      _id: new mongoose.Types.ObjectId(),
      text,
      user: req.user.id,
    };
    foro.comments.push(newComment);
    await foro.save();
    const populatedComment = await Foro.populate(newComment, {
      path: "user",
      select: "username",
    });
    return res.json(populatedComment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const foro = await Foro.findById(req.params.id).populate(
      "comments.user",
      "username"
    );
    if (!foro) return res.status(404).json({ message: "Foro no encontrado" });

    return res.json(foro.comments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCommentsCount = async (req, res) => {
  try {
    const foro = await Foro.findById(req.params.id);
    if (!foro) return res.status(404).json({ message: "Foro no encontrado" });

    const commentsCount = foro.comments.length; // Cuenta el número de comentarios
    return res.json({ count: commentsCount });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Funciones de me gustas:
export const getLike = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.query.userId;

    const post = await Foro.findById(postId);
    const userHasLiked = post.likes.includes(userId);

    res.json({ likes: post.likes.length, userHasLiked });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los likes' });
  }
};

export const addLike = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.body.userId;

    const post = await Foro.findById(postId);

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
      await post.save();
      res.json({ likes: post.likes.length });
    } else {
      res.status(400).json({ message: 'Ya has dado me gusta a este post' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al dar like' });
  }
};