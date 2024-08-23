
import { Link } from 'react-router-dom';
import './Nav.css'; // Asegúrate de crear este archivo CSS con los estilos específicos

const NavBarProfile = () => {
  return (
    <div className="navbar-profile">
      <ul>
        <li><Link to="/profile">Mi Perfil</Link></li>
        <li><Link to="/my-posts">Mis Publicaciones</Link></li>
        <li><Link to="/my-comments">Mis Comentarios</Link></li>
      </ul>
    </div>
  );
};

export default NavBarProfile;
