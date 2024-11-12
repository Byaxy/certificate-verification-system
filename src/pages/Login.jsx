import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import loginImage from "../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 max-w-xl mx-auto px-5 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-3xl text-center tracking-tight font-bold bg-gradient-to-r to-primary from-gray-900 bg-clip-text text-transparent">
          Certificate Verification System
        </h1>
        <h3 className="text-xl">Login to your account</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full py-6 text-gray-900 focus-visible:ring-0"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full py-6 text-gray-900 focus-visible:ring-0"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
          <div className="flex flex-wrap justify-between pt-2 gap-5">
            <Button type="submit" size="lg">
              Log in
            </Button>
            <Link
              to="/forgot-password"
              className="text-red-500 text-sm hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="text-sm w-full text-center">
            <span className="text-gray-600">Don&apos;t have an account? </span>{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-100">
        {/* Add your image or content here */}
        <img
          src={loginImage}
          alt="Login Illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
