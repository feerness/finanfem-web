import PropTypes from "prop-types";
import { useForo } from "../context/foroContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaComment, } from "react-icons/fa"; 
import { useState, } from "react"; 
import "./PostCard.css";


export function ForoCard({ foro, commentsCount }) { 
  const { deleteForo } = useForo();
  const { user } = useAuth();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteForo(foro._id);
    } catch (error) {
      console.error("Error al eliminar el foro:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const isOwner = user?.id === foro.user?._id || user?.id === foro.user;

  return (
    <div className="foro-card">
      <header className="foro-card-header">
        <div className="foro-card-profile">
          <img
            src={
              foro.user?.profileImage
                ? `/uploads/${foro.user.profileImage}`
                : "/images/default-profile-pic.png"
            }
            alt="Perfil"
            className="foro-card-avatar"
          />
          <div>
            <h2 className="foro-card-user">{foro.user?.name || foro.user?.username || "Usuario desconocido"}</h2>
            <p className="foro-card-date">
              {new Date(foro.date).toLocaleDateString()} -{" "}
              {new Date(foro.date).toLocaleTimeString()}
            </p>
          </div>
        </div>
        {isOwner && (
          <div className="foro-card-buttons">
            <button
              onClick={handleDelete}
              className="btn btn-danger"
              disabled={isDeleting}
            >
              {isDeleting ? "Eliminando..." : "Eliminar"}
            </button>
            <Link to={`/foro/edit/${foro._id}`} className="btn btn-primary">
              Editar
            </Link>
          </div>
        )}
      </header>
      <div className="foro-card-content">
        <h1 className="foro-card-title">{foro.title}</h1>
        <p className="foro-card-description">{foro.description}</p>
      </div>
      <div className="foro-card-footer">
        <Link to={`/foro/${foro._id}`} className="foro-card-comments">
          <FaComment /> {commentsCount || 0} comentarios
        </Link>
      </div>
    </div>
  );
}

ForoCard.propTypes = {
  foro: PropTypes.shape({
    user: PropTypes.oneOfType([
      PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        username: PropTypes.string,
        profileImage: PropTypes.string,
      }),
      PropTypes.string,
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  commentsCount: PropTypes.number,
};
