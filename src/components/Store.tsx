import { useState } from "react";
import { stores } from "../info";
import "./Store.css";

const Store = () => {
  const [store] = useState(stores);
  return (
    <section className="store">
      <h3 className="store-title">Christian Resources Store</h3>
      <p className="store-subtitle">
        Equip yourself with quality study materials and spiritual growth tools
      </p>
      <div className="store-lists">
        {store.map((item) => (
          <div key={item.id} className="store-list">
            <img src={item.image} alt="" className="store-img" />
            <div className="store-bottom">
              <span className="ebook">
                <p>{item.tag}</p>
              </span>
              <h3 className="store-title1">{item.title}</h3>
              <p className="store-price">${item.price}</p>
              <p className="store-content">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="store-btn">Browse All Resources</button>
    </section>
  );
};

export default Store;
