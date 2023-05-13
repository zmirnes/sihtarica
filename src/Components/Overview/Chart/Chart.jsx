import React, { useContext, useEffect, useState } from "react";
import classes from "./Chart.module.css";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import GlobalContext from "../../../Contexts/GlobalContext";

const Chart = ({ year }) => {
  const { users, loggedUser } = useContext(GlobalContext);
  const date = new Date();
  const [selectedYear, setSelectedYear] = useState(year);
  const userData = users.length > 0 && users.find((user) => user.id === loggedUser).data;
  const userHours = userData && userData.hours;
  const userTags = userData && userData.tags;
  let earningPerMonth = [
    { name: "JAN", earning: 0, hours: 0 },
    { name: "FEB", earning: 0, hours: 0 },
    { name: "MAR", earning: 0, hours: 0 },
    { name: "APR", earning: 0, hours: 0 },
    { name: "MAY", earning: 0, hours: 0 },
    { name: "JUN", earning: 0, hours: 0 },
    { name: "JUL", earning: 0, hours: 0 },
    { name: "AUG", earning: 0, hours: 0 },
    { name: "SEP", earning: 0, hours: 0 },
    { name: "OCT", earning: 0, hours: 0 },
    { name: "NOV", earning: 0, hours: 0 },
    { name: "DEC", earning: 0, hours: 0 },
  ];

  useEffect(() => {
    year && setSelectedYear(year);
  }, [year]);

  userHours[selectedYear] &&
    Object.entries(userHours[selectedYear]).forEach(([month, monthData]) => {
      earningPerMonth[month].earning = Object.values(monthData)
        .map((day) => day.hours * userTags[day.tagID].rate)
        .reduce((curr, prev) => curr + prev, 0)
        .toFixed(0);

      earningPerMonth[month].hours = Object.values(monthData)
        .map((day) => day.hours)
        .reduce((curr, prev) => +prev + +curr, 0);
    });

  // Funkcija koja trazi najvecu vrijednost u zaradi(potrebno za Recharts -.- )

  const getHighestEarning = () => {
    let highestEarning = 0;
    earningPerMonth.forEach((month) => {
      if (+month.earning > +highestEarning) highestEarning = +month.earning;
    });
    return highestEarning;
  };

  return (
    <div className={classes.container}>
      <ResponsiveContainer height={300}>
        <AreaChart data={earningPerMonth} margin={{ top: 30, bottom: 20, left: 0, right: 30 }} height={300}>
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis dataKey="name" domain={["auto", "auto"]} />
          <YAxis dataKey="earning" domain={["auto", getHighestEarning()]} />
          <Area type="monotone" dataKey="earning" stroke="#2886FF" fill="#2886FF" />
          <Area type="monotone" dataKey="hours" stroke="#8CC3A2" fill="#8CC3A2" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
