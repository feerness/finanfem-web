import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import './Saludo.css'; 


export function Saludo() {
    const { isAuthenticated, user } = useAuth();
    console.log(isAuthenticated, user);
    const { t } = useTranslation();
  return (
    <section className="saludo-container">
         <div>
          {isAuthenticated ? (
            <>
              <h1 className="nav-item">

              {t('¡Bienvenida')} {user.username}!
              </h1>

              </>
             ) : (
                <p>hola</p>
          )}
         </div>
    </section>
  );
};