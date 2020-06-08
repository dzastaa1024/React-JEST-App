import React from "react";
import { Route } from "react-router-dom";
import CommentBox from "./CommetBox";
import CommentList from "./CommentList";

export default () => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};
