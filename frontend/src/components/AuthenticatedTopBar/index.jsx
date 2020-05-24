import React from "react";
import "./styles.css";

// Components
import ProfileMenuOptions from "../ProfileMenuOptions";
import Logo from "../Logo";
import Button from "../Button";

function AuthenticatedTopBar() {
  return (
    <div className="auth-top-bar">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="top-bar-right-content">
        <Button
          label="Criar nova trilha ou artigo"
          onPress={() => {}}
          hasBg={false}
        />
        <ProfileMenuOptions />
      </div>
    </div>
  );
}

export default AuthenticatedTopBar;
