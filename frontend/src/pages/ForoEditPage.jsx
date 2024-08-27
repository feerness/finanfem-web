import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForo } from "../context/foroContext";

export function ForoEditPage() {
  const { id } = useParams(); // Obtener el ID desde la URL
  const { getPost, updatePost } = useForo();
  const navigate = useNavigate();
  const [foroData, setForoData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchForo = async () => {
      try {
        const post = await getPost(id); // Obtener los datos del foro
        setForoData(post);
      } catch (error) {
        console.error("Error al obtener los datos del foro:", error);
      }
    };

    fetchForo();
  }, [id, getPost]);

  const handleInputChange = (e) => {
    setForoData({ ...foroData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, foroData); // Actualizar los datos del foro
      navigate("/foro"); // Redirigir al listado de foros
    } catch (error) {
      console.error("Error al actualizar el foro:", error);
    }
  };

  return (
    <div>
      <h1>Editar Publicación</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={foroData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={foroData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}
