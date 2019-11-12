import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import CommentForm from "./components/CommentForm.jsx";
import CommentsList from "./components/CommentsList.jsx";

import "../public/style.css";

class CommentsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>All Comments :</h1>
        <CommentsList />
        <CommentForm />
        
        
      </div>
    );
  }
}
ReactDOM.render(<CommentsModule />, document.getElementById("comments"));
