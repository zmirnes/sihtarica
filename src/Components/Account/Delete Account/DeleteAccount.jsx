import React, { useContext, useRef, useState } from "react";
import classes from "./DeleteAccount.module.css";
import GlobalContext from "../../../Contexts/GlobalContext";

const DeleteAccount = () => {
  const { users, loggedUser, deleteAccount } = useContext(GlobalContext);
  const password = useRef();
  const [error, setError] = useState("");

  const userData = users.find((user) => user.id === loggedUser);

  const onDelete = (e) => {
    e.preventDefault();
    console.log(userData);
    if (userData.password === password.current.value) {
      deleteAccount();
    } else {
      setError("Password is not correct!");
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes.title}>To delete your account please confirm your action with your password.</span>
      <span>{error}</span>
      <form className={classes.form} onSubmit={onDelete}>
        <input type="password" placeholder="Password" ref={password} />
        <button className={classes.submitBtn}>Delete Account</button>
      </form>
    </div>
  );
};

export default DeleteAccount;
