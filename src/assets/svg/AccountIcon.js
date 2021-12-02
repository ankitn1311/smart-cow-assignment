import React from "react";
import image from "../images/avatar.png";

const AccountIcon = () => {
  return (
    <div>
      <img
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "1px solid black",
        }}
        src={image}
      />
    </div>
  );
};

export default AccountIcon;
