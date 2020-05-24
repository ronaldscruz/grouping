import React from "react";
import "./styles.css";

import ContentPreviewCard from "../ContentPreviewCard";

function DashboardSection({ title, articles, roadmaps }) {
  return (
    <section className="dashboard-section">
      <h1 className="dashboard-section-title"> {title} </h1>
      {articles?.length > 0 &&
        articles.map((a) => (
          <div className="content-card-dashboard">
            <ContentPreviewCard
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
