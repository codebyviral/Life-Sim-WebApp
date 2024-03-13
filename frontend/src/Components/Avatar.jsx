import React from "react";
import BoyAvatar from "../images/boyAvatar.png"
const Avatar = () => {
  return (
    <>
      <div className="avatar-left">
        <img className="boy-avatar" src={BoyAvatar} alt="" />
      </div>
    </>
  );
};

export default Avatar;
