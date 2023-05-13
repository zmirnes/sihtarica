import React, { useContext } from "react";
import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../Contexts/GlobalContext";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import profileIcon from "../../assets/profileIcon.svg";
import tagsIcon from "../../assets/tagsIcon.svg";

const mainMenuLinks = [
  { name: "Home", path: "./", desc: "View your data, add tracks or more..", icon: dashboardIcon },
  { name: "Profile", path: "profile", desc: "Edit your profile data.", icon: profileIcon },
  { name: "Tags", path: "tags", desc: "View or edit your tags..", icon: tagsIcon },
];

const NavLinks = ({ setShowMenu }) => {
  const { signOutUser } = useContext(GlobalContext);

  return (
    <div className={classes.container}>
      <div>
        <span className={classes.menuTitle}>MAIN MENU</span>
        <ul className={`${classes.navList}`}>
          {mainMenuLinks.map((link) => (
            <li className={classes.navItem} key={link.name}>
              <NavLink className={({ isActive }) => (isActive ? `${classes.activeNavLink} ${classes.navLink}` : classes.navLink)} to={link.path} onClick={() => setShowMenu(false)}>
                <img src={link.icon} alt="Icon" className={classes.linkIcon} />
                <span className={classes.linkName}>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className={classes.menuTitle}>ACTIONS</span>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <button onClick={signOutUser} className={classes.logoutBtn}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
