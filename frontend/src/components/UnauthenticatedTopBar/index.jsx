import React from "react";
import "./styles.css";

import { useHistory } from "react-router-dom";

// Assets
import Button from "../Button";
import Logo from "../Logo";

function UnauthenticatedTopBar({ inRegister = false }) {
  const history = useHistory();

  return (
    <div className="unauth-top-bar">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="session-buttons">
        {inRegister ? (
          <Button
            onPress={() => {
              history.push("/");
            }}
            label="Sair"
            hasBg={false}
          />
        ) : (
          <>
            <Button
              onPress={() => {
                history.push("/signup");
              }}
              label="Quero ser um jedi"
            />
            <Button
              onPress={() => {
                history.push("/signup");
              }}
              label="Cadastrar-se"
              hasBg={false}
            />
            <Button
              onPress={() => {
                history.push("/dashboard");
              }}
              label="Entrar"
              hasBg={false}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default UnauthenticatedTopBar;
