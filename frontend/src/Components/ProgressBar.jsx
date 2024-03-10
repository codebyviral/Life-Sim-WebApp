import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [lifeBar, setLifeBar] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setLifeBar((prevProgress) => (prevProgress > 0 ? prevProgress - 1 : 0));
    }, 1000);
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
        <div className="progress-bar bg-danger" style={{ width: `${lifeBar}%` }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
