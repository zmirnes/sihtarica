import React, { useContext, useEffect, useState } from "react";
import classes from "./SignUpForm.module.css";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../Contexts/GlobalContext";

const SignUpForm = () => {
  const { addUser, users } = useContext(GlobalContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const validateFormInputs = () => {
    if (firstName.length < 3) throw new Error("First name is not valid!");
    if (lastName.length < 3) throw new Error("Last name is not valid!");
    if (phone.length < 9) throw new Error("Phone is not valid!");
    if (company.length < 3) throw new Error("Company is not valid!");
    if (position.length < 3) throw new Error("Position is not valid!");
    if (!/\S+@\S+\.\S+/.test(email)) throw new Error("Email adress is not valid!");
    if (users.find((user) => user.email === email)) throw new Error("Email adress is already in use!");
    if (password < 6) throw new Error("Password must be at least 6 characters long.");
    if (password !== repeatedPassword) throw new Error("Passwords not match.");
  };

  useEffect(() => {
    setErrorMessage("");
  }, [firstName, lastName, phone, company, position, email, password]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    try {
      validateFormInputs();
      addUser(firstName, lastName, phone, company, position, email, password);
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
        <input className={classes.inputField} type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <input className={classes.inputField} type="text" placeholder="Last Name" onChange={(e) => setLasttName(e.target.value)} />
        <input className={classes.inputField} type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input className={classes.inputField} type="number" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        <input className={classes.inputField} type="text" placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
        <input className={classes.inputField} type="text" placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
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
