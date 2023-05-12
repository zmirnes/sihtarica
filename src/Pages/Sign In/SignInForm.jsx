import React, { useContext, useState } from "react";
import classes from "./SignInForm.module.css";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../Contexts/GlobalContext";

const SignInForm = () => {
  const { signInUser } = useContext(GlobalContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      signInUser(email, password);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.formHeading}>
        <span className={classes.formTitle}>Welcome back. </span>
        <span className={classes.formSubtitle}>Please login to your account.</span>
      </div>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <span className={classes.formError}>{errorMessage}</span>
        <input className={classes.inputField} type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input className={classes.inputField} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className={classes.createAccBtn}>Login</button>
      </form>
      <span className={classes.redirectText}>
        Don't have account? <br /> <NavLink to="/sign-up">Create new account</NavLink>.{" "}
      </span>
    </div>
  );
};

export default SignInForm;
