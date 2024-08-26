import { createContext, useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  createForoRequest,
  deleteForoRequest,
  getForoRequest,
  getPostRequest,
  updatePostRequest,
  getCollectionRequest,
  getCommentsRequest,
  addCommentRequest,
  getCommentsCountRequest,
} from "../api/foro";
import { useAuth } from "./AuthContext";

const ForoContext = createContext();

export const useForo = () => {
  const context = useContext(ForoContext);
  if (!context) throw new Error("useForo must be used within a ForoProvider");
  return context;
};

export function ForoProvider({ children }) {
  const [foro, setForo] = useState([]);
  const { user, isAuthenticated } = useAuth();

  // Función para obtener los comentarios de un post específico
  const getComments = async (postId) => {
    try {
      const res = await getCommentsRequest(postId);
      return res.data; // Devolvemos los comentarios obtenidos
    } catch (error) {
      console.error("Error al obtener comentarios:", error);
      return []; // En caso de error, devolver un array vacío
    }
  };

  // Función para añadir un comentario a un post específico
  const addComment = async (postId, commentText) => {
    try {
      if (!isAuthenticated) {
        console.error("El usuario no está autenticado.");
        return;
      }

      const userId = user?.id;
      if (!userId) {
        console.error("No se pudo obtener el ID del usuario.");
        return;
      }

      const commentData = {
        text: commentText,
        user: userId,
      };

      const res = await addCommentRequest(postId, commentData);
      return res.data; // Devolvemos el comentario añadido
    } catch (error) {
      console.error("Error al añadir comentario:", error);
    }
  };

  const getForo = useCallback(async () => {
    try {
      const res = await getForoRequest();
      setForo(res.data);
    } catch (error) {
      console.error("Error al obtener los datos del foro:", error);
      setForo([]); // En caso de error, mantener `foro` como un array vacío
    }
  }, []);

  const deleteForo = async (id) => {
    try {
      const res = await deleteForoRequest(id);
      if (res.status === 204) {
        // Actualiza el estado utilizando el estado previo
        setForo((prevForo) =>
          prevForo.filter((foroItem) => foroItem._id !== id)
        );
      }
    } catch (error) {
      console.error("Error al eliminar el foro:", error);
    }
  };

  const createForo = async (foroData) => {
    try {
      if (!isAuthenticated) {
        console.error("El usuario no está autenticado.");
        return;
      }

      const userId = user?.id;
      if (!userId) {
        console.error("No se pudo obtener el ID del usuario.");
        return;
      }

      const dataToSend = { ...foroData, user: userId };
      console.log("Datos enviados al servidor:", dataToSend); // Verifica qué datos se están enviando

      const res = await createForoRequest(dataToSend);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, foro) => {
    try {
      await updatePostRequest(id, foro);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllPost = async (foro) => {
    try {
      await getCollectionRequest(foro);
    } catch (error) {
      console.error(error);
    }
  };
  //ayuda, no funcionaAAAAAAAAAA
  const getCommentsCount = async (postId) => {
    try {
      const res = await getCommentsCountRequest(postId);
      return res.data.count;
    } catch (error) {
      console.error("Error al obtener el contador de comentarios:", error);
      return 0;
    }
  };

  return (
    <ForoContext.Provider
      value={{
        foro,
        getForo,
        deleteForo,
        createForo,
        getPost,
        updatePost,
        getAllPost,
        getComments,
        addComment,
        getCommentsCount, // Añadir la función para obtener el contador de comentarios al contexto
      }}
    >
      {children}
    </ForoContext.Provider>
  );
}
ForoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
