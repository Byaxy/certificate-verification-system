import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import userImage from "../assets/user.png";

const Header = () => {
  const user = {
    email: "John@example.com",
  };

  const location = useLocation();

  const hiddenRoutes = ["/", "/login", "/signup", "/forgot-password"];

  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Max width container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header content */}
        <div className="flex flex-row items-center justify-between sm:py-3 py-1 gap-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl bg-gradient-to-r to-primary from-gray-900 bg-clip-text text-transparent">
              CVerify
            </span>
          </Link>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <div className="hidden sm:flex items-center text-gray-600">
                  <span className="mr-2 text-gray-900 font-medium">ADMIN:</span>
                  <span className="truncate max-w-[200px]">{user.email}</span>
                </div>
                {/* Mobile admin email */}
                <div className="sm:hidden text-gray-600 text-sm">
                  <Popover>
                    <PopoverTrigger>
                      <Avatar className="w-12 h-12 cursor-pointer">
                        <AvatarImage src={userImage} alt="user avatar" />
                      </Avatar>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-2 text-gray-900 font-medium">
                          ADMIN:
                        </span>
                        <span className="truncate max-w-[200px]">
                          {user.email}
                        </span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <Button className="bg-red-600 text-white px-6 py-1.5 rounded-md hover:bg-red-700 transition-colors duration-200">
                  Logout
                </Button>
              </>
            ) : (
              // Login Button
              <Link to="/login">
                <Button className="px-6 py-1.5">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
