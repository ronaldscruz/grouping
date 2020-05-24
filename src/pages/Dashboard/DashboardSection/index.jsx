import React from "react";
import "./styles.css";

import ContentPreviewCard from "../ContentPreviewCard";

function DashboardSection({ title, articles, roadmaps }) {
  return (
    <section className="dashboard-section">
      <div className="title-and-results">
        <h1 className="dashboard-section-title"> {title} </h1>
        <span className="results-quantity">
          {articles?.length || roadmaps?.length} resultados
        </span>
      </div>
      {articles?.length > 0 &&
        articles.map((a) => (
          <div className="content-card-dashboard">
            <ContentPreviewCard
              id={a.id}
              key={"article-" + a.id}
              type="article"
              title={a.title}
              author={a.author}
              duration={a.duration}
              likes={a.likes}
              date={a.date}
            />
          </div>
        ))}

      {roadmaps?.length > 0 &&
        roadmaps.map((r) => (
          <div className="content-card-dashboard">
            <ContentPreviewCard
              id={r.id}
              key={"roadmap-" + r.id}
              type="roadmap"
              title={r.title}
              author={r.author}
              duration={r.duration}
            />
          </div>
        ))}
    </section>
  );
}

export default DashboardSection;
