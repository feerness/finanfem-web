import PropTypes from 'prop-types';
import { useForo } from "../context/foroContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
    <div className="bg-purple-600 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{foro.title}</h1>
        {isOwner && (
          <div className="flex gap-x-2 items-center">
            <button onClick={handleDelete} className="btn btn-danger">
              Eliminar
            </button>
            <Link to={`/foro/${foro._id}`} className="btn btn-primary">
              Editar
            </Link>
          </div>
        )}
      </header>
      <p className="text-slate-300">{foro.description}</p>
      <p>{new Date(foro.date).toLocaleDateString()}</p>
    </div>
  );
}

// ForoCard.propTypes = {
//   foro: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     user: PropTypes.string.isRequired, // Asegúrate de que `user` esté definido en `foro`
//   }).isRequired,
// };
ForoCard.propTypes = {
  foro: PropTypes.shape({
    user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
