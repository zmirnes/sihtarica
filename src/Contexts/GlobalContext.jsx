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
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("Succesfully logged in");

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

  const addUser = async (email, password) => {
    const id = uid();
    await set(ref(db, `/users/${id}/`), {
      id: id,
      data: {
        hours: { year: { month: { day: { hours: 0, tagID: "default" } } } },
        tags: { default: { id: id, tagName: "Default", rate: 0, color: "transparent" } },
      },
      email,
      password,
    });
    navigate("/sign-in");
    showNotification("Registration complete. Please login.");
  };

  const signInUser = (email, password) => {
    if (!users.find((user) => user.email === email)) throw new Error("Can't find that user. Check email.");
    if (users.some((user) => user.email === email && user.password === password)) {
      const user = users.find((user) => user.email === email && user.password === password);
      setLoggedUser(user.id);
      navigate("/dashboard/");
      showNotification("Successfully logged in!");
    } else {
      throw new Error("Password does not match!");
    }
  };

  const signOutUser = () => {
    setLoggedUser(null);
  };

  const onEdit = async (day, month, year, tagID, hours) => {
    await set(ref(db, `/users/${loggedUser}/data/hours/${year}/${month}/${day}`), {
      hours: hours,
      tagID: tagID,
    });
    showNotification("Record added.");
  };

  const addTag = async (tagName, rate, color) => {
    const id = uid();
    await set(ref(db, `/users/${loggedUser}/data/tags/${id}`), {
      id,
      color,
      tagName,
      rate,
      created: new Date().getTime(),
    });
    showNotification("New tag added.");
  };
  const deleteTag = async (id) => {
    await remove(ref(db, `/users/${loggedUser}/data/tags/${id}`));
    showNotification("Tag deleted!");
  };

  const editTag = async (id, tagName, rate, color) => {
    await update(ref(db, `/users/${loggedUser}/data/tags/${id}`), {
      color,
      tagName,
      rate,
    });
    showNotification("Update successfull.");
  };

  const deleteRecord = async (year, month, day) => {
    await remove(ref(db, `/users/${loggedUser}/data/hours/${year}/${month}/${day}`));
    showNotification("Record deleted!");
  };

  const editProfileInfo = (data) => {
    Object.entries(data).forEach(([key, value]) => {
      set(ref(db, `/users/${loggedUser}/${key}`), value);
    });
    showNotification("Update successfull.");
  };

  const changePassword = async (newPassword) => {
    await set(ref(db, `/users/${loggedUser}/password`), newPassword);
    signOutUser();
    showNotification("Login with your new password.");
  };

  const deleteAccount = () => {
    signOutUser();
    remove(ref(db, `users/${loggedUser}`));
    showNotification("User deleted!");
  };

  const showNotification = (message) => {
    setNotificationMessage(message);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000);
  };

  return (
    <GlobalContext.Provider
      value={{
        addUser,
        signInUser,
        signOutUser,
        users,
        loggedUser,
        onEdit,
        addTag,
        deleteTag,
        editTag,
        deleteRecord,
        editProfileInfo,
        changePassword,
        deleteAccount,
        showNotification,
        notificationMessage,
        notificationVisible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
