import React from "react";
import "./styles.css";

import ContentPreviewCard from "../ContentPreviewCard";

function RoadmapDetails(props) {
  return (
    <div className="roadmap-details-component">
      <p className="roadmap-details-description">{props?.description}</p>
      {props?.articles?.length > 0 &&
        props.articles.map((a, aIndex) => {
          let isChecked = "";

          if (props.articles[0] === a) isChecked = "__read";

          console.log(a[0] === a[aIndex]);
          console.log(isChecked);

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
