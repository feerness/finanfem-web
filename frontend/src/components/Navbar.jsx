import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/modeContext";
import { useTranslation } from "react-i18next";
import { ButtonLink } from "./ui/ButtonLink";
import "./NavbarAuth.css";

export function Navigationbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-left">
        <h1 className="navbar-brand">
          <Link to={isAuthenticated ? "/LandingPageClient" : "/"}>
            <img
              src="/images/logo.final.png"
              alt="FinanFem"
              className="brand-logo"
            />
          </Link>
        </h1>

        {isAuthenticated && (
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="recursosDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("Recursos")}
              </Link>
              <div className="dropdown-menu" aria-labelledby="recursosDropdown">
                <Link className="dropdown-item" to="./Articulos">
                  {t("Artículos")}
                </Link>
                <Link className="dropdown-item" to="./Pdf">
                  PDF
                </Link>
                <Link className="dropdown-item" to="./Videos">
                  {t("Videos")}
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="herramientasDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("Herramientas")}
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="herramientasDropdown"
              >
                <Link className="dropdown-item" to="./Recursos">
                  {t("Indicadores Financieros")}
                </Link>
                <Link className="dropdown-item" to="./Noticias">
                  {t("Noticias")}
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="comunidadDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("Comunidad")}
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="comunidadDropdown"
              >
                <Link className="dropdown-item" to="./foro">
                  {t("Foro")}
                </Link>
                <Link className="dropdown-item" to="./perfilesCliente">
                  {t("Actividad")}
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="consultoriaDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("Consultoría")}
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="consultoriaDropdown"
              >
                <Link className="dropdown-item" to="./Reportes">
                  {t("Reportes")}
                </Link>
                <Link className="dropdown-item" to="./Terminos">
                  {t("Reglas")}
                </Link>
              </div>
            </li>
          </ul>
        )}
      </div>
      <div className="navbar-right">
        {isAuthenticated ? (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-link"
                id="profile-nav"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="/images/profile-icon.png"
                  alt="Foto de perfil"
                  className="profile-pic"
                />
                {user.username}
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={toggleTheme} className="btn dl-mode">
                <img
                  src={
                    theme === "light"
                      ? "/images/dark-mode.png"
                      : "/images/light-mode.png"
                  }
                  alt={theme === "light" ? t("Modo Oscuro") : t("Modo Claro")}
                  className="theme-icon"
                />
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={toggleLanguage}
                className="btn btn-outline-secondary"
              >
                {i18n.language === "en" ? "SP" : "EN"}
              </button>
            </li>
            <li className="nav-item">
              <Link to="/" onClick={() => logout()} className="logout-link">
                <img
                  src="/images/logout.png"
                  alt="Logout"
                  className="logout-pic"
                />
                <span className="logout-text">{t("Logout")}</span>
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <ul className="navbar-nav">
              <li className="nav-item">
              <a className="btn btn-primary custom-margin" href="#ingresar">
                <ButtonLink to="/login">Ingresar</ButtonLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-secondary custom-margin">
                  <ButtonLink to="/register">Registrarse</ButtonLink>
                </a>
              </li>
            </ul>
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotras">
                ¿Quiénes somos?
              </a>
            </li>
            <li className="nav-item">
              
                Ingresar
              
            </li>
            <li className="nav-item"></li>
          </>
        )}
      </div>
    </nav>
  );
}
