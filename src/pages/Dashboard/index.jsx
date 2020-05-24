import React from "react";
import "./styles.css";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import Sidebar from "../../components/Sidebar";
import DashboardGreeting from "./DashboardGreeting";
import SubjectTabs from "./SubjectTabs";
import DashboardSection from "./DashboardSection";

function Dashboard() {
  const mockArticles = [
    {
      id: 1,
      title: "Curiosidades sobre a Guerra Fria",
      author: "Ronald S. Cruz",
      duration: 2,
      likes: 777,
      date: new Date("2020-05-24 08:12:00"),
    },
  ];

  const mockRoadmaps = [
    {
      id: 1,
      title: "Guerra Fria do começo ao fim!",
      author: "Ronald S. Cruz",
      duration: 4,
    },
    {
      id: 2,
      title: "Como se deu a Revolução Francesa",
      author: "Ronald S. Cruz",
      duration: 8,
    },
    {
      id: 3,
      title: "Resultados da Revolução Industrial",
      author: "Ronald S. Cruz",
      duration: 6,
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
        <DashboardGreeting />
        <div className="subject-tabs-dashboard">
          <SubjectTabs onSubjectChange={(subject) => {}} />
        </div>
        <div className="dashboard-content">
          <DashboardSection
            title="Top trilhas da semana"
            roadmaps={mockRoadmaps}
          />
          <DashboardSection
            title="Top artigos da semana"
            articles={mockArticles}
          />
          <DashboardSection title="Trilhas ENEM 2020" roadmaps={mockRoadmaps} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
