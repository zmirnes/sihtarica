import React, { useState } from "react";
import classes from "./Menu.module.css";
import logo from "../../assets/logo.svg";
import NavLinks from "./NavLinks";
import menu from "../../assets/menu.svg";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={classes.container}>
      <MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      <div className={classes.logoContainer}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
      <div className={classes.menuContainer}>
        <NavLinks setShowMenu={setShowMenu} />
      </div>
      <img src={menu} alt="Menu" className={classes.openMenu} onClick={() => setShowMenu(true)} />
    </div>
  );
};

export default Menu;
