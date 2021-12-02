import React from "react";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="SignUp">
      <form>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" id="" />
      </form>
    </div>
  );
};

export default SignUp;
