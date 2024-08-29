import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

import { useForo } from "../../context/foroContext";
import { useNavigate } from 'react-router-dom';  // Correcto import


import "./Profile.css";

function ProfilePage() {

  const { user, updateProfile, getProfile, isAuthenticated } = useAuth();
  const { getUserPosts, userPosts } = useForo();
  const navigate = useNavigate();  // Usamos useNavigate en lugar de useHistory
  const [profileData, setProfileData] = useState({
    username: user?.username || "",
    description: user?.description || "",
  });


  const { t } = useTranslation();
  // Estado para almacenar una copia del perfil original, útil para la función de cancelar
  const [originalProfileData, setOriginalProfileData] = useState(profileData); 
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const profile = await getProfile();
        if (profile) {
          const initialProfileData = {
            username: profile.username,
            description: profile.description || "",
          };
          setProfileData(initialProfileData);
          setOriginalProfileData(initialProfileData);
        } else {
          throw new Error("Invalid profile data");
        }
      } catch (error) {
        console.error("Error loading profile", error);
        setError("No se pudo cargar el perfil.");
      }
    };
    loadUserProfile();
  }, [getProfile]);

  useEffect(() => {
    getUserPosts();
  }, [getUserPosts]);

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setProfileData(originalProfileData);
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", profileData.username);
      formData.append("description", profileData.description);

      await updateProfile(formData);
      await getProfile();
      setSuccess("Usuario actualizado exitosamente.");
      setError("");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("No se pudo actualizar el perfil.");
      setSuccess("");
    }
  };

  const handleViewPost = (postId) => {
    if (isAuthenticated) {
      navigate(`/foro/${postId}`);  // Navega directamente sin `.push`
    } else {
      navigate('/login');  // Navega directamente sin `.push`
    }
  };

  return (
    <div className="profile">
      <div className="profileHeader">
        <h1>{t('Perfil de Usuario')}</h1>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>{t('Nombre: ')} 
              <input
                type="text"
                className="fileInput"
                name="username"
                value={profileData.username}
                onChange={handleInputChange}
              />
            </label>
            <p>
            <label>{t('Descripción: ')}</label>
            <textarea
              className="form-control"
              name="description"
              value={profileData.description}
              onChange={handleInputChange}
            />
             </p>
            <button type="submit">{t('Guardar Cambios')}</button>
            <button type="button" onClick={handleCancelClick}>{t('Cancelar')}</button>

          </form>
        ) : (
          <>
            <div className="fotoPerfil">
              <img
                src="./images/default-profile-pic.png"
                alt="Foto de perfil"
                className="profile-photo"
              />
            </div>
            <h1>{profileData.username}</h1>
            <p>{profileData.description}</p>
          
          <button onClick={handleEditClick}>{t('Editar Perfil')}</button>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {success && <div className="alert alert-success mt-3">{success}</div>}

          </>
        )}
      </div>

      <div className="recent-activity">
        <h2>Actividad Reciente</h2>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post._id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button 
                onClick={() => handleViewPost(post._id)} 
                className="view-post-button"
              >
                Ver Post Completo
              </button>
            </div>
          ))
        ) : (
          <p>No has realizado ninguna publicación.</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
