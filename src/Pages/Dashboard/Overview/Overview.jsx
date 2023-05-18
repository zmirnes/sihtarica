import React, { useState } from "react";
import classes from "./Overview.module.css";
import Calendar from "../../../Components/Overview/Calendar/Calendar";
import Summary from "../../../Components/Overview/Summary/Summary";
import Chart from "../../../Components/Overview/Chart/Chart";

const Overview = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [showData, setShowData] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <span className={classes.pageTitle}>Dashboard</span>
        <span className={classes.pageSubtitle}>
          View or edit your records. If you need any help visit <a href="/help">Help Desk.</a>
        </span>
      </div>
      <div className={classes.overview}>
        <Calendar setSelectedDate={setSelectedDate} setShowData={setShowData} />
        {showData && (
          <div className={classes.leftSide}>
            {selectedDate && <Summary selectedDate={selectedDate} />}
            <Chart year={selectedDate && selectedDate.year} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
