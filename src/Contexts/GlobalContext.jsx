import { createContext, useEffect, useState } from "react";
import { db } from "./Firebase";
import { onValue, ref, remove, set, update } from "firebase/database";
import { uid } from "uid";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [DBData, setDBData] = useState(null);
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));
  const navigate = useNavigate();

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setDBData(() => snapshot.val());
    });
  }, []);

  useEffect(() => {
    DBData &&
      setUsers(() => {
        return Object.values(DBData.users);
      });
  }, [DBData]);

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  }, [loggedUser]);

  const addUser = (firstName, lastName, phone, company, position, email, password) => {
    const id = uid();
    set(ref(db, `/users/${id}/`), {
      id: id,
      data: {
        hours: { year: { month: { day: { hours: 0, tagID: "default" } } } },
        tags: { default: { id: id, tagName: "Default", rate: 0, color: "transparent" } },
      },
      firstName,
      lastName,
      phone,
      company,
      position,
      email,
      password,
    });
  };

  const signInUser = (email, password) => {
    if (!users.find((user) => user.email === email)) throw new Error("Can't find that user. Check email.");
    if (users.some((user) => user.email === email && user.password === password)) {
      const user = users.find((user) => user.email === email && user.password === password);
      setLoggedUser(user.id);
      navigate("/dashboard/");
    } else {
      throw new Error("Password does not match!");
    }
  };

  const signOutUser = () => {
    setLoggedUser(null);
  };

  const onEdit = (day, month, year, tagID, hours) => {
    set(ref(db, `/users/${loggedUser}/data/hours/${year}/${month}/${day}`), {
      hours: hours,
      tagID: tagID,
    });
  };

  const addTag = (tagName, rate, color) => {
    const id = uid();
    set(ref(db, `/users/${loggedUser}/data/tags/${id}`), {
      id,
      color,
      tagName,
      rate,
      created: new Date().getTime(),
    });
  };
  const deleteTag = (id) => {
    remove(ref(db, `/users/${loggedUser}/data/tags/${id}`));
  };

  const editTag = (id, tagName, rate, color) => {
    update(ref(db, `/users/${loggedUser}/data/tags/${id}`), {
      color,
      tagName,
      rate,
    });
  };

  const deleteRecord = (year, month, day) => {
    remove(ref(db, `/users/${loggedUser}/data/hours/${year}/${month}/${day}`));
  };

  const editProfileInfo = (data) => {
    Object.entries(data).forEach(([key, value]) => {
      set(ref(db, `/users/${loggedUser}/${key}`), value);
    });
  };

  const changePassword = (newPassword) => {
    set(ref(db, `/users/${loggedUser}/password`), newPassword);
  };

  const deleteAccount = () => {
    signOutUser();
    remove(ref(db, `users/${loggedUser}`));
  };

  return (
    <GlobalContext.Provider
      value={{ addUser, signInUser, signOutUser, users, loggedUser, onEdit, addTag, deleteTag, editTag, deleteRecord, editProfileInfo, changePassword, deleteAccount }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
