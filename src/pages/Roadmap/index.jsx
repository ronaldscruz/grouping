import React from "react";
import "./styles.css";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import Sidebar from "../../components/Sidebar";
import ArticleRoadmapHeader from "../../components/ArticleRoadmapHeader";
import RoadmapDetails from "../../components/RoadmapDetails";
import Comments from "../../components/Comments";

function Roadmap() {
  const roadmapMock = {
    title: "Revolução Francesa do começo ao fim",
    description:
      "Opa, tudo bem? Bem vindo a trilha que vai te dar o step-by-step para aprender sobre a guerra fria: o que causou, quem foram os envolvidos e a tensão que dividiu o mundo inteiro em duas partes",
    author: {
      photoSrc: null,
      name: "Victor Tinoco",
      plan: "Cavaleiro Jedi",
      facebook: "fb.com/victormartinstinoco",
      linkedin: "linkedin.com/in/victormartinstinoco",
      twitter: "twitter.com/victrtinoco",
    },
    date: new Date("2020-05-24 08:12:00"),
    timeInMinutes: 120,
    comments: [
      {
        text:
          "Muito bom! Me ajudou bastante a conseguir aquela bolsa em Medicina! 🏥",
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
      },
    ],
  };

  return (
    <div className="roadmap-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
        <div className="roadmap-page-wrapper">
          <div className="roadmap-content">
            <ArticleRoadmapHeader
              type="roadmap"
              authorName={roadmapMock.author.name}
              authorPlan={roadmapMock.author.plan}
              date={roadmapMock.date}
              title={roadmapMock.title}
              timeInMinutes={roadmapMock.timeInMinutes}
            />
            <RoadmapDetails {...roadmapMock} />
          </div>
          <Comments comments={roadmapMock.comments} />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
