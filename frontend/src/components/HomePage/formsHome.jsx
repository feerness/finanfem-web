
import { useNavigate} from "react-router-dom";
import { useState } from 'react';
import "./formsHome.css";

const Saludo = () => {
  return (
    <div className="saludo">
      <p>¡Bienvenido al registro!
      </p>
      <h2> Nos alegra recibirte en nuestra plataforma y te invitamos a registrarte para que puedas acceder a todos los beneficios</h2>

    </div>
  );
};

const RegisterForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    if (registerPassword !== confirmPassword) {
      alert("¡Las contraseñas no coinciden!");
      return;
    }

    if (registerEmail && registerUsername && registerPassword) {
      console.log("Register:", {
        email: registerEmail,
        username: registerUsername,
        password: registerPassword,
      });
      alert("¡Registro exitoso!");
      navigate("/"); // Redirige a la página principal
    } else {
      alert("Por favor, complete todos los campos.");
    }

    // Limpia el formulario
    setRegisterEmail("");
    setRegisterUsername("");
    setRegisterPassword("");
    setConfirmPassword("");
  };

  return (
    <form className="register-form" onSubmit={handleRegisterSubmit}>
      <input
        type="text"
        id="registerUsername"
        value={registerUsername}
        onChange={(e) => setRegisterUsername(e.target.value)}
        placeholder="Nombre de usuario"
      />
      <input
        type="email"
        id="registerEmail"
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
        placeholder="Correo electrónico"
      />
      <input
        type="password"
        id="registerPassword"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <input
        type="password"
        id="registerConfirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirmar contraseña"
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

const CajaR = () => {
  return (
    <div className="caja">
      <Saludo />
      <div className="form-container">
        <h1>Regístrate</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default CajaR;