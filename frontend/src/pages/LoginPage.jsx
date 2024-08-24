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
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/LandingPageClient");
    }
  }, [isAuthenticated]);

  return (
    <main className="login">
      <h1 className="loginTitle">Inicia sesión</h1>
      {loginErrors.map((error, i) => (
        <p key={i} className="errorMessage">
          {error}
        </p>
      ))}

      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          placeholder="youremail@domain.tld"
          {...register("email", { required: true })}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Escribe tu contraseña"
          {...register("password", { required: true, minLength: 6 })}
        />
        <p>{errors.password?.message}</p>

        <button className="loginBtn">INICIA SESIÓN</button>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </main>
  );
}

export default LoginPage;
