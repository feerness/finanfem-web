import PropTypes from "prop-types";
import { useForo } from "../context/foroContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./PostCard.css"; // Importa el archivo CSS

export function ForoCard({ foro }) {
  const { deleteForo } = useForo();
  const { user } = useAuth();

  const handleDelete = async () => {
    try {
      await deleteForo(foro._id);
    } catch (error) {
      console.error("Error al eliminar el foro:", error);
    }
  };

  const isOwner = user?.id === foro.user?._id || user?.id === foro.user;

  return (
    <div className="foro-card">
      <header className="foro-card-header">
        <h1 className="foro-card-title">{foro.title}</h1>
        {isOwner && (
          <div className="foro-card-buttons">
            <button onClick={handleDelete} className="btn btn-danger">
              Eliminar
            </button>
            <Link to={`/foro/${foro._id}`} className="btn btn-primary">
              Editar
            </Link>
          </div>
        )}
      </header>
      <p className="foro-card-description">{foro.description}</p>
      <p className="foro-card-date">
        {new Date(foro.date).toLocaleDateString()}
      </p>
    </div>
  );
}

ForoCard.propTypes = {
  foro: PropTypes.shape({
    user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

// ForoCard.propTypes = {
//   foro: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     user: PropTypes.string.isRequired, // Asegúrate de que `user` esté definido en `foro`
//   }).isRequired,
// };
