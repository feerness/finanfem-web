import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import {
  getProfile,
  updateProfile,
  getUserComments,
  getUserPosts,
} from "../api/auth";
import "./Profile.css"; // Asegúrate de importar el CSS aquí

export function ProfilePage() {
  const { user, setUser } = useAuth();
  const { register, handleSubmit, setValue } = useForm();
  const [activity, setActivity] = useState({ posts: [], comments: [] });
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    if (user && user.id && !profileLoaded) {
      getProfile()
        .then((profile) => {
          setValue("username", profile.username);
          setValue("photo", profile.photo);
          setValue("description", profile.description);
          setUser(profile);
          setProfileLoaded(true);
        })
        .catch((error) => {
          console.error("Error al cargar el perfil:", error);
        });

      getUserPosts(user.id)
        .then((posts) => {
          setActivity((prevActivity) => ({
            ...prevActivity,
            posts,
          }));
        })
        .catch((error) => {
          console.error("Error al obtener los posts del usuario:", error);
        });

      getUserComments(user.id)
        .then((comments) => {
          setActivity((prevActivity) => ({
            ...prevActivity,
            comments,
          }));
        })
        .catch((error) => {
          console.error("Error al obtener los comentarios del usuario:", error);
        });
    }
  }, [user, setValue, setUser, profileLoaded]);

  const onSubmit = async (data) => {
    try {
      const updatedUser = await updateProfile(data);
      setUser(updatedUser);
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
    }
  };

  return (
    <div className="profile">
      <div className="profileHeader">
        <h1>Perfil de Usuario</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username:</label>
          <input {...register("username")} />

          <label>Foto:</label>
          <input type="file" {...register("photo")} className="fileInput" />
          <label htmlFor="photo" className="customFileUpload">
            Subir Foto
          </label>

          <label>Descripción:</label>
          <textarea {...register("description")} />

          <button type="submit">Guardar Cambios</button>
        </form>
      </div>

      <div className="profilePosts">
        <h2>Actividad Reciente</h2>

        <h3>Posts Subidos</h3>
        {activity.posts.length > 0 ? (
          activity.posts.map((post) => (
            <div key={post._id} className="post">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No has subido ningún post.</p>
        )}

        <h3>Posts Comentados</h3>
        {activity.comments.length > 0 ? (
          activity.comments.map((comment) => (
            <div key={comment._id} className="post reply">
              <p>{comment.content}</p>
              <small>{comment.createdAt}</small>
            </div>
          ))
        ) : (
          <p>No has comentado en ningún post.</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
