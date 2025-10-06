import { nourishment } from "../info";
import "./Nourishment.css";

const Nourishment = () => {
  return (
    <section className="nourishment">
      <h3 className="nourishment-title">Daily Spiritual Nourishment</h3>
      <p className="nourishment-text">
        Start each day with God's Word through our inspiring devotionals
      </p>
      <div className="nourishment-lists">
        {nourishment.map((item) => (
          <div key={item.id} className="nourishment-list">
            <img src={item.image} alt="" className="nourishment-img" />
            <div className="nourishment-bottom">
              <span className="calender">
                <img src={item.calender.icon} alt="" />
                <p>{item.calender.date}</p>
              </span>
              <p className="nourishment-title1">{item.title}</p>
              <span className="nourishment-bibletext">
                <img src={item.bibletext.icon} alt="" />
                <p>{item.bibletext.passage}</p>
              </span>
              <p className="nourishment-content">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="nourishment-btn">See All Devotionals</button>
    </section>
  );
};

export default Nourishment;
