import React, { useEffect, useState } from "react";

const MoodBar = () => {
  const [moodBar, setmoodBar] = useState(100);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setmoodBar((LastProgress) => (LastProgress > 0 ? LastProgress - 1 : 0));
    }, 6500);
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
          style={{ width: `${moodBar}%` }}
        ></div>
      </div>
    </>
  );
};

export default MoodBar;
