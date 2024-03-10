import React, { useEffect, useState } from "react";

const PlayerNav = () => {
  const age = 18;
  const [day, setDay] = useState(1);
  const [month,setMonth] = useState(1);
  const [year,setYear] = useState(2024);
  useEffect(() => {
    const interval = setInterval(() => {
      if (day < 31) {
        setDay((day) => day + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if(day === 32){
    setDay(1)
    setMonth(month + 1)
  }
  if(month === 12){
    setYear(year + 1)
  }
  return (
    <>
      <div className="ageNav d-flex">
        <span>{`${age} years`}</span>
        <div className="days">{"Date: " + day+"/"+month+"/"+year}</div>
      </div>
    </>
  );
};

export default PlayerNav;
