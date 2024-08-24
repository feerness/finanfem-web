import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {Button} from "../components/ui/Button";
import {Card} from "../components/ui/Card";
import {Input} from "../components/ui/Input";
import {Label} from "../components/ui/Label";
import {Message} from "../components/ui/Message";
import { loginSchema } from "../schemas/auth";

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
    <div className="">
      <Card>
        {loginErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Email:</Label>
          <Input
            label="Write your email"
            type="email"
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email", { required: true })}
          />
          <p>{errors.email?.message}</p>

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Write your password"
            {...register("password", { required: true, minLength: 6 })}
          />
          <p>{errors.password?.message}</p>

          <Button>Login</Button>
        </form>

        <p className="">
          Dont have an account? <Link to="/register" className="">Sign up</Link>
        </p>
      </Card>
    </div>
  );
}
export default LoginPage;
