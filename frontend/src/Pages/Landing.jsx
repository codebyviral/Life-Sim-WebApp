import React from "react";
import { useNavigate } from "react-router-dom";
const Landing = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="text-center">
        <h1>🇮🇳 ❤️</h1>
        <div className="text-center fw-bold fs-1">Indian Life Simulator</div>
        <button onClick={() =>navigate("/StartGame")} type="button" className="mt-3 btn btn-outline-danger">
          Start Now
        </button>
      </div>
    </>
  );
};

export default Landing;
