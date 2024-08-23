import { useAuth } from "../../context/AuthContext";
import { ButtonLink } from "./../ui/ButtonLink";
import './Saludo.css'; 

export function Saludo() {
    const { isAuthenticated, user } = useAuth();
    console.log(isAuthenticated, user);
  return (
    <section className="saludo-container">
         <div>
          {isAuthenticated ? (
            <>
              <h1 className="nav-item">
                ¡Bienvenida {user.username}!
              </h1>
              <div className="nav-item text-white">
                <ButtonLink to="/add-post">Añadir Post</ButtonLink>
              </div>
              </>
             ) : (
                <p>hola</p>
          )}
         </div>
    </section>
  );
};