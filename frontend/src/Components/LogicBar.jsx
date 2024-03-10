import React, { useEffect, useState } from "react";

const LogicBar = () => {
  const [logicBar, setLogicBar] = useState(100);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setLogicBar((LastProgress) => (LastProgress > 0 ? LastProgress - 1 : 0));
    }, 15600);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="progress"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-danger"
          style={{ width: `${logicBar}%` }}
        ></div>
      </div>
    </>
  );
};

export default LogicBar;
