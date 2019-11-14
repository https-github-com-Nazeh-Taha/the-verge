import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List.jsx";
import axios from "axios";
import "../public/style.css";
class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
      tittles: [],
      test: "Hello Test"
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:3003:/:id")
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // }
  render() {
    return (
      <div className="grid-container">
        <h2 className="header">RECOMMENDED</h2>

        <img
          className="item-1-0"
          src="https://cdn.vox-cdn.com/thumbor/VeEPEECslTmxDJwzV2RHXhslYpg=/0x0:1980x1320/920x613/filters:focal(832x502:1148x818):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65613211/microsoftedgenewlogo.5.jpg"
          alt="Sample photo"
        />
        <span className="item-1-1">{this.state.test}</span>

        <img
          className="item-2-0"
          src="https://cdn.vox-cdn.com/thumbor/NH0hSNZZv1jGxN3P7YdNtTTMDXM=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65679075/acastro_190919_1777_instagram_0003.0.0.jpg"
          alt="Sample photo"
        />
        <span className="item-2-1">
          Apple pulls app that let you stalk people you follow on Instagram
        </span>

        <img
          className="item-3-0"
          src="https://cdn.vox-cdn.com/thumbor/N_1D-5lS1Czcotcz_vJwd4AlSrs=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65679019/acastro_180416_1777_chrome_0001.0.jpg"
          alt="Sample photo"
        />
        <span className="item-3-1">
          Google plans to give slow websites a new badge of shame in Chrome
        </span>

        <img
          className="item-4-0"
          src="https://cdn.vox-cdn.com/thumbor/ma3V86fytKLdRYczTbTftZ_0fLY=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65678698/untitled-84.0.0.jpg"
          alt="Sample photo"
        />
        <span className="item-4-1">
          Google may be secretly gathering millions of personal health records
          with alleged
        </span>

        <img
          className="item-5-0"
          src="https://cdn.vox-cdn.com/thumbor/dVOz3nHCa9mZeqECdwY6jnux4DQ=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65677571/acastro_181114_1777_amazon_hq2_0004.0.jpg"
          alt="Sample photo"
        />
        <span className="item-5-1">
          Amazon is opening its own grocery store in 2020
        </span>

        <img
          className="item-6-0"
          src="https://cdn.vox-cdn.com/thumbor/aiFvn_DqF1hAsxjNBtXl2516NFw=/0x0:693x390/920x613/filters:focal(292x140:402x250):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65656172/image001.5.png"
          alt="Sample photo"
        />
        <span className="item-6-1">
          Disney reaches deal with Amazon to put Disney+ on Fire TV devices
        </span>
      </div>
    );
  }
}
ReactDOM.render(<Recommended />, document.getElementById("recom"));
