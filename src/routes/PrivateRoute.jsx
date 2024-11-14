/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // const { isLoggedIn, isAdmin: userIsAdmin } = useAuth();
  const isLoggedIn = true;
  const isAdmin = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && isLoggedIn) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default PrivateRoute;
