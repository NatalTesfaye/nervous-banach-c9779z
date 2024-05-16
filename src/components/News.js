import "./NewsStyles.css";
import NewsRecentData from "./NewsRecentData";
import Recent1 from "./Assets/NewsT1.jpg";
import Recent2 from "./Assets/NewsT2.jpg";
import Recent3 from "./Assets/NewsT5.jpg";

function News() {
  return (
    <div className="news">
      <h1>Staff Members</h1>
      <div className="newscard">
        <NewsRecentData
          image={Recent1}
          heading="Mr kebede Ayele"
          text="Public health officers Association of Ethiopia as one of CPD accreditor has planned to conduct virtual discussion on CPD, Its importance and the relation of CPD and licensing. Thus, using the link below please join our discussion through zoom.
                Presenters will be Dr.Getachew W/Yohannes and Alemu Kibret"
        />

        <NewsRecentData
          image={Recent2}
          heading="Mr kebede Ayele"
          text="Public health officers Association of Ethiopia as one of CPD accreditor has planned to conduct virtual discussion on CPD, Its importance and the relation of CPD and licensing. Thus, using the link below please join our discussion through zoom.
                Presenters will be Dr.Getachew W/Yohannes and Alemu Kibret"
        />

        <NewsRecentData
          image={Recent3}
          heading="Mr kebede Ayele"
          text="Public health officers Association of Ethiopia as one of CPD accreditor has planned to conduct virtual discussion on CPD, Its importance and the relation of CPD and licensing. Thus, using the link below please join our discussion through zoom.
                Presenters will be Dr.Getachew W/Yohannes and Alemu Kibret"
        />
      </div>
    </div>
  );
}

export default News;
