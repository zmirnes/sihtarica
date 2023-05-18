import React, { useContext, useEffect, useState } from "react";
import classes from "./Calendar.module.css";
import FilterCalendar from "./FilterCalendar";
import AddRecord from "./AddRecord";
import GlobalContext from "../../../Contexts/GlobalContext";
import Loading from "../../Loading/Loading";

const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Calendar = ({ setSelectedDate, setShowData }) => {
  const { users, loggedUser, deleteRecord } = useContext(GlobalContext);
  const userData = users.find((user) => user.id === loggedUser);
  const date = new Date();
  const currDate = date.getDate();
  const [currMonth, setCurrMonth] = useState(date.getMonth());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const lastDay = new Date(currYear, currMonth + 1, 0).getDate();
  const firstDay = new Date(currYear, currMonth, 1 - 1).getDay();
  const monthDays = Array.from({ length: lastDay }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i + 1);
  const [showModal, setShowModal] = useState(false);
  const [pickedDate, setPickedDate] = useState();

  // Deleting record on hold
  const [clickStarted, setClickStarted] = useState(false);
  const [longPressExecuted, setLongPressExecuted] = useState(false);
  const [disableModal, setDisableModal] = useState(false);
  const [preventInitial, setPreventInitial] = useState(true);

  ///// Throwing back to the overview some date ////

  useEffect(() => {
    setSelectedDate({ month: currMonth, year: currYear });
    userData && setShowData(true);
  }, [currMonth, currYear, setSelectedDate, setShowData, userData]);

  ///////////////////////////////////////////////

  useEffect(() => {
    let timeoutID;
    if (clickStarted) {
      setPreventInitial(false);
      timeoutID = setTimeout(() => {
        deleteRecord(currYear, currMonth, pickedDate);
        setLongPressExecuted(true);
        setDisableModal(true);
      }, 1500);
    } else {
      if (!longPressExecuted && !preventInitial) {
        clearTimeout(timeoutID);
        setDisableModal(false);
        console.log("Ponisteno");
      }
    }

    return () => {
      clearTimeout(timeoutID);
      setLongPressExecuted(false);
      setDisableModal(false);
    };
    // eslint-disable-next-line
  }, [clickStarted]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getBorderColor = (year, month, day) => {
    const getID = userData?.data.hours[year]?.[month]?.[day]?.tagID || "default";
    const getColorCode = userData?.data?.tags?.[getID].color;
    return getColorCode;
  };

  return userData && userData.data.tags && userData.data.hours ? (
    <div className={classes.container}>
      <div className={classes.calendarHeader}>
        <FilterCalendar changeMonth={setCurrMonth} changeYear={setCurrYear} showModal={showModal} currMonth={currMonth} currYear={currYear} />
        <AddRecord showModal={showModal} setShowModal={setShowModal} day={pickedDate} month={currMonth} year={currYear} tags={userData.data.tags} userHours={userData.data.hours} />
      </div>
      <div className={classes.calendar}>
        {weekDays.map((day) => (
          <div className={classes.weekDay} key={day}>
            {day}
          </div>
        ))}
        {emptyDays.map((day) => (
          <div className={classes.emptyDay} key={day}></div>
        ))}
        {monthDays.map((day) => (
          <div
            className={`${classes.day} ${day === currDate && date.getFullYear() === currYear && classes.today}`}
            key={day}
            style={{ border: `2px solid ${getBorderColor(currYear, currMonth, day)}` }}
            onMouseDown={() => {
              setPickedDate(day);
              setClickStarted(true);
            }}
            onMouseUp={() => {
              setClickStarted(false);
            }}
            onTouchStart={() => {
              setPickedDate(day);
              setClickStarted(true);
            }}
            onTouchEnd={() => {
              setClickStarted(false);
            }}
            onClick={() => {
              !disableModal && setShowModal(true);
            }}
          >
            <span className={classes.dayNumber}>{day}</span>
            <span className={classes.hours}>{userData.data.hours[currYear]?.[currMonth]?.[day]?.hours || 0}</span>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Calendar;
