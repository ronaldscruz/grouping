import React from "react";
import "./styles.css";

// Components
import ProfileMenuOptions from "./ProfileMenuOptions";
import SearchField from "../SearchField";
import Button from "../Button";

function AuthenticatedTopBar() {
  return (
    <div className="auth-top-bar">
      <SearchField />
      <div className="top-bar-right-content">
        <div className="xp-info">
          <div className="xp-text-info">
            <span>
              <b>XP</b> 50%
            </span>
            <span>Nível 5</span>
          </div>
          <div className="members-to-limit">
            <div className="current-members"></div>
          </div>
        </div>
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
