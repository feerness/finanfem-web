import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {Button} from "../components/ui/Button";
import {Card} from "../components/ui/Card";
import {Input} from "../components/ui/Input";
import {Label} from "../components/ui/Label";
import {Message} from "../components/ui/Message";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

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
    <div className="">
      <Card>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            name="username"
            placeholder="Write your name"
            {...register("username")}
            autoFocus
          />
          {errors.username?.message && (
            <p className="">{errors.username?.message}</p>
          )}

          <Label htmlFor="email">Email:</Label>
          <Input
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="">{errors.email?.message}</p>
          )}

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="">{errors.password?.message}</p>
          )}

          <Label htmlFor="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="">{errors.confirmPassword?.message}</p>
          )}
          <Button>Submit</Button>
        </form>
        <p>
          Already Have an Account?  <Link className="" to="/login">Login</Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;