import React from "react";
import classes from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <Menu />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
