import React from "react";
import "./styles.css";

// Assets
import logo from "../../assets/logo.png";
import Button from "../Button";

function UnauthenticatedTopBar() {
  return (
    <div className="unauth-top-bar">
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="Logo do Grouping" />
      </div>
      <div className="session-buttons">
        <Button onPress={() => {}} label="Criar uma nova trilha" />
        <Button onPress={() => {}} label="Entrar" hasBg={false} />
      </div>
    </div>
  );
}

export default UnauthenticatedTopBar;
