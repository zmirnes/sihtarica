import React from "react";
import classes from "./MobileMenu.module.css";
import logo from "../../assets/logo.svg";
import NavLinks from "./NavLinks";
import closeMenu from "../../assets/closeMenu.svg";

const MobileMenu = ({ setShowMenu, showMenu }) => {
  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <div className={`${classes.mobileMenu} ${showMenu ? classes.menuOpened : classes.menuClosed}`}>
      <div className={classes.mobileMenuHeader}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </div>
        <img src={closeMenu} alt="Close menu" className={classes.closeMenuBtn} onClick={closeMenuHandler} />
      </div>
      <NavLinks setShowMenu={setShowMenu} />
    </div>
  );
};

export default MobileMenu;
