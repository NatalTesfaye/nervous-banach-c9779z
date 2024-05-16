import "./NewsStyles.css";
import Recent1 from "./Assets/NewsT1.jpg";
import Recent2 from "./Assets/NewsT2.jpg";
import Recent3 from "./Assets/NewsT3.jpg";

function NewsRecentData(props) {
  return (
    <div className="n-card">
      <div className="n-image">

        <img src={props.image} alt="image1" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default NewsRecentData;
