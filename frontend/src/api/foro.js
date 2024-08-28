import axios from "./axios";

export const getForoRequest = async () => axios.get("/foro");

export const createForoRequest = async (foro) => axios.post("/foro", foro);

export const updatePostRequest = async (id, foro) => {
  return axios.put(`/foro/${id}`, foro);
};

export const deleteForoRequest = async (id) => axios.delete(`/foro/${id}`);

export const getPostRequest = async (id) => axios.get(`/foro/${id}`);

export const getCollectionRequest = async (id) => axios.get(`/foro/${id}`);

// Obtener comentarios de un post específico
export const getCommentsRequest = async (id) => {
  return axios.get(`/foro/${id}/comments`);
};

// Añadir un nuevo comentario a un post específico
export const addCommentRequest = async (id, comment) => {
  return axios.post(`/foro/${id}/comments`, comment);
};

export const getCommentsCountRequest = async (postId) => {
  try {
    const response = await axios.get(`/foro/${postId}/comments/count`);
    return response.data; // Asegúrate de que esto devuelve el objeto con 'count'
  } catch (error) {
    console.error(
      `Error al obtener el contador de comentarios para el post ${postId}:`,
      error
    );
    return { count: 0 }; // Devuelve un objeto con 'count' en caso de error
  }
};


