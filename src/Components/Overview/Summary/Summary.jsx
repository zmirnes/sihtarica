import React, { useContext } from "react";
import classes from "./Summary.module.css";
import GlobalContext from "../../../Contexts/GlobalContext";
import Loading from "../../Loading/Loading";

const Summary = ({ selectedDate }) => {
  const { users, loggedUser } = useContext(GlobalContext);
  const user = users.length > 0 ? users.find((user) => user.id === loggedUser) : null;
  const userData = user ? user.data.hours[selectedDate.year]?.[selectedDate.month] : {};
  const userTags = user ? user.data.tags : {};
  const workedHours = {};

  userData && Object.values(userData).forEach((day) => (workedHours[day.tagID] = workedHours[day.tagID] ? workedHours[day.tagID] + +day.hours : 0 + +day.hours));
  return workedHours && userTags ? (
    <div className={classes.container}>
      <span className={classes.summaryTitle}>Summary of your records</span>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.tr}>
            <th className={classes.th}>Tag name</th>
            <th className={classes.th}>Hours</th>
            <th className={classes.th}>Earned</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(workedHours).map(([key, value]) => (
            <tr key={key}>
              <td className={classes.td}>{userTags[key]?.tagName || userTags.default.tagName} </td>
              <td className={classes.td}>{value} </td>
              <td className={classes.td}>{`${(value * userTags[key]?.rate || userTags.default.rate).toFixed(2)}`} KM</td>
            </tr>
          ))}
          <tr className={classes.tr}>
            <td className={`${classes.td} ${classes.tdTotal}`}>Total: </td>
            <td className={`${classes.td} ${classes.tdTotal}`}>{Object.values(workedHours).reduce((prev, curr) => prev + curr, 0)}</td>
            <td className={`${classes.td} ${classes.tdTotal}`}>
              {userTags &&
                Object.entries(workedHours)
                  .map(([tag, hours]) => userTags[tag]?.rate * hours || userTags.default.rate * hours)
                  .reduce((prev, curr) => +prev + +curr, 0)
                  .toFixed(2)}{" "}
              KM
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <Loading />
  );
};

export default Summary;
