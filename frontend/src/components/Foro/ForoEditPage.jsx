import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForo } from "../../context/foroContext";
import "./ForoEditPage.css"; // Importa el nuevo CSS

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

  // Manejar cambios en los inputs del formulario
  const handleInputChange = (e) => {
    setForoData({ ...foroData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, foroData); // Actualizar los datos del foro
      navigate("/foro"); // Redirigir al listado de foros
    } catch (error) {
      console.error("Error al actualizar el foro:", error);
    }
  };

    // Manejar el clic del botón "Volver" sin guardar cambios
    const handleBackClick = () => {
      navigate("/foro"); // Redirigir al listado de foros sin guardar cambios
    };
  

  return (
    <div className="foro-edit-container">
      <h1 className="foro-edit-title">Editar Publicación</h1>
      <form onSubmit={handleSubmit} className="foro-edit-form">
        <div className="foro-edit-group">
          <label htmlFor="title" className="foro-edit-label">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={foroData.title}
            onChange={handleInputChange}
            required
            className="foro-edit-input"
          />
        </div>
        <div className="foro-edit-group">
          <label htmlFor="description" className="foro-edit-label">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={foroData.description}
            onChange={handleInputChange}
            required
            className="foro-edit-textarea"
          />
        </div>
        <div className="foro-edit-actions">
          <button type="button" onClick={handleBackClick} className="foro-edit-back-btn">
            Volver
          </button>
          <button type="submit" className="foro-edit-save-btn">Guardar Cambios</button>
        </div>
      </form>
    </div>
  );
}
