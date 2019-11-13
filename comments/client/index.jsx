import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import Comment from './components/Comment.jsx';
// import CommentForm from "./components/CommentForm.jsx";
// import CommentsList from "./components/CommentsList.jsx";
import data from '../dummyData.js';


import "../public/style.css";
import CommentsList from "./components/CommentsList.jsx";

class CommentsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.getData();
  }

  getData(){
   // console.log(this.state.data);
    var that = this;
    $.ajax({
      type: 'GET',
      url:'/comments',
      success: function(res) {
        //var myData = JSON.stringify(res);
        that.updateStatus(res);
        //console.log(that.state.data);

      }


    });
  }

  updateStatus(myData) {
    this.setState({data: myData});
  }
  render() {
    return (
      
      <div className = 'mainDiv'>
        

        <div className = 'mainSection'>
          <div className = 'commentsHeader'>
            <h1 className = 'commentsCount'>THERE ARE {data.length} COMMENTS</h1>
          </div>
        
          <div className = 'commentslist'>
            <CommentsList  comments = {this.state.data} />
          </div>
        </div>

      </div>
    );
  }
}
ReactDOM.render(<CommentsModule />, document.getElementById("comments"));
