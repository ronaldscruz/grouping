import React from "react";
import "./styles.css";

import { useHistory } from "react-router-dom";

import { QueryBuilder, FavoriteBorder } from "@material-ui/icons";

function ContentPreviewCard({
  larger = false,
  id,
  type,
  title,
  author,
  date,
  duration,
  likes,
}) {
  function formatDate(date) {
    const monthsMap = [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ];

    const day = date.getUTCDate();
    const month = monthsMap[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  const history = useHistory();

  const isArticle = type === "article";

  larger = larger ? "__larger" : "";

  return (
    <article className={`content-preview-card ${larger}`}>
      <div className="card-left-content">
        <h1
          className="content-title"
          onClick={() => history.push(`/${type}s/${id}`)}
        >
          {title.toUpperCase()}
        </h1>
        <span className="content-author">
          by {author.name} {isArticle ? `· ${formatDate(new Date(date))}` : ""}
        </span>
      </div>
      <div className="card-right-content">
        <span className="content-duration">
          <QueryBuilder className="__smaller __mr" />
          {duration}h {!isArticle && "de trilha"}
        </span>
        {isArticle && (
          <span className="content-likes">
            <FavoriteBorder className="__smaller __mr content-likes-icon" />
            {likes}
          </span>
        )}
      </div>
    </article>
  );
}

export default ContentPreviewCard;
