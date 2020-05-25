import React from "react";
import "./styles.css";

import { useHistory } from "react-router-dom";

import { QueryBuilder, FavoriteBorder } from "@material-ui/icons";

function ContentPreviewCard({ larger = false, id, type, title, author, date }) {
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
          by {author?.name} {isArticle ? `· 24 mai 2020` : ""}
        </span>
      </div>
      <div className="card-right-content">
        <span className="content-duration">
          <QueryBuilder className="__smaller __mr" />
          2h {!isArticle && "de trilha"}
        </span>
        {isArticle && (
          <span className="content-likes">
            <FavoriteBorder className="__smaller __mr content-likes-icon" />
            80
          </span>
        )}
      </div>
    </article>
  );
}

export default ContentPreviewCard;
