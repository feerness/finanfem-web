import mongoose from "mongoose";



// Esquema de comentarios
const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // El campo _id se genera automáticamente, no necesitas definirlo explícitamente
});

// Esquema de foro
const foroSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Nombre del archivo de la imagen
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [commentSchema], // Array de subdocumentos de comentarios
  },
  {
    timestamps: true, // Añade createdAt y updatedAt automáticamente
  }
);

export default mongoose.model("Foro", foroSchema);
