import React, { useContext } from "react";
import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../Contexts/GlobalContext";

const links = [
  { name: "Home", path: "./", desc: "View your data, add tracks or more.." },
  { name: "Profile", path: "profile", desc: "Edit your profile data." },
  { name: "Tags", path: "tags", desc: "View or edit your tags.." },
];

const NavLinks = ({ setShowMenu }) => {
  const { signOutUser } = useContext(GlobalContext);

  return (
    <ul className={`${classes.navList}`}>
      {links.map((link) => (
        <li className={classes.navItem} key={link.name}>
          <NavLink className={({ isActive }) => (isActive ? `${classes.activeNavLink} ${classes.navLink}` : classes.navLink)} to={link.path} onClick={() => setShowMenu(false)}>
            <span className={classes.linkName}>{link.name}</span>
          </NavLink>
        </li>
      ))}
      <button onClick={signOutUser}>Logout</button>
    </ul>
  );
};

export default NavLinks;
