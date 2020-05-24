import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

import { useHistory } from "react-router-dom";

function Logo({ width }) {
  const history = useHistory();

  return (
    <img
      className="logo"
      src={logo}
      alt="Logo do Grouping"
      onClick={() => history.push("/")}
      width={width ? width + "px" : "125px"}
    />
  );
}

export default Logo;
