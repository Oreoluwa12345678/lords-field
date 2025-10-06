import logo from "../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="desktop">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Lord's Field</p>
        </div>
        <ul className="links">
          <li>Bible Intelligence</li>
          <li>Devotionals</li>
          <li>Streams</li>
          <li>About</li>
          <li>Store</li>
        </ul>
        <button className="btn">Explore Bible Classes</button>
      </div>
    </header>
  );
};

export default Header;
