import React from "react";
// import $ from "jquery";
import Comment from './Comment.jsx';

// class CommentItem extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {

//     // };

//   }

//   render(){
//     return(
//       <div>
//         <img src={this.props.comment.profilPic}></img>
//         <h2>{this.props.comment.userName}</h2>
//         <h5>{this.props.comment.createdAt}</h5>
//         <h3>{this.props.comment.body}</h3>
//       </div>
//     )
//     }
// }

class CommentsList extends React.Component {
  constructor(props) {
  	super(props);
  	// this.state = {

  	// };

  }

  render(){
    return(
      <div>

				{this.props.comments.map((comment , index) =>
					<Comment key={index} comment ={comment} ></Comment>
				)}
				
      </div>
            
    )
	}
	
}

export default CommentsList;