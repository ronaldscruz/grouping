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
      "Opa, tudo bem? Bem vindo a trilha que vai te dar o step-by-step para aprender sobre a revolução francesa, vi que as trilhas que postaram não estão 100% corretas, decidi postar do meu jeito :)",
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
    articles: [
      {
        id: 177,
        title: "Como se deu o início da revolução francesa",
        author: {
          photoSrc: null,
          name: "Victor Tinoco",
          plan: "Cavaleiro Jedi",
          facebook: "fb.com/victormartinstinoco",
          linkedin: "linkedin.com/in/victormartinstinoco",
          twitter: "twitter.com//victrtinoco",
        },
        date: new Date("2020-05-24 08:12:00"),
        timeInMinutes: 12,
        likes: 800,
        comments: [
          {
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
          },
        ],
      },
      {
        id: 178,
        title: "Curiosidades sobre Napoleão Bonaparte 👀",
        author: {
          photoSrc: null,
          name: "Victor Tinoco",
          plan: "Cavaleiro Jedi",
          facebook: "fb.com/victormartinstinoco",
          linkedin: "linkedin.com/in/victormartinstinoco",
          twitter: "twitter.com//victrtinoco",
        },
        date: new Date("2020-05-26 08:12:00"),
        timeInMinutes: 12,
        likes: 800,
        comments: [
          {
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
          },
        ],
      },
      {
        id: 179,
        title: "Uma visão europeia moderna sobre a Revolução Francesa",
        author: {
          photoSrc: null,
          name: "Filipe Figueiredo",
          plan: "Mestre Jedi",
          facebook: "fb.com/victormartinstinoco",
          linkedin: "linkedin.com/in/victormartinstinoco",
          twitter: "twitter.com//victrtinoco",
        },
        date: new Date("2020-05-25 08:12:00"),
        timeInMinutes: 12,
        likes: 800,
        comments: [
          {
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
          },
        ],
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
