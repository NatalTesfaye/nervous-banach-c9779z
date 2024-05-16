import { Component } from "react";
import "./NEWSupdateStyles.css";

import News1 from "./Assets/NewsT1.jpg";
import News2 from "./Assets/NewsT2.jpg";
import News3 from "./Assets/NewsT3.jpg";
import News4 from "./Assets/NewsT4.png";
import News5 from "./Assets/NewsT5.jpg";
import News6 from "./Assets/NewsT6.jpg";

class NewsData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="new-text">
          <h2>{this.props.heading}</h2>
          <Date className="date">{this.props.Date}</Date>
          <p>{this.props.text}</p>
        </div>
        <div className="images">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default NewsData;
