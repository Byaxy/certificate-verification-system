import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import loginImage from "../assets/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/admin";

  const onSubmit = async (data) => {
    try {
      await login.mutateAsync(data);

      toast.success("Login successful!");
      navigate(redirectPath, { replace: true });
    } catch (error) {
      toast.error(error.response.data.message || "Login failed");
      console.log("Login failed:", error);
    }
  };

  if (isAuthenticated) {
    navigate(redirectPath, { replace: true });
  }

  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 max-w-xl mx-auto px-5 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-3xl text-center tracking-tight font-bold bg-gradient-to-r to-primary from-gray-900 bg-clip-text text-transparent">
          Certificate Verification System
        </h1>
        <h3 className="text-xl">Login to your account</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full py-5 text-gray-900 focus-visible:ring-0"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full py-5 text-gray-900 focus-visible:ring-0"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
          <div className="w-full">
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <span className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full" />
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </div>
          <div className="flex text-sm">
            <Link to="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden lg:block w-1/2 bg-gray-100">
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
