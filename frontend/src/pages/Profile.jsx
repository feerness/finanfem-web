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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h4>Perfil de Usuario</h4>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={profileData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Foto</label>
              <input
                type="file"
                className="form-control"
                name="photo"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label>Descripción</label>
              <textarea
                className="form-control"
                name="description"
                value={profileData.description}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Guardar Cambios
            </button>
          </form>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {success && <div className="alert alert-success mt-3">{success}</div>}
        </div>
        <div className="col-md-8">
          <h4>Actividad Reciente</h4>
          <div className="recent-activity">
            <h5>Posts Subidos</h5>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No has subido ningún post.</p>
            )}
            <h5>Posts Comentados</h5>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment._id} className="card mb-3">
                  <div className="card-body">
                    <p className="card-text">{comment.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No has comentado en ningún post.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
