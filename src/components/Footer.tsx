import logo from "../assets/images/logo.svg";
import fb from "../assets/images/fb.svg";
import x from "../assets/images/x.svg";
import linkedln from "../assets/images/linkedln.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="p-[30px] md:px-[100px] flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-9 md:gap-0">
        <Link to="/">
          <div className="flex items-center justify-start gap-3">
            <img src={logo} alt="" />
            <p className="mt-2">Lord's Field</p>
          </div>
        </Link>
        <ul className="flex flex-col md:flex-row justify-start items-start md:items-center gap-9 text-lightBlack font-semibold text-sm">
          <Link to="/bibleintelligence">
            <li>Bible Intelligence</li>
          </Link>
          <Link to="/devotionals">
            <li>Devotionals</li>
          </Link>
          <Link to="/streams">
            <li>Streams</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/store">
            <li>Store</li>
          </Link>
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
      <div>
        <h1 className="text-clip bg-black/90 bg-clip-text text-[65.25px] md:text-[185.58px] font-bold w-full text-center text-transparent border-b border-[#ebebeb] ">
          Lord's Field
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
        <p>© 2025 Lord’s Field. All rights reserved</p>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6">
          <p>Privacy Policy</p>
          <p>Terms Of Service</p>
          <p>Cookie Preference</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
