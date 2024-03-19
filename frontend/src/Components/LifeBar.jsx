import React, { useEffect, useState } from "react";

const LifeBar = () => {
  const [lifeBar, setLifeBar] = useState(100);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setLifeBar((LastProgress) => (LastProgress > 0 ? LastProgress - 1 : 0));
    }, 11500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-success"
          style={{ width: `${lifeBar}%` }}
        ></div>
      </div>
    </>
  );
};

export default LifeBar;
