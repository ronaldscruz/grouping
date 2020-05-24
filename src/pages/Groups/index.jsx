import React from "react";
import "./styles.css";

import Sidebar from "../../components/Sidebar";
import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import SubjectTabs from "../../components/SubjectTabs";
import GroupCard from "./GroupCard";

function Groups() {
  const mockGroups = [
    { id: 1, name: "Intensivo ENEM 2020 SP", members: 13, limit: 25 },
    { id: 2, name: "OAB Pernambuco", members: 13, limit: 25 },
  ];

  return (
    <div className="groups-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
        <div className="greeting-wrapper">
          <h1 className="groups-greeting">Explore grupos</h1>
          <span className="groups-description">
            Conecte-se, compartilhe conhecimento, tire suas dúvidas e conheça
            pessoas com os mesmos gostos que o seu
          </span>
          <div className="subject-tabs-group-wrapper">
            <SubjectTabs />
          </div>
        </div>
        <div className="groups-listing">
          <h1 className="groups-listing-title">Grupos</h1>
          {mockGroups?.length > 0 &&
            mockGroups.map((g) => {
              return <GroupCard {...g} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Groups;
