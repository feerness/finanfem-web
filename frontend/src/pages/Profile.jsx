import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { getProfile, updateProfile, getUserComments, getUserPosts } from "../api/auth";

export function ProfilePage() {
  const { user, setUser } = useAuth();
  const { register, handleSubmit, setValue } = useForm();
  const [activity, setActivity] = useState({ posts: [], comments: [] });
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    console.log("useEffect ejecutado");
    if (user && user.id && !profileLoaded) {
      console.log("UserId disponible:", user.id);
      
      getProfile().then((profile) => {
        console.log("Perfil cargado:", profile);
        setValue("username", profile.username);
        setValue("photo", profile.photo);
        setValue("description", profile.description);
        setUser(profile);
        setProfileLoaded(true);
      }).catch((error) => {
        console.error("Error al cargar el perfil:", error);
      });

      getUserPosts(user.id).then((posts) => {
        console.log("Posts obtenidos:", posts);
        setActivity((prevActivity) => ({
          ...prevActivity,
          posts,
        }));
      }).catch((error) => {
        console.error("Error al obtener los posts del usuario:", error);
      });

      getUserComments(user.id).then((comments) => {
        console.log("Comentarios obtenidos:", comments);
        setActivity((prevActivity) => ({
          ...prevActivity,
          comments,
        }));
      }).catch((error) => {
        console.error("Error al obtener los comentarios del usuario:", error);
      });
    } else {
      console.error("El userId no está disponible.");
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
    <div>
      <h1>Perfil de Usuario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username:</label>
        <input {...register("username")} />

        <label>Foto:</label>
        <input {...register("photo")} />

        <label>Descripción:</label>
        <textarea {...register("description")} />

        <button type="submit">Guardar Cambios</button>
      </form>

      <h2>Actividad Reciente</h2>
      <div>
        <h3>Posts Subidos</h3>
        {activity.posts.length > 0 ? (
          activity.posts.map((post) => (
            <div key={post._id}>{post.title}</div>
          ))
        ) : (
          <p>No has subido ningún post.</p>
        )}

        <h3>Posts Comentados</h3>
        {activity.comments.length > 0 ? (
          activity.comments.map((comment) => (
            <div key={comment._id}>{comment.content}</div>
          ))
        ) : (
          <p>No has comentado en ningún post.</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;

