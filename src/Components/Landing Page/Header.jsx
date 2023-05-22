import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", name: "Home" },
  { to: "/help-desk/", name: "Help Desk" },
];

const actionLinks = [
  { to: "/sign-in/", name: "Sign In" },
  { to: "/sign-up/", name: "Create Account" },
];

const Header = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.leftList}>
        {navLinks.map((link) => (
          <li className={classes.listItem} key={link.name}>
            <NavLink to={link.to} className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className={classes.actionLinks}>
        {actionLinks.map((link) => (
          <li className={classes.listItem} key={link.name}>
            <NavLink to={link.to} className={classes.actionLink}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
