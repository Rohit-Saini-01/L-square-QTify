// Logo.js
import React from "react";
import LogoImage from "../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LogoImage} alt="Logo" width={67} height={34} />
    </div>
  );
};

export default Logo;
