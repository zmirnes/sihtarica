import React, { useContext } from "react";
import classes from "./Profile.module.css";
import GlobalContext from "../../../Contexts/GlobalContext";
import Loading from "../../Loading/Loading";

const Profile = () => {
  const { users, loggedUser } = useContext(GlobalContext);

  const user = users && users.find((user) => user.id === loggedUser);

  return user ? (
    <div className={classes.container}>
      <span className={classes.title}>My profile</span>
      <div className={classes.editBtnContainer}>
        <button>Edit</button>
      </div>
      <form className={classes.form}>
        <div className={classes.inputBlock}>
          <label>First Name</label>
          <input type="text" defaultValue={user.firstName} />
        </div>
        <div className={classes.inputBlock}>
          <label>Last Name</label>
          <input type="text" defaultValue={user.lastName} />
        </div>
        <div className={classes.inputBlock}>
          <label>Email</label>
          <input type="text" defaultValue={user.email} />
        </div>
        <div className={classes.inputBlock}>
          <label>Phone</label>
          <input type="text" defaultValue={user.phone} />
        </div>
        <div className={classes.inputBlock}>
          <label>Company</label>
          <input type="text" defaultValue={user.company} />
        </div>
        <div className={classes.inputBlock}>
          <label>Position</label>
          <input type="text" defaultValue={user.position} />
        </div>
        <div className={classes.formActions}>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  ) : (
    <Loading />
  );
};

export default Profile;
