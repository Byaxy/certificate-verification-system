/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAdmin }) => {
  // const { isLoggedIn, isAdmin: userIsAdmin } = useAuth();
  const isLoggedIn = true;
  const userIsAdmin = true;

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  if (isAdmin && !userIsAdmin) {
    return <Navigate to="/student" />;
  }

  if (!isAdmin && userIsAdmin) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default PrivateRoute;
