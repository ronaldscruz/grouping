import React, { useState, useEffect } from "react";
import "./styles.css";

import Sidebar from "../../components/Sidebar";
import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import SubjectTabs from "../../components/SubjectTabs";
import GroupCard from "./GroupCard";
import api from "../../services/api";

function Groups() {
  const [subject, setSubject] = useState(1);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function fetchGroupsData() {
      const groups = await api.get("/groups/" + subject);

      setGroups([...groups?.data, ...groups?.data]);
    }

    fetchGroupsData();
  }, [subject]);

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
            <SubjectTabs onSubjectChange={(subject) => setSubject(subject)} />
          </div>
        </div>
        <div className="groups-listing">
          <h1 className="groups-listing-title">Grupos</h1>
          {groups?.length > 0 &&
            groups.map((g, index) => {
              return <GroupCard key={index} {...g} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Groups;
