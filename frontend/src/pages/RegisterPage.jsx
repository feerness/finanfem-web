import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth";
import "./Register.css"; // Asegúrate de importar tu archivo CSS aquí

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
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
  }, [isAuthenticated]);

  return (
    <main className="register">
      <h1 className="registerTitle">Crea una cuenta</h1>
      {registerErrors.map((error, i) => (
        <p key={i} className="errorMessage">
          {error}
        </p>
      ))}
      <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
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
          <p className="errorMessage">{errors.username?.message}</p>
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
          <p className="errorMessage">{errors.email?.message}</p>
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
          <p className="errorMessage">{errors.password?.message}</p>
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
          <p className="errorMessage">{errors.confirmPassword?.message}</p>
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
