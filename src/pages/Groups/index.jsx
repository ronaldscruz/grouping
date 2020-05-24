import React from "react";
import "./styles.css";

import Sidebar from "../../components/Sidebar";
import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";

function Groups() {
  return (
    <div className="groups-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
        <h1 className="groups-greeting"></h1>
        <span className="groups-description"></span>
        <div className="groups-listing"></div>
      </div>
    </div>
  );
}

export default Groups;
