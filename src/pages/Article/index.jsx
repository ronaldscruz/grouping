import React, { useEffect, useState } from "react";
import "./styles.css";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import Sidebar from "../../components/Sidebar";
import ArticleRoadmapHeader from "../../components/ArticleRoadmapHeader";
import Comments from "../../components/Comments";
import api from "../../services/api";

function Article({ match }) {
  const [article, setArticle] = useState(null);

  const articleId = match.params.id;

  useEffect(() => {
    async function getArticle(articleId) {
      const article = await api.get("/posts/info/" + articleId);

      setArticle(article?.data);
    }

    getArticle(articleId);
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
    <div className="article-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
        {article && (
          <div className="article-page-wrapper">
            <div className="article-content">
              <ArticleRoadmapHeader
                authorName={article.userPost.name}
                authorPlan={article.userPost.plan}
                date={new Date(article.updatedAt)}
                title={article.title}
                timeInMinutes={120}
              />
              <div className="article-text">{article.content}</div>
            </div>
            <Comments comments={[comments]} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Article;
