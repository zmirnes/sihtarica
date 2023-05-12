import React from "react";
import classes from "./Loading.module.css";
import loading from "./../../assets/loading.svg";

const Loading = () => {
  return (
    <div className={classes.loadingContainer}>
      <img src={loading} alt="Loading..." className={classes.loadingIcon} />
    </div>
  );
};

export default Loading;
