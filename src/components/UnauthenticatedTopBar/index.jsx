import React from "react";
import "./styles.css";

import { useHistory } from "react-router-dom";

// Assets
import Button from "../Button";
import Logo from "../Logo";

function UnauthenticatedTopBar() {
  const history = useHistory();

  return (
    <div className="unauth-top-bar">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="session-buttons">
        <Button onPress={() => {}} label="Criar uma nova trilha" />
        <Button
          onPress={() => {
            history.push("/dashboard");
          }}
          label="Entrar"
          hasBg={false}
        />
      </div>
    </div>
  );
}

export default UnauthenticatedTopBar;
