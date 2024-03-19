import React, { useEffect, useState } from "react";

const MoodBar = () => {
  const [moodBar, setmoodBar] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setmoodBar((LastProgress) => (LastProgress > 0 ? LastProgress - 3 : 0));
    }, 6500);
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
        className={`progress-bar bg-${moodBar > 80 ? "success" : moodBar > 50 ? "warning" : "danger"}`}
          style={{ width: `${moodBar}%` }}
        ></div>
      </div>
    </>
  );
};

export default MoodBar;
