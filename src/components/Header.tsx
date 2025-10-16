import logo from "../assets/images/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <header className="w-[86.5%] h-[50px] flex items-center justify-between mx-auto mt-4 mb-12">
      <Link to="/">
        <div className="flex items-center justify-center gap-[9px] cursor-pointer">
          <img src={logo} alt="" className="w-[40px] h-[40px]" />
          <p className="text-[16px] font-semibold">Lord's Field</p>
        </div>
      </Link>
      <ul className="hidden md:flex items-center justify-center list-none gap-10">
        <Link to="/bibleintelligence">
          <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100">
            Bible Intelligence
          </li>
        </Link>
        <Link to="/devotionals">
          <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100">
            Devotionals
          </li>
        </Link>
        <Link to="/streams">
          <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100">
            Streams
          </li>
        </Link>
        <Link to="/about">
          <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100">
            About
          </li>
        </Link>
        <Link to="/store">
          <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100">
            Store
          </li>
        </Link>
      </ul>

      <Button
        text="Explore Bible Classes"
        color="blue"
        others="hidden md:block"
      />

      <div
        className="block md:hidden text-[26px] cursor-pointer"
        onClick={handleOpen}
      >
        <RiMenu3Fill />
      </div>

      {width <= 768 && open ? <MobileMenu handleOpen={handleOpen} /> : null}
    </header>
  );
};

export default Header;
