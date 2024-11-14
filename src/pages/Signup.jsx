import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import loginImage from "../assets/login.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 max-w-xl mx-auto px-5 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-3xl text-center tracking-tight font-bold bg-gradient-to-r to-primary from-gray-900 bg-clip-text text-transparent">
          Certificate Verification System
        </h1>
        <h3 className="text-xl">Create your new account</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full">
              <Input
                type="firstName"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className="w-full py-5 text-gray-900 focus-visible:ring-0"
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <Input
                type="lastName"
                placeholder="Last Name"
                {...register("lastName", { required: "Last Name is required" })}
                className="w-full py-5 text-gray-900 focus-visible:ring-0"
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
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
            <Button type="submit" size="lg" className="w-full">
              Sign up
            </Button>
          </div>
          <div className="text-sm">
            <span className="text-gray-600">Already have an account? </span>{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
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

export default Signup;
