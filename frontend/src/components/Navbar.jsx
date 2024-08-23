import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ButtonLink } from "./ui/ButtonLink";
import "./NavbarAuth.css";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand">
        <Link to={isAuthenticated ? "/LandingPageClient" : "/"}>
          <img src="/images/logo.final.png" alt="FinanFem" className="brand-logo" />
        </Link>
      </h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
        <ul className="navbar-nav ml-auto">
          {isAuthenticated ? (
            <>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" id="recursosDropdown"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Recursos
                </Link>
                <div className="dropdown-menu" aria-labelledby="recursosDropdown">
                  <Link className="dropdown-item" to="./Articulos">Artículos</Link>
                  <Link className="dropdown-item" to="./Pdf">PDF</Link>
                  <Link className="dropdown-item" to="./Videos">Videos</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" id="herramientasDropdown"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Herramientas
                </Link>
                <div className="dropdown-menu" aria-labelledby="herramientasDropdown">
                  <Link className="dropdown-item" to="./Recursos">Indicadores Financieros</Link>
                  <Link className="dropdown-item" to="./Noticias">Noticias</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" id="comunidadDropdown"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Comunidad
                </Link>
                <div className="dropdown-menu" aria-labelledby="comunidadDropdown">
                  <Link className="dropdown-item" to="./foro">Foro</Link>
                  <Link className="dropdown-item" to="./perfilesCliente">Actividad</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" id="consultoriaDropdown"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Consultoría
                </Link>
                <div className="dropdown-menu" aria-labelledby="consultoriaDropdown">
                  <Link className="dropdown-item" to="./Reportes">Reportes</Link>
                  <Link className="dropdown-item" to="./Terminos">Reglas</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to="/perfil" className="nav-link dropdown-toggle" id="perfilDropdown"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="/images/profile-icon.png" alt="Foto de perfil" className="profile-pic" />
                </Link>
                <div className="dropdown-menu" aria-labelledby="perfilDropdown">
                  <Link className="dropdown-item" to="./Profile">Perfil</Link>
                  <Link className="dropdown-item" to="/" onClick={() => logout()}>Logout</Link>
                </div>
              </li>

            </>
          ) : (
            <>
              <li className="nav-item text-white">
                <ButtonLink to="/login">Login</ButtonLink>
              </li>
              <li className="nav-item text-white">
                <ButtonLink to="/register">Register</ButtonLink>
              </li>
            </>
          )}
        </ul>
      
    </nav>
  );
  
}
