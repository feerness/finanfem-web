import axios from "./axios";

export const registerRequest = async (user) =>
  axios.post(`/auth/register`, user);

export const loginRequest = async (user) => axios.post(`/auth/login`, user);

export const verifyTokenRequest = async () => {
  return axios.get(`/auth/verify`, {
    withCredentials: true, // Esto asegura que las cookies se envíen con la solicitud
  });
};
// Funciones de perfil
export const getProfile = async () => {
  const res = await axios.get(`/auth/profile`);
  return res.data;
};

export const updateProfile = async (profileData) => {
  const res = await axios.put(`/auth/profile`, profileData);
  return res.data;
};
//Funciones de actividad del usuario
export const getUserComments = async (userId) => {
  const res = await axios.get('/api/user-comments', { params: { userId } });
  return res.data;
};

export const getUserPosts = async (userId) => {
  const res = await axios.get('/api/user-posts', { params: { userId } });
  return res.data;
};
