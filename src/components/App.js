import React, { Component } from "react";
import { Route } from "react-router-dom";
import CommentBox from "./CommetBox";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";

export default class App extends Component {
  renderButton() {}

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/post"> Post A Comment </Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}
