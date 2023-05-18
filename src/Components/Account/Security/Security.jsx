import React, { useContext, useRef, useState } from "react";
import classes from "./Security.module.css";
import GlobalContext from "../../../Contexts/GlobalContext";

const Security = () => {
  const { users, loggedUser, changePassword, signOutUser } = useContext(GlobalContext);
  const [error, setError] = useState("");
  const oldPassword = useRef();
  const newPassword = useRef();
  const repeatedPassword = useRef();

  const userData = users.find((user) => user.id === loggedUser);

  const onSubmit = (e) => {
    e.preventDefault();
    if (oldPassword.current.value === userData.password) {
      if (newPassword.current.value === repeatedPassword.current.value) {
        changePassword(newPassword.current.value);
        signOutUser();
      } else {
        setError("Password don't match!");
      }
    } else {
      setError("Old password is not correct!");
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes.title}>Change password of your account.</span>
      <span>{error}</span>
      <form className={classes.form} onSubmit={onSubmit}>
        <input type="password" placeholder="Old Password" ref={oldPassword} />
        <input type="password" placeholder="New Password" ref={newPassword} />
        <input type="password" placeholder="Repeat New Password" ref={repeatedPassword} />
        <button type="submit" className={classes.submitBtn}>
          Change password
        </button>
      </form>
    </div>
  );
};

export default Security;
