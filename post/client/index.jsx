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
    this.state = {
      articls: [],
      topic: [],
      auth: []
    }
    this.retriveData();
  }

  updateState(data){
    this.setState({
      articls: data[0],
      topic: data[1],
      auth: data[2]
    })
    
  }

  retriveData(){
    var that = this;
    $.ajax({
      url: "/article",
      method: "GET",
      success: function(data){
        that.updateState(data)
      },
      error: function(error){
        console.log(error);
      }
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Post topic = {this.state.topic} auth = {this.state.auth}/>
        <Next article = {this.state.articls} />
      </div>
    );
  }
}
ReactDOM.render(<Article />, document.getElementById("post"));
