import React from "react";
import "./styles.css";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import Sidebar from "../../components/Sidebar";
import DashboardGreeting from "./DashboardGreeting";
import SubjectTabs from "./SubjectTabs";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
        <DashboardGreeting />
        <div className="subject-tabs-dashboard">
          <SubjectTabs onSubjectChange={(subject) => {}} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
