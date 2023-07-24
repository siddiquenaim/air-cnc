import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="hidden md:block"
        width="100"
        height="100"
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
