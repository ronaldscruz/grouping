import React from "react";
import "./styles.css";

import ContentPreviewCard from "../../../components/ContentPreviewCard";

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
          <div key={a.id} className="content-card-dashboard">
            <ContentPreviewCard
              id={a.id}
              type="article"
              title={a.title}
              author={a.userPost}
              date={new Date(a.updatedAt)}
            />
          </div>
        ))}
      {roadmaps?.length > 0 &&
        roadmaps.map((r) => (
          <div key={r.id} className="content-card-dashboard">
            <ContentPreviewCard
              id={r.id}
              type="roadmap"
              title={r.title}
              author={r.user}
            />
          </div>
        ))}
    </section>
  );
}

export default DashboardSection;
