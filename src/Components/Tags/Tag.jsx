import React, { useContext } from "react";
import classes from "./Tag.module.css";
import GlobalContext from "../../Contexts/GlobalContext";

const Tag = ({ tag, setPickedTag, setShowForm }) => {
  const { deleteTag } = useContext(GlobalContext);

  const onDelete = () => {
    deleteTag(tag.id);
  };

  const onEdit = () => {
    setPickedTag({ id: tag.id, color: tag.color, rate: tag.rate, tagName: tag.tagName });
    setShowForm(true);
  };

  return (
    <div className={classes.tag} style={{ borderRight: `10px solid ${tag.color}` }}>
      <div className={classes.nameContainer}>
        <span className={classes.title}>Name:</span>
        <span>{tag.tagName}</span>
      </div>
      <div className={classes.rateContainer}>
        <span className={classes.title}>Rate:</span>
        <span>{tag.rate}</span>
      </div>
      <div className={classes.actions}>
        <button disabled={tag.tagName === "Default"} onClick={onEdit} className={classes.editBtn}>
          Edit
        </button>
        <button disabled={tag.tagName === "Default"} onClick={onDelete} className={classes.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Tag;
