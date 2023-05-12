import React, { useContext, useEffect, useState } from "react";
import classes from "./SignUpForm.module.css";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../Contexts/GlobalContext";

const SignUpForm = () => {
  const { addUser } = useContext(GlobalContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const validateFormInputs = () => {
    if (fullName.split(" ").filter((word) => word !== "").length < 2) throw new Error("Full name is not valid!");
    if (!/\S+@\S+\.\S+/.test(email)) throw new Error("Email adress is not valid!");
    if (password < 6) throw new Error("Password must be at least 6 characters long.");
    if (password !== repeatedPassword) throw new Error("Passwords not match.");
  };

  useEffect(() => {
    setErrorMessage("");
  }, [fullName, email, password]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    try {
      validateFormInputs();
      addUser(fullName, email, password);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.formHeading}>
        <span className={classes.formTitle}>Create New Account</span>
        <span className={classes.formSubtitle}>Register and join our community.</span>
      </div>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <span className={classes.formError}>{errorMessage}</span>
        <input className={classes.inputField} type="text" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} />
        <input className={classes.inputField} type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input className={classes.inputField} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input className={classes.inputField} type="password" placeholder="Repeat Password" onChange={(e) => setRepeatedPassword(e.target.value)} />
        <button className={classes.createAccBtn}>Create Account</button>
      </form>
      <span className={classes.redirectText}>
        Already have account? <br /> <NavLink to="/sign-in">Login to existing account</NavLink>.{" "}
      </span>
    </div>
  );
};

export default SignUpForm;
