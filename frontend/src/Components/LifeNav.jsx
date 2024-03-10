import React from "react";
import { IoHeart } from "react-icons/io5";
import ProgressBar from "./ProgressBar";
const LifeNav = () => {
  return <>
  <div className="game-bar d-flex">
  <div className="heart">
  <IoHeart />
  </div>
  <div className="p-bar">
    <ProgressBar />
  </div>
  </div>
  </>;
};

export default LifeNav;
