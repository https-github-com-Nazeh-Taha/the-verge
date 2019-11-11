import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Post from "./components/Post.jsx";
import Nav from "./components/Nav.jsx";
import Next from "./components/Next.jsx";
import "../public/style.css";
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <Post />
        <Next />
      </div>
    );
  }
}
ReactDOM.render(<Article />, document.getElementById("post"));
