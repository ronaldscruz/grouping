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
      </div>
    </div>
  );
}

export default Groups;
