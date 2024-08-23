import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import {
  createForoRequest,
  deleteForoRequest,
  getForoRequest,
  getPostRequest,
  updatePostRequest,
  getCollectionRequest,
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
  

  const getForo = async () => {
    const res = await getForoRequest();
    setForo(res.data);
  };

  const deleteForo = async (id) => {
    try {
      const res = await deleteForoRequest(id);
      if (res.status === 204) setForo(foro.filter((foro) => foro._id !== id));
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </ForoContext.Provider>
  );
}
ForoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};