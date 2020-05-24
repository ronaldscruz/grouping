import React from "react";
import "./styles.css";

import profilePhoto from "../../../assets/profile_photo.png"
import SquareButton from "../../SquareButton"

import { FavoriteBorder } from "@material-ui/icons";


function CommentContainer({ comment }) {
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
    <div className="comment-container">
      <div className="d-flex">
        <SquareButton innerImg={profilePhoto} />
        <div className="header-content">
          <p className="header-name">{comment.author.name}</p>
          <div className="header-subtitle">
            <p>{formatDate(comment.date)} · <span className="plan">{comment.author.plan}</span></p>
          </div>
        </div>
      </div>
      <p className="comment-text">{comment.text}</p>
      <div className="d-flex align-items-center">
        <FavoriteBorder className="like-icon __medium" />
        <span className="like-text">{comment.likes}</span>
      </div>
    </div>
  );
}

export default CommentContainer;
