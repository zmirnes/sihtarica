import React from "react";
import classes from "./Account.module.css";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>Account Settings</span>
      <div className={classes.myAccountContainer}>
        <div className={classes.sideMenu}>
          <NavLink>My Account</NavLink>
          <NavLink>Security</NavLink>
          <NavLink style={{ color: "red" }}>Delete Account</NavLink>
        </div>
        <div className={classes.openedTab}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
