import React from "react";
import "./styles.css";

import { ModeComment } from "@material-ui/icons";

function CommentField({ comments }) {
  return (
    <div className="write-comment-wrapper">
        <ModeComment className="comment-icon" />
        <input
          name="comment field"
          className="comment-field"
          placeholder="Escreva um comentário..."
        />
    </div>
  );
}

export default CommentField;
