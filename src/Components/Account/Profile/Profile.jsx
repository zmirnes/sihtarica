import React from "react";
import classes from "./Profile.module.css";
import profileImage from "./../../../assets/profileImage.png";
import editIcon from "../../../assets/editIcon.svg";

const MyProfile = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>My Profile</span>

      {/* Basic info */}

      <div className={classes.basicInfo}>
        <div className={classes.profileImageContainer}>
          <img src={profileImage} alt="Profile" />
        </div>
        <div className={classes.info}>
          <span className={classes.name}>Mirnes Zahirović</span>
          <span className={classes.position}>FE Developer</span>
          <span className={classes.company}>Herceg d.o.o, Srebrenik</span>
        </div>
        <div className={classes.actions}>
          <button className={classes.editBtn}>
            <span>Edit</span>
            <img src={editIcon} alt="Edit" className={classes.editBtnIcon} />
          </button>
        </div>
      </div>

      {/* Personal informations */}

      <div className={classes.personalInformations}>
        <div className={classes.infosContainer}>
          <div className={classes.info}>
            <span className={classes.infoTitle}>First Name</span>
            <span className={classes.infoValue}>Mirnes</span>
          </div>
          <div className={classes.info}>
            <span className={classes.infoTitle}>Last Name</span>
            <span className={classes.infoValue}>Zahirović</span>
          </div>
          <div className={classes.info}>
            <span className={classes.infoTitle}>Email adress</span>
            <span className={classes.infoValue}>zmirnes33@gmail.com</span>
          </div>
          <div className={classes.info}>
            <span className={classes.infoTitle}>Phone</span>
            <span className={classes.infoValue}>+387 61 013 188</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button className={classes.editBtn}>
            <span>Edit</span>
            <img src={editIcon} alt="Edit" className={classes.editBtnIcon} />
          </button>
        </div>
      </div>

      {/* Adress */}

      <div className={classes.adressInformations}>
        <div className={classes.infos}>
          <div className={classes.info}>
            <span className={classes.infoTitle}>Country</span>
            <span className={classes.infoValue}>Bosnia and Herzegovina</span>
          </div>
          <div className={classes.info}>
            <span className={classes.infoTitle}>State</span>
            <span className={classes.infoValue}>Federacija BiH</span>
          </div>
          <div className={classes.info}>
            <span className={classes.infoTitle}>City</span>
            <span className={classes.infoValue}>Srebrenik</span>
          </div>
          <div className={classes.info}>
            <span className={classes.infoTitle}>Postal code</span>
            <span className={classes.infoValue}>75350</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button className={classes.editBtn}>
            <span>Edit</span>
            <img src={editIcon} alt="Edit" className={classes.editBtnIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
