import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r to-primary from-gray-900 bg-clip-text text-transparent">
            Forgot Password
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <span className="mb-4 text-gray-600">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </span>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full py-5 text-gray-900 focus-visible:ring-0"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
            <div className="w-full flex flex-col gap-5 items-center">
              <Button type="submit" size="lg" className="w-full">
                Send Reset Link
              </Button>
              <div className="text-gray-600 text-sm">OR</div>
              <Link to="/login" className="text-primary hover:underline -mt-1">
                Back to Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
