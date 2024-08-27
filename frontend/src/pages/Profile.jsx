import { useState, useEffect } from "react";
import { getProfileRequest, updateProfileRequest, getUserCommentsRequest, getUserPostsRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import "./Profile.css";

function ProfilePage() {
  const { setUser } = useAuth();
  const [profileData, setProfileData] = useState({
    username: "",
    description: "",
    photo: null,
  });
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const profile = await getProfileRequest();
        console.log("Profile loaded:", profile);
        // Asegúrate de que el perfil contiene un id válido
        if (profile && profile.id) {
          setProfileData({
            username: profile.username,
            description: profile.description || "",
            photo: profile.photo || null,
          });
          console.log("Requesting comments for userId:", profile.id);
          // Obtén los comentarios y publicaciones del usuario
          const userComments = await getUserCommentsRequest(profile.id);
          const userPosts = await getUserPostsRequest(profile.id);
          
          // Actualiza los estados con los comentarios y publicaciones obtenidas
          setComments(userComments);
          setPosts(userPosts);
        } else {
          throw new Error("Invalid profile data");
        }
      } catch (error) {
        console.error("Error loading profile, comments, or posts:", error);
        setError("No se pudo cargar el perfil, comentarios, o publicaciones.");
      }
    };

    loadUserProfile();
  }, []);

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProfileData({
      ...profileData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", profileData.username);
      formData.append("description", profileData.description);
      if (profileData.photo) {
        formData.append("photo", profileData.photo);
      }
      // Revisar el contenido del FormData
      Array.from(formData.entries()).forEach(([key, value]) => {
        console.log(key, value);
      });

      const updatedProfile = await updateProfileRequest(formData);
      console.log("Perfil actualizado:", updatedProfile);
      setUser(updatedProfile);
      setSuccess("Perfil actualizado exitosamente.");
      setError("");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("No se pudo actualizar el perfil.");
      setSuccess("");
    }
  };

  return (
 
    <div className="profile">
      <div className="profileHeader">
        <h1>Perfil de Usuario</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Nombre:   
          <input
                type="text"
                className="fileInput"
                name="username"
                value={profileData.username}
                onChange={handleInputChange}
              />
          </label>
          <p>
          <label>Foto:</label>
          <input
                type="file"
                className="fileInput"
                name="photo"
                onChange={handleFileChange}
              />
          </p>
          <label htmlFor="photo" className="customFileUpload">
            Subir Foto
          </label>
          <p>
          <label>Descripción:</label>
          <textarea
                className="form-control"
                name="description"
                value={profileData.description}
                onChange={handleInputChange}
              />

          <button type="submit">Guardar Cambios</button>
          </p>
        </form>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">{success}</div>}
      </div>

      <div className="profilePosts">
        <h2>Actividad Reciente</h2>

        <h3>Posts Subidos</h3>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          )) 
        ) : (
          
          <p>No has subido ningún post.</p>
        )}
         <h3>Posts Comentados</h3>
        {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment._id} className="post reply">
                  <p>{comment.text}</p>
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
