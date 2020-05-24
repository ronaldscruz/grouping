import React from "react";
import "./styles.css";

import CommentField from "./CommentField"
import CommentContainer from "./CommentContainer"

function Comments({ comments }) {
  return (
    <>
      <h4 className="comments-title">Comentários</h4>
      <CommentField />
      <CommentContainer comment={comments[0]} />
    </>
  );
}

export default Comments;
