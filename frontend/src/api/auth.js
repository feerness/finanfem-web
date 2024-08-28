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
export const getProfileRequest = async () => {
  const res = await axios.get(`/auth/profile`);
  return res.data;
};

export const updateProfileRequest = async (profileData) => {
  const res = await axios.put(`/auth/profile`, profileData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
//Funciones de actividad del usuario
export const getUserCommentsRequest = async (userId) => {
  const res = await axios.get('/auth/profile', { params: { userId } });
  return res.data;
};

export const getUserPostsRequest = async (userId) => {
  const res = await axios.get('/auth/profile', { params: { userId } });
  return res.data;
};
