import React from "react";
import "./styles.css";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <AuthenticatedTopBar />
    </div>
  );
}

export default Dashboard;
