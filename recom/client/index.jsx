import React from "react";
import ReactDOM from "react-dom";
import "../public/style.css";
import $ from "jquery";
import List from "./components/List.jsx";
import axios from "axios";
import "../public/style.css";
class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: "/recom",
      type: "GET",
      success: function(data) {
        console.log(data);
        that.setState({ items: data });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="recom-container">
        <h2 className="recom-header">RECOMMENDED</h2>
        <div className="recom-items">
          <ul className="recom-list">
            {this.state.items.map(function(item, i) {
              {
                return (
                  <li key={i} className="recom-li">
                    <img src={item.img_url} className="img-item" />
                    <span className="title-item">{item.title}</span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        ]
      </div>
    );
  }
}
ReactDOM.render(<Recommended />, document.getElementById("recom"));
