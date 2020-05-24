import React from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";

import Logo from "../Logo";
import Button from "../Button";

import { Home, ClearAll, Assignment, Group } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="top-content">
        <div className="sidebar-logo">
          <Logo width={155} customUrl="/dashboard" />
        </div>
        <ul className="sidebar-items">
          <li>
            <NavLink
              className="sidebar-item"
              to="/dashboard"
              activeClassName="__selected"
            >
              <Home className="__large-mr" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="sidebar-item"
              to="/roadmaps"
              activeClassName="__selected"
            >
              <ClearAll className="__large-mr" /> Trilhas
            </NavLink>
          </li>
          <li>
            <NavLink
              className="sidebar-item"
              to="/posts"
              activeClassName="__selected"
            >
              <Assignment className="__large-mr" /> Artigos
            </NavLink>
          </li>
          <li>
            <NavLink
              className="sidebar-item"
              to="/groups"
              activeClassName="__selected"
            >
              <Group className="__large-mr" /> Grupos
            </NavLink>
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
