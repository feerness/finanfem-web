import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForo } from "../../context/foroContext";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { useAuth } from "../../context/AuthContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "./Foro.css";

dayjs.extend(utc);

export function ForoDetailPage() {
  const { getPost, updatePost, addComment, getComments } = useForo();
  const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    const loadForo = async () => {
      if (params.id) {
        const foro = await getPost(params.id);
        setPost(foro);
        setEditData({
          title: foro.title,
          description: foro.description,
          date: dayjs(foro.date).utc().format("YYYY-MM-DD"),
        });

        // Cargar los comentarios del foro
        const foroComments = await getComments(params.id);
        setComments(foroComments);
      }
    };
    loadForo();
  }, [params.id, getPost, getComments]);

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      console.log("Enviando comentario:", newComment);
      const addedComment = await addComment(params.id, newComment);
      if (addedComment) {
        console.log("Comentario añadido:", addedComment);
        setComments([...comments, addedComment]); // Añadir el nuevo comentario al estado
        setNewComment(""); // Limpiar el textarea después de enviar
      } else {
        console.error("No se pudo añadir el comentario.");
      }
    }
  };
  
  const handleBackClick = () => {
    navigate('/foro'); // Redirige al foro
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(params.id, {
        ...editData,
        date: dayjs.utc(editData.date).format(),
      });
      setIsEditing(false);
      navigate(`/foro/${params.id}`); // Permanece en la misma página
    } catch (error) {
      console.error("Error al actualizar la publicación", error);
    }
  };

  if (!post) return <div>Cargando...</div>;

  return (
    <div className="foro-detail-container">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="foro-edit-form">
          <Label htmlFor="title" className="foro-label">
            Title
          </Label>
          <Input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleEditChange}
            autoFocus
            className="foro-input"
          />
          <Label htmlFor="description" className="foro-label">
            Description
          </Label>
          <Textarea
            name="description"
            value={editData.description}
            onChange={handleEditChange}
            rows="3"
            className="foro-textarea"
          />
          <Label htmlFor="date" className="foro-label">
            Date
          </Label>
          <Input
            type="date"
            name="date"
            value={editData.date}
            onChange={handleEditChange}
            className="foro-input"
          />
          <Button type="submit" className="foro-btn">
            Guardar cambios
          </Button>
        </form>
      ) : (
        <div className="foro-post-detail">
          <h1 className="foro-detail-title">{post.title}</h1>
          <p className="foro-detail-description">{post.description}</p>
          <p className="foro-detail-date">
            {new Date(post.date).toLocaleDateString()}
          </p>
          {user?.id === post.user?._id && (
            <Button onClick={() => setIsEditing(true)} className="foro-btn">
              Editar
            </Button>
          )}
        </div>
      )}

      <div className="comments-section">
        <h3 className="comments-title">Comentarios</h3>
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={comment._id || index} className="comment-item">
              <strong className="comment-author">
                {comment.user.username}
              </strong>
              : <span className="comment-text">{comment.text}</span>
            </li>
          ))}
        </ul>

        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario..."
          rows="3"
          className="comment-textarea"
        />
        <Button className="back-to-foro-btn" onClick={handleBackClick}>
          Volver al Foro
        </Button>
        <Button onClick={handleAddComment} className="comment-btn">
          Añadir Comentario
        </Button>
      </div>
    </div>
  );
}
