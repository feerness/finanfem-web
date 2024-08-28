import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./Profile.css";

function ProfilePage() {
  const { user, updateProfile, getProfile } = useAuth(); // setUser,
  const [profileData, setProfileData] = useState({
    username: user?.username || "", // Si user existe, toma el username, si no, inicializa como string vacío
    description: user?.description || "", // Lo mismo para la descripción
    photo: user?.photo || null, // Y para la foto
  });

  // Estado para almacenar una copia del perfil original, útil para la función de cancelar
  const [originalProfileData, setOriginalProfileData] = useState(profileData); 
  // Estado para manejar si el usuario está en modo de edición
  const [isEditing, setIsEditing] = useState(false);
  // Estados para manejar errores y mensajes de éxito
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // useEffect que carga los datos del perfil cuando el componente se monta
  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        // Llama a la función getProfile desde el contexto para obtener el perfil actualizado del usuario
        const profile = await getProfile();
        console.log("Profile loaded:", profile);
        
        // Verifica si el perfil es válido
        if (profile) {
          // Crea un objeto con los datos iniciales del perfil
          const initialProfileData = {
            username: profile.username,
            description: profile.description || "", // Si no hay descripción, usa un string vacío
            photo: profile.photo ? `http://localhost:4000/uploads/${profile.photo}` : null, // Si hay foto, crea la URL de la misma
          };
          console.log('Datos iniciales del perfil:', initialProfileData);

          // Actualiza el estado del perfil y el estado de los datos originales
          setProfileData(initialProfileData);
          setOriginalProfileData(initialProfileData);
        } else {
          // Si el perfil no es válido, lanza un error
          throw new Error("Invalid profile data");
        }
      } catch (error) {
        // Si hay un error al cargar el perfil, se muestra un mensaje de error
        console.error("Error loading profile", error);
        setError("No se pudo cargar el perfil.");
      }
    };
    
    // Llama a la función loadUserProfile para cargar los datos del perfil
    loadUserProfile();
  }, []);
    
  // Maneja el cambio en los inputs de texto (nombre y descripción)
  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value, // Actualiza el valor correspondiente en profileData
    });
  };

  // Maneja el cambio en el input de archivo (foto)
  const handleFileChange = (e) => {
    setProfileData({
      ...profileData,
      photo: e.target.files[0], // Actualiza la foto en profileData
    });
  };

  // Función que se ejecuta cuando el usuario presiona "Editar Perfil"
  const handleEditClick = () => {
    setIsEditing(true); // Activa el modo de edición
  };

  // Función que se ejecuta cuando el usuario presiona "Cancelar"
  const handleCancelClick = () => {
    setProfileData(originalProfileData); // Restaura los datos originales del perfil
    setIsEditing(false); // Desactiva el modo de edición
  };

  // Maneja el envío del formulario de edición de perfil
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Crea un objeto FormData para enviar los datos del perfil
      const formData = new FormData();
      formData.append("username", profileData.username);
      formData.append("description", profileData.description);
      if (profileData.photo) {
        formData.append("photo", profileData.photo); 
      }
  
      // Llama a updateProfile desde el contexto para actualizar el perfil en el servidor
      await updateProfile(formData);
      
      // Recarga el perfil actualizado después de guardar los cambios
      await getProfile();
  
      // Muestra un mensaje de éxito y desactiva el modo de edición
      setSuccess("Perfil actualizado exitosamente.");
      setError("");
      setIsEditing(false);
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
        {isEditing ? (
          // Muestra el formulario de edición si isEditing es true
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
             </p>
            <button type="submit">Guardar Cambios</button>
            <button type="button" onClick={handleCancelClick}>Cancelar</button>
          </form>
        ) : (
          // Muestra los datos del perfil si no estamos en modo de edición
          <>
          <div>
            <img src={profileData.photo} alt="Foto de perfil" className="profile-photo" />
            <h1>{profileData.username}</h1>
            <p>{profileData.description}</p>
          </div>
          <button onClick={handleEditClick}>Editar Perfil</button>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {success && <div className="alert alert-success mt-3">{success}</div>}
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
