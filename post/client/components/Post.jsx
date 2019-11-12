import React, { Component } from "react";
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

export default class Post extends Component {
  render() {
    return (
      <div>
        <div class="main-contaner">
          <ul class="related-topic" >
            <li class="corner-border"><a href="#">MICROSOFT</a></li>
            <li class="corner-border"><a href="#">TECH</a></li>
          </ul>
          <h1 id="page-title">Microsoft unveils new Edge browser logo that no longer looks like Internet Explorer</h1>
          <p id="entry-summary">The new icon is a wave surfing the web</p>
          <div><span class="page-creater"> By </span><span class="page-creater page-creater-pink"> username </span><span class="page-creater page-creater-pink"> twitter </span><span class="page-creater"> Nov 2, 2019, 3:22pm EDTs </span></div>
          <ul id="user-contact">
            <li><a href="#" id="face-user"><FaFacebookF /></a></li>
            <li><a href="#" id="twetter-user"><FaTwitter /></a></li>
          </ul>
          <div class="left-main-contant">

            <div>
              <img src="https://cdn.vox-cdn.com/thumbor/VeEPEECslTmxDJwzV2RHXhslYpg=/0x0:1980x1320/920x613/filters:focal(832x502:1148x818):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65613211/microsoftedgenewlogo.5.jpg" class="img-topic"></img>
            </div>
            <p id="page-topic">
              Microsoft is refreshing the logo for its Chromium-based Edge browser. The software giant originally unveiled its Edge icon more than four years ago, and it’s fair to say it was a logo that clinged to the past of Internet Explorer. Microsoft’s new logo was discovered as part of a new surfing mini game hidden inside the latest Canary versions of Edge. It looks like a wave, and includes a similar Fluent Design style to the company’s new Office icons.
              The logo also spells out the letter e, but it no longer looks similar to Internet Explorer, and looks a lot more modern as a result. Microsoft is clearly breaking from tradition here with its move to a Chromium version of Edge, and it will be interesting to hear why the company picked this particular design.
              The Edge icon was revealed in an elaborate Easter Egg hunt where Microsoft employees posted cryptic clues to a series of puzzles and images. Puzzle solvers even had to render an Edge icon as a 3D object, thanks to Obj model code that was hidden in an image. It all led to a series of words discovered in seven clues, which were then inputted into a Javascript function on Microsoft’s Edge Insider website. This revealed which words needed to be pulled from a video for the final instructions to discover the secret surfing game (edge://surf/) and the new logo when you complete it.
              The secret edge surfing game is very similar to SkiFree, a classic skiing game that was released as part of Microsoft’s Entertainment Pack 3 for Windows back in 1991. You use WASD on a keyboard to navigate around, avoiding obstacles or threatening octopus tentacles and picking up speed boost and shields on the way.
              We’re now waiting to hear when Microsoft will release a final version of its Edge Chromium browser. The software maker released a beta version back in August, and a stable version appeared on the web recently. Microsoft is holding its Ignite conference in Orlando next week, and given the new logo reveal it’s likely we’ll hear more about a release date very soon.
          </p>
          </div>
        </div>
      </div>
    );
  }
}
