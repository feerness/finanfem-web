import axios from "axios";
import { API_URL } from "../config";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Asegura que las cookies de sesión se envíen
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtén el token de localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
