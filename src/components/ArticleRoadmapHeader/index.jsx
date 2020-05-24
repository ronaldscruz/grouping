import React from "react";
import "./styles.css";

import SquareButton from "../SquareButton";

import profilePhoto from "../../assets/profile_photo.png";
import fbIcon from "../../assets/ic_facebook.png";
import inIcon from "../../assets/ic_linkedin.png";
import ttIcon from "../../assets/ic_twitter.png";

function ArticleRoadmapHeader({ article }) {
  function formatDate(date) {
    const monthsMap = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    const day = date.getUTCDate();
    const month = monthsMap[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  return (
    <div>
      <h1 className="article-roadmap-header-title"> {article.title} </h1>
      <div className="d-flex justify-content-between align-items-end">
        <div className="d-flex">
          <SquareButton innerImg={profilePhoto} />
          <div className="header-content">
            <p className="header-name">{article.author.name}</p>
            <div className="header-subtitle">
              <p>
                {formatDate(article.date)} · {article.timeInMinutes}min de
                conteúdo · <span className="plan">{article.author.plan}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="social-icon" src={ttIcon} alt="" />
          <img className="social-icon" src={fbIcon} alt="" />
          <img className="social-icon" src={inIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ArticleRoadmapHeader;
