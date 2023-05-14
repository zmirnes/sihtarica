import React from "react";
import classes from "./Account.module.css";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>Account Settings</span>
      <div className={classes.myAccountContainer}>
        <div className={classes.sideMenu}>
          <NavLink className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)} to="">
            My Account
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)} to="security/">
            Security
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? `${classes.activeNavLink} ${classes.activeDeleteLink}` : classes.navLink)} to="delete/" style={{ color: "red" }}>
            Delete Account
          </NavLink>
        </div>
        <div className={classes.openedTab}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Account;
