import React, { useContext, useRef, useState } from "react";
import classes from "./Profile.module.css";
import GlobalContext from "../../../Contexts/GlobalContext";
import Loading from "../../Loading/Loading";

const Profile = () => {
  const { users, loggedUser, editProfileInfo } = useContext(GlobalContext);
  const user = users && users.find((user) => user.id === loggedUser);
  const [disableField, setdisableFields] = useState(true);

  // Refs

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();
  const company = useRef();
  const position = useRef();

  const onSave = (e) => {
    e.preventDefault();
    setdisableFields(true);
    editProfileInfo({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      phone: phone.current.value,
      company: company.current.value,
      position: position.current.value,
    });
  };
  const onCancel = (e) => {
    e.preventDefault();
    setdisableFields(true);
  };

  return user ? (
    <div className={classes.container}>
      <span className={classes.title}>My profile</span>
      <div className={classes.editBtnContainer}>
        <button onClick={() => setdisableFields(false)}>Edit</button>
      </div>
      <form className={classes.form}>
        <div className={classes.inputBlock}>
          <label>First Name</label>
          <input type="text" defaultValue={user.firstName} disabled={disableField} ref={firstName} />
        </div>
        <div className={classes.inputBlock}>
          <label>Last Name</label>
          <input type="text" defaultValue={user.lastName} disabled={disableField} ref={lastName} />
        </div>
        <div className={classes.inputBlock}>
          <label>Email</label>
          <input type="text" defaultValue={user.email} disabled={disableField} ref={email} />
        </div>
        <div className={classes.inputBlock}>
          <label>Phone</label>
          <input type="text" defaultValue={user.phone} disabled={disableField} ref={phone} />
        </div>
        <div className={classes.inputBlock}>
          <label>Company</label>
          <input type="text" defaultValue={user.company} disabled={disableField} ref={company} />
        </div>
        <div className={classes.inputBlock}>
          <label>Position</label>
          <input type="text" defaultValue={user.position} disabled={disableField} ref={position} />
        </div>
        {!disableField && (
          <div className={classes.formActions}>
            <button onClick={onSave} className={classes.saveBtn}>
              Save
            </button>
            <button onClick={onCancel} className={classes.cancelBtn}>
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  ) : (
    <Loading />
  );
};

export default Profile;
