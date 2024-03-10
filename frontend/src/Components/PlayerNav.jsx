import React, { useEffect, useState } from "react";

const PlayerNav = () => {
  const age = 18;
  const [day, setDay] = useState(1);
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
  }
  return (
    <>
      <div className="ageNav d-flex">
        <span>{`${age} years`}</span>
        
        <span>{day}</span>
      </div>
    </>
  );
};

export default PlayerNav;
