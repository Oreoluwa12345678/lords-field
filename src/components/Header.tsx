import logo from "../assets/images/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const location = useLocation();

  const items = [
    { name: "Bible Intelligence", path: "/bibleintelligence" },
    { name: "Devotionals", path: "/devotionals" },
    { name: "Streams", path: "/streams" },
    { name: "About", path: "/about" },
    { name: "Store", path: "/store" },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentItem = items.find((item) => item.path === location.pathname);
    if (currentItem) {
      setSelected(currentItem.name);
    }
  }, [location.pathname]);

  return (
    <header className="w-[86.5%] h-[50px] flex items-center justify-between mx-auto mt-4 mb-12">
      <Link to="/">
        <div className="flex items-center justify-center gap-[9px] cursor-pointer">
          <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
          <p className="text-[16px] font-semibold">Lord's Field</p>
        </div>
      </Link>

      <ul className="hidden md:flex items-center justify-center list-none gap-10">
        {items.map((item) => (
          <Link to={item.path} key={item.name}>
            <li
              onClick={() => setSelected(item.name)}
              className={`text-[14px] font-semibold cursor-pointer transition-colors ease-in-out duration-200 ${
                selected === item.name
                  ? "text-blue-700"
                  : "text-darkGray hover:text-black"
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
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
