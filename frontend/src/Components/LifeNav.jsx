import React from "react";
import LifeBar from "./LifeBar";
import MoodBar from "./MoodBar";
import LogicBar from "./LogicBar";
import { IoHeart } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";

const LifeNav = () => {
  return (
    <>
      <div className="progressBars">
        <div className="life-bar d-flex">
          <div className="emoji-icon">
            <IoHeart />
          </div>
          <div className="p-bar">
            <LifeBar />
          </div>
        </div>
        <div className="outer-bars">
          <div className="mood-bar d-flex">
            <div className="emoji-icon">
              <FaRegSmile />
            </div>
            <div className="m-bar">
              <MoodBar />
            </div>
          </div>
          <div className="logic-bar d-flex">
            <div className="emoji-icon">
              <FaBrain />
            </div>
            <div className="l-bar">
              <LogicBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeNav;
