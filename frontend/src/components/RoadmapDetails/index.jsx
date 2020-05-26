import React from "react";
import "./styles.css";

import ContentPreviewCard from "../ContentPreviewCard";

function RoadmapDetails(props) {
  const articles = props.posts ? props.posts : [];

  return (
    <div className="roadmap-details-component">
      <p className="roadmap-details-description">{props?.description}</p>
      {articles?.length > 0 &&
        articles.map((a, aIndex) => {
          let isChecked = "";

          if (articles[0] === a) isChecked = "__read";

          return (
            <div key={a.id} className="roadmap-article-wrapper">
              <div className={`is-read ${isChecked}`}></div>
              <ContentPreviewCard
                larger
                author={a.author}
                date={a.date}
                duration={a.timeInMinutes}
                id={a.id}
                title={a.title}
                type="article"
                likes={a.likes}
              />
            </div>
          );
        })}
    </div>
  );
}

export default RoadmapDetails;
