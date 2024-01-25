// Logo.js
import React from "react";
import LogoImage from "../../assets/logo.png";
import "./Logo.module.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LogoImage} alt="Logo" width={67} />
    </div>
  );
};

export default Logo;
