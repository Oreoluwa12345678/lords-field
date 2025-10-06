import { useState } from "react";
import { tips } from "../info";
import "./Spiritual.css";
interface Itips {
  id: number;
  icon: string;
  title: string;
  content: string;
}
const Spiritual = () => {
  const [list, setList] = useState<Itips[]>(tips);
  return (
    <section className="spiritual">
      <p className="spiritual-heading">
        Everything You Need for Spiritual Growth
      </p>
      <p className="spiritual-subhead">
        Comprehensive tools and resources designed to help you grow deeper in
        your relationship with God
      </p>
      <div className="spiritual-list">
        {list.map((item) => (
          <div key={item.id}>
            <img src={item.icon} alt="" />
            <p className="item-title">{item.title}</p>
            <p className="item-content">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spiritual;
