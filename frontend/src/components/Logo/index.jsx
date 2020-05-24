import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

import { useHistory } from "react-router-dom";

function Logo() {
  const history = useHistory();

  return (
    <img
      className="logo"
      src={logo}
      alt="Logo do Grouping"
      onClick={() => history.push("/")}
    />
  );
}

export default Logo;
