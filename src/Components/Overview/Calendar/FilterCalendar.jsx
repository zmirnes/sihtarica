import React from "react";
import classes from "./FilterCalendar.module.css";

const months = ["January", "February", "Mart", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];

const FilterCalendar = ({ changeMonth, changeYear, showModal, currMonth, currYear }) => {
  return (
    <div className={`${classes.filtersContainer} ${showModal ? classes.filterClosed : classes.filterOpened}`}>
      <select onChange={(e) => changeMonth(Number(months.indexOf(e.target.value)))} defaultValue={months[currMonth]}>
        {months.map((month) => (
          <option value={month} key={month}>
            {month}
          </option>
        ))}
      </select>
      <select onChange={(e) => changeYear(Number(e.target.value))} defaultValue={currYear}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default FilterCalendar;
