import React from "react";
import $ from "jquery";


class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render(){
    return(
      <div>
        <img src={this.props.comment.profilPic}></img>
        <h2>{this.props.comment.userName}</h2>
        <h5>{this.props.comment.createdAt}</h5>
        <h3>{this.props.comment.body}</h3>
      </div>
        )
    }
}

export default Comment;