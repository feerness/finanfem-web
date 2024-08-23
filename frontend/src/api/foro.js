import axios from "./axios";

export const getForoRequest = async () => axios.get("/foro");

export const createForoRequest = async (foro) => axios.post("/foro", foro);

export const updatePostRequest = async (id, foro) => {
  return axios.put(`/foro/${id}`, foro);
};

export const deleteForoRequest = async (id) => axios.delete(`/foro/${id}`);

export const getPostRequest = async (id) => axios.get(`/foro/${id}`);

export const getCollectionRequest = async (id) => axios.get(`/foro/${id}`);