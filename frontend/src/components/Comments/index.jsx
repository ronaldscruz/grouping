import React from "react";
import "./styles.css";

import CommentField from "./CommentField";
import CommentContainer from "./CommentContainer";

function Comments({ comments }) {
  return (
    <>
      <h4 className="comments-title">Comentários ({comments?.length})</h4>
      <div className="comment-field-wrapper">
        <CommentField />
      </div>
      <CommentContainer comment={comments[0]} />
    </>
  );
}

export default Comments;
