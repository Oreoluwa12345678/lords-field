import { useState } from "react";
import { intelligences } from "../info";
import "./Intelligence.css";
const Intelligence = () => {
  const [list] = useState(intelligences);
  const color1 = {
    color: "#b752e2",
  };
  const color2 = {
    color: "#1DC168",
  };
  const color3 = {
    color: "#C22B1B",
  };
  const color4 = {
    color: "#000",
  };
  return (
    <section className="intelligence">
      <h3 className="intelligence-title">Featured Bible Intelligence</h3>
      <p className="intelligence-subtitle">
        Discover deep biblical truths through our comprehensive study materials
      </p>
      <div className="intelligence-lists">
        {list.map((item) => (
          <div key={item.id} className="intelligence-list">
            <img src={item.image} alt="" className="intelligence-img" />
            <div className="bottom">
              <div className="first-row">
                <span className="tag">
                  <p>{item.tag}</p>
                </span>
                <span className="media">
                  <img src={item.media.icon} alt="" />
                  <p
                    style={
                      item.media.text === "read"
                        ? color1
                        : item.media.text === "audio"
                        ? color2
                        : item.media.text === "video"
                        ? color3
                        : color4
                    }
                  >
                    {item.media.text}
                  </p>
                </span>
              </div>
              <h3 className="intelligence-title2">{item.title}</h3>
              <span className="bibletext">
                <img src={item.bibletext.icon} alt="" />
                <p>{item.bibletext.passage}</p>
              </span>
              <p className="intelligence-content">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="intelligence-btn">
        Explore All Bible Intelligence
      </button>
    </section>
  );
};

export default Intelligence;
