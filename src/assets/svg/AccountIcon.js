import React from "react";
import image from "../images/avatar.png";

const AccountIcon = () => {
  return (
    <div>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "darkred",
        }}></div>
      <image src={image} />
    </div>
  );
};

export default AccountIcon;
