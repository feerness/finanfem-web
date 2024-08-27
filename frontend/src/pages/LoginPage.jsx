import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/auth";
import "./Login.css"; // Asegúrate de importar tu archivo CSS aquí

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors = [], isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/LandingPageClient");
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="login">
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="loginTitle">Inicia sesión</h1>

        {/* Usa la clase "error-message" para los mensajes de error */}
        {loginErrors.map(
          (error, i) =>
            error && ( // Verifica que el error no esté vacío antes de renderizarlo
              <p key={i} className="error-message">
                {error}
              </p>
            )
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          placeholder="youremail@domain.tld"
          {...register("email", { required: true })}
        />
        {errors.email?.message && (
          <p className="error-message">{errors.email?.message}</p>
        )}

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Escribe tu contraseña"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password?.message && (
          <p className="error-message">{errors.password?.message}</p>
        )}

        <button className="loginBtn">INICIA SESIÓN</button>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </main>
  );
}

export default LoginPage;
