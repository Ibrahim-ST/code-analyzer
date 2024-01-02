import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingIcon from "../components/LoadingIcon";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingIcon />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/admin-login" state={{ from: location }} />;
};

export default PrivateRoute;
