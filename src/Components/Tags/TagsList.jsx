import React, { useContext } from "react";
import classes from "./TagsList.module.css";
import GlobalContext from "../../Contexts/GlobalContext";
import Loading from "../Loading/Loading";
import Tag from "./Tag";

const TagsList = ({ setPickedTag, setShowForm }) => {
  const { users, loggedUser } = useContext(GlobalContext);
  const user = users?.find((user) => user.id === loggedUser);
  const userTags = user?.data.tags && Object.values(user.data.tags);

  return (
    <div className={classes.container}>
      {user ? userTags.sort((a, b) => a.created - b.created).map((tag) => <Tag tag={tag} key={tag.id} setPickedTag={setPickedTag} setShowForm={setShowForm} />) : <Loading />}
    </div>
  );
};

export default TagsList;
