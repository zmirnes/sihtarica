import React, { useContext, useRef } from "react";
import classes from "./AddTag.module.css";
import GlobalContext from "../../Contexts/GlobalContext";

const AddTag = ({ setShowForm, pickedTag, setPickedTag }) => {
  const { addTag, editTag } = useContext(GlobalContext);

  const tagName = useRef();
  const tagRate = useRef();
  const tagColor = useRef();

  const onAdd = () => {
    addTag(tagName.current.value, tagRate.current.value, tagColor.current.value);
  };

  const onEdit = () => {
    editTag(pickedTag.id, tagName.current.value, tagRate.current.value, tagColor.current.value);
  };

  const onClose = () => {
    setShowForm(false);
    setPickedTag();
  };

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <span className={classes.formTitle}>Add new tag</span>
        <input type="text" placeholder="Tag name" ref={tagName} defaultValue={pickedTag ? pickedTag.tagName : ""} />
        <input type="number" step={0.01} placeholder="Hourly rate" ref={tagRate} defaultValue={pickedTag ? pickedTag.rate : ""} />
        <select ref={tagColor} defaultValue={pickedTag ? pickedTag.color : ""}>
          <option value="#aec6cf">Blue</option>
          <option value="#ffb6c1">Pink</option>
          <option value="#b2d8b2">Green</option>
          <option value="#d7aefb">Purple</option>
          <option value="#ffd8b1">Orange</option>
          <option value="#f2e8cf">Yellow</option>
        </select>
        <div className={classes.actions}>
          {!pickedTag && (
            <button onClick={onAdd} className={classes.addBtn}>
              Add
            </button>
          )}
          {pickedTag && (
            <button onClick={onEdit} className={classes.editBtn}>
              Edit
            </button>
          )}
          <button onClick={onClose} className={classes.cancelBtn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTag;
