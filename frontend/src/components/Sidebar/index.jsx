import React from "react";
import "./styles.css";

import Logo from "../Logo";
import Button from "../Button";

import { Home, ClearAll, Assignment, Group } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="top-content">
        <div className="sidebar-logo">
          <Logo width={155} />
        </div>
        <ul className="sidebar-items">
          <li className="sidebar-item __selected">
            <Home className="__icon-mr" /> Home
          </li>
          <li className="sidebar-item">
            <ClearAll className="__icon-mr" /> Trilhas
          </li>
          <li className="sidebar-item">
            <Assignment className="__icon-mr" /> Artigos
          </li>
          <li className="sidebar-item">
            <Group className="__icon-mr" /> Grupos
          </li>
        </ul>
      </div>
      <div className="sidebar-join-now">
        <Button rounded bold label="Seja um jedi, assine agora" />
      </div>
    </div>
  );
}

export default Sidebar;
