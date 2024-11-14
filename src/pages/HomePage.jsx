import { Card, CardContent } from "@/components/ui/card";
import loginImage from "../assets/login.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-[url('/src/assets/login.png')] bg-cover bg-center lg:bg-none">
      <div className="hidden lg:block w-1/2 bg-gray-100">
        <img
          src={loginImage}
          alt="Home Page Illustration"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 max-w-2xl mx-auto px-5 flex flex-col gap-5 items-center justify-center">
        <Card className="w-full py-8">
          <CardContent className="flex flex-col items-center justify-center gap-16">
            <h1 className="text-3xl flex flex-col gap-2 text-center tracking-tight font-bold ">
              <span className="block bg-gradient-to-r to-primary from-gray-900 bg-clip-text text-transparent">
                Welcome to CVerify
              </span>
              <span className="block text-gray-500 font-medium">
                Certificate Verification System
              </span>
            </h1>
            <Link to={"/verify-certificate"}>
              <Button className="uppercase" size="lg">
                Verify Certificate
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
