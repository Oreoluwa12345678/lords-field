import logo from "../assets/images/logo.svg";
import fb from "../assets/images/fb.svg";
import x from "../assets/images/x.svg";
import linkedln from "../assets/images/linkedln.svg";

const Footer = () => {
  return (
    <footer>
      {" "}
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <p>Follow us</p>
          <img src={fb} alt="" />
          <img src={x} alt="" />
          <img src={linkedln} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
