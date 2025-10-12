import logo from "../assets/images/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

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
      <div className="flex items-center justify-center gap-[9px]">
        <img src={logo} alt="" className="w-[40px] h-[40px]" />
        <p className="text-[16px] font-semibold">Lord's Field</p>
      </div>

      <ul className="hidden md:flex items-center justify-center list-none gap-10">
        <li className="text-[14px] font-semibold text-[#727272] hover:text-[#2a2a2a] cursor-pointer transition-colors ease-in-out delay-100">
          Bible Intelligence
        </li>
        <li className="text-[14px] font-semibold text-[#727272] hover:text-[#2a2a2a] cursor-pointer transition-colors ease-in-out delay-100">
          Devotionals
        </li>
        <li className="text-[14px] font-semibold text-[#727272] hover:text-[#2a2a2a] cursor-pointer transition-colors ease-in-out delay-100">
          Streams
        </li>
        <li className="text-[14px] font-semibold text-[#727272] hover:text-[#2a2a2a] cursor-pointer transition-colors ease-in-out delay-100">
          About
        </li>
        <li className="text-[14px] font-semibold text-[#727272] hover:text-[#2a2a2a] cursor-pointer transition-colors ease-in-out delay-100">
          Store
        </li>
      </ul>

      <button className="border-0 bg-[#255fe5] text-white text-[14px] font-semibold p-[16px] rounded-[8px] hidden md:block cursor-pointer">
        Explore Bible Classes
      </button>

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
