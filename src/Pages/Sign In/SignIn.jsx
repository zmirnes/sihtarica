import React from "react";
import classes from "./SignIn.module.css";
import SignInForm from "./SignInForm";
import logo from "../../assets/logo.svg";

const SignIn = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="Logo" className={classes.logo} />
      <SignInForm />
    </div>
  );
};

export default SignIn;
