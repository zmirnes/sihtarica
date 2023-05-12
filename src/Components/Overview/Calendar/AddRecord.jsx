import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./AddRecord.module.css";
import GlobalContext from "../../../Contexts/GlobalContext";

const AddRecord = ({ showModal, setShowModal, day, month, year, tags, userHours }) => {
  const { onEdit } = useContext(GlobalContext);
  const hours = useRef();
  const tag = useRef();
  const [defaultTag, setDefaultTag] = useState();
  const [defaultHours, setDefaultHours] = useState();

  const onSubmit = () => {
    onEdit(day, month, year, tag.current.value, hours.current.value);
    setShowModal(false);
  };

  useEffect(() => {
    setDefaultHours(userHours[year]?.[month]?.[day]?.hours || 0);
    setDefaultTag(userHours[year]?.[month]?.[day]?.tagID || tags.default.id);
    hours.current.value = defaultHours;
    tag.current.value = defaultTag;
  }, [day, month, tags.default.id, userHours, year, defaultHours, defaultTag]);

  return (
    <div className={`${classes.modal} ${showModal ? classes.modalOpened : classes.modalClosed}`}>
      <div className={classes.inputs}>
        <input type="number" placeholder="Hours" ref={hours} defaultValue={defaultHours} />
        <select ref={tag} defaultValue={defaultTag}>
          {Object.values(tags)
            .sort((a, b) => a.created - b.created)
            .map((tag) => (
              <option value={tag.id} key={tag.id}>
                {tag.tagName}
              </option>
            ))}
        </select>
      </div>
      <div className={classes.actions}>
        <button onClick={onSubmit}>OK</button>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>
  );
};

export default AddRecord;
