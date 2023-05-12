import React, { useState } from "react";
import classes from "./Tags.module.css";
import TagsList from "../../../Components/Tags/TagsList";
import AddTag from "../../../Components/Tags/AddTag";

const Tags = () => {
  const [showForm, setShowForm] = useState(false);
  const [pickedTag, setPickedTag] = useState();

  return (
    <div className={classes.container}>
      {showForm && <AddTag setShowForm={setShowForm} pickedTag={pickedTag} setPickedTag={setPickedTag} />}
      <div className={classes.tags}>
        <TagsList setPickedTag={setPickedTag} setShowForm={setShowForm} />
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.addBtn} onClick={() => setShowForm(true)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Tags;
