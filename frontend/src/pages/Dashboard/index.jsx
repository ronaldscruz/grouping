import React, { useEffect, useState } from "react";
import "./styles.css";

import api from "../../services/api";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import Sidebar from "../../components/Sidebar";
import DashboardGreeting from "./DashboardGreeting";
import SubjectTabs from "../../components/SubjectTabs";
import DashboardSection from "./DashboardSection";

function Dashboard() {
  const [subject, setSubject] = useState(1);
  const [roadmaps, setRoadmaps] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchDashboardData() {
      const roadmaps = await api.get("/roadmaps/" + subject);
      const articles = await api.get("/posts/" + subject);

      setRoadmaps(roadmaps?.data);
      setArticles(articles?.data);
    }

    fetchDashboardData();
  }, [subject]);

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
        <DashboardGreeting />
        <div className="subject-tabs-dashboard">
          <SubjectTabs onSubjectChange={(subject) => setSubject(subject)} />
        </div>
        <div className="dashboard-content">
          {roadmaps.length > 0 && (
            <DashboardSection
              title="Top trilhas da semana"
              roadmaps={roadmaps}
            />
          )}
          {articles.length > 0 && (
            <DashboardSection
              title="Top artigos da semana"
              articles={articles}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
