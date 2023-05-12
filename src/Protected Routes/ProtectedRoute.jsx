import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import GlobalContext from "../Contexts/GlobalContext";

const ProtectedRoute = ({ children }) => {
  const { loggedUser } = useContext(GlobalContext);

  if (loggedUser) {
    return children;
  } else {
    return <Navigate to={"/sign-in"} replace />;
  }
};

export default ProtectedRoute;
