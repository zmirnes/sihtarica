import React from "react";
import classes from "./SignUp.module.css";
import logo from "../../assets/logo.svg";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="Logo" className={classes.logo} />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
