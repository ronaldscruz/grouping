import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

import { useHistory } from "react-router-dom";

function Logo({ width, customUrl }) {
  const history = useHistory();

  const url = customUrl ? customUrl : "/";

  return (
    <img
      className="logo"
      src={logo}
      alt="Logo do Grouping"
      onClick={() => history.push(url)}
      width={width ? width + "px" : "125px"}
    />
  );
}

export default Logo;
