import logo from "../assets/images/logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

interface MobileProps {
  handleOpen: () => void;
}
const MobileMenu = ({ handleOpen }: MobileProps) => {
  return (
    <section className="bg-black/70 w-full h-full fixed inset-0 z-10">
      <div className="bg-white h-full w-[80%] z-40 absolute right-0 flex flex-col justify-start items-start gap-[29px] p-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center gap-[9px]">
            <img src={logo} alt="" className="w-[40px] h-[40px]" />
            <p className="text-[16px] font-semibold">Lord's Field</p>
          </div>
          <div className="text-[24px]" onClick={handleOpen}>
            <IoClose />
          </div>
        </div>

        <ul className="flex flex-col items-start justify-center list-none gap-5 w-full">
          <Link to="/bibleintelligence" className="w-full">
            <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100 flex justify-between items-start w-full pb-6 pt-2 border-b-2 border-b-black200">
              <p>Bible Intelligence</p>
              <MdKeyboardArrowRight size={24} />
            </li>
          </Link>
          <Link to="/devotionals" className="w-full">
            <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100 flex justify-between items-start w-full pb-6 pt-2 border-b-2 border-b-black200">
              <p>Devotionals</p>
              <MdKeyboardArrowRight size={24} />
            </li>
          </Link>
          <Link to="/streams" className="w-full">
            <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100 flex justify-between items-start w-full pb-6 pt-2 border-b-2 border-b-black200">
              <p>Streams</p>
              <MdKeyboardArrowRight size={24} />
            </li>
          </Link>
          <Link to="/about" className="w-full">
            <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100 flex justify-between items-start w-full pb-6 pt-2 border-b-2 border-b-black200">
              <p>About</p>
              <MdKeyboardArrowRight size={24} />
            </li>
          </Link>
          <Link to="/store" className="w-full">
            <li className="text-[14px] font-semibold text-darkGray hover:text-black cursor-pointer transition-colors ease-in-out delay-100 flex justify-between items-start w-full ">
              <p>Store</p>
              <MdKeyboardArrowRight size={24} />
            </li>
          </Link>
        </ul>

        <button className="border-0 bg-blue-700 text-white text-[14px] font-semibold p-[16px] rounded-[8px] w-full ">
          Explore Bible Classes
        </button>
      </div>
    </section>
  );
};

export default MobileMenu;
