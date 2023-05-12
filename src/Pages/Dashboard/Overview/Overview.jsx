import React, { useState } from "react";
import classes from "./Overview.module.css";
import Calendar from "../../../Components/Overview/Calendar/Calendar";
import Summary from "../../../Components/Overview/Summary/Summary";

const Overview = () => {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <span className={classes.pageTitle}>Dashboard</span>
        <span className={classes.pageSubtitle}>
          View or edit your records. If you need any help visit <a href="/help">Help Desk.</a>
        </span>
      </div>
      <Calendar setSelectedDate={setSelectedDate} />
      {selectedDate && <Summary selectedDate={selectedDate} />}
    </div>
  );
};

export default Overview;
