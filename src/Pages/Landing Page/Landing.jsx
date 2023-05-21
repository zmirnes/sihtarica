import React from "react";
import classes from "./Landing.module.css";
import wave from "../../assets/wave.svg";
import { NavLink } from "react-router-dom";
import mockup from "../../assets/mockup.png";
import Header from "../../Components/Landing Page/Header";

const actionLinks = [
  { to: "/sign-in", name: "Sign In" },
  { to: "/sign-up", name: "Create Account" },
];

const Landing = () => {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.mainContent}>
        <div className={classes.leftSide}>
          <h1>Time is to track work hours!</h1>
          <p>Create free account and easily track your work hours, add tags, and see estimated revanue.</p>
          <div className={classes.actions}>
            {actionLinks.map((link) => (
              <NavLink to={link.to} className={classes.actionLink}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className={classes.rightSide}>
          <img src={mockup} alt="Mockup" className={classes.mockupImg} />
        </div>
      </main>
      <img src={wave} alt="Wave" className={classes.wave} />
    </div>
  );
};

export default Landing;
