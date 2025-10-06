import check from "../assets/images/check.svg";
import community from "../assets/images/community.svg";
import star from "../assets/images/star.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <p className="heading">Welcome to The Lord's Field</p>
      <p className="sub-head">
        Deepen your faith through Bible Intelligence Classes, daily devotionals,
        and spiritual resources designed to nurture your walk with God.
      </p>
      <div className="buttons">
        <button className="hero-btn">Explore Bible Classes</button>
        <button className="hero-btn2">Read Devotionals</button>
      </div>
      <div className="perks">
        <span>
          <img src={check} alt="" />
          <p>Free Resources Available</p>
        </span>
        <span>
          <img src={community} alt="" />
          <p>Growing Community</p>
        </span>
        <span>
          <img src={star} alt="" />
          <p>Expert Bible Teaching</p>
        </span>
      </div>
    </section>
  );
};

export default Hero;
