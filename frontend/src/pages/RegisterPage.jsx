import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth";
import "./Register.css"; // Asegúrate de importar tu archivo CSS aquí

function Register() {
  const { signup, errors: registerErrors = [], isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/LandingPageClient");
  }, [isAuthenticated, navigate]);

  return (
    <main className="register">
      <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="registerTitle">Crea una cuenta</h1>

        {/* Mostrar los errores generales */}
        {registerErrors.map((error, i) => (
          <p key={i} className="error-message">
            {error}
          </p>
        ))}

        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Escribe tu nombre"
          {...register("username")}
          autoFocus
        />
        {errors.username?.message && (
          <p className="error-message">{errors.username?.message}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@domain.tld"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="error-message">{errors.email?.message}</p>
        )}

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          {...register("password")}
        />
        {errors.password?.message && (
          <p className="error-message">{errors.password?.message}</p>
        )}

        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="********"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p className="error-message">{errors.confirmPassword?.message}</p>
        )}

        <button className="registerBtn">REGISTRAR</button>

        <p>
          ¿Tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </main>
  );
}

export default Register;
