import React from "react";
import "./styles.css";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <AuthenticatedTopBar />
    </div>
  );
}

export default Dashboard;
