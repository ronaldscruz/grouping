import React, { useEffect, useState } from "react";
import "./styles.css";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import Sidebar from "../../components/Sidebar";
import ArticleRoadmapHeader from "../../components/ArticleRoadmapHeader";
import RoadmapDetails from "../../components/RoadmapDetails";
import Comments from "../../components/Comments";
import api from "../../services/api";
import audio from "../../assets/audio.png";

function Roadmap({ match }) {
  const [roadmap, setRoadmap] = useState(null);

  const roadmapId = match.params.id;

  useEffect(() => {
    async function getRoadmap(roadmapId) {
      const roadmap = await api.get("/roadmaps/info/" + roadmapId);

      setRoadmap(roadmap?.data);
    }

    !roadmap && getRoadmap(roadmapId);
  });

  const comments = {
    text: "Me ajudou muito! Acho que esse ano o Enem sai 😂🙏",
    likes: 154,
    date: new Date("2020-05-24 08:12:00"),
    author: {
      photoSrc: null,
      name: "Arthur Carvalho",
      plan: "Mestre Jedi",
      facebook: "fb.com/victormartinstinoco",
      linkedin: "linkedin.com/in/victormartinstinoco",
      twitter: "twitter.com//victrtinoco",
    },
  };

  return (
    <div className="roadmap-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
        {roadmap && (
          <div className="roadmap-page-wrapper">
            <div className="roadmap-content">
              <ArticleRoadmapHeader
                type="roadmap"
                authorName={roadmap.user.name}
                authorPlan={roadmap.user.plan || "Jedi"}
                title={roadmap.title}
                timeInMinutes={240}
              />
              <img
                src={audio}
                alt="Clique para ouvir"
                style={{ cursor: "pointer" }}
              />
              <RoadmapDetails {...roadmap} />
            </div>
            <Comments comments={[comments]} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Roadmap;
