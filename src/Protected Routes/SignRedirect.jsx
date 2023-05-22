import React, { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";
import { Navigate } from "react-router-dom";

const SignRedirect = ({ children }) => {
  const { loggedUser } = useContext(GlobalContext);

  if (loggedUser) {
    return <Navigate to="/dashboard/" replace />;
  } else {
    return children;
  }
};

export default SignRedirect;
