import check from "../assets/images/check.svg";
import community from "../assets/images/community.svg";
import star from "../assets/images/star.svg";
import Button from "./Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="w-[86.5%] h-[653px] mx-auto text-white flex flex-col items-center justify-start rounded-[20px] gap-5 mb-[10rem] hero">
      <p className="text-[32px]  md:text-[64px] font-semibold mb-0 mt-[80px] sm:mt-[110px] text-center w-72 sm:w-full">
        Welcome to The Lord's Field
      </p>
      <p className="text-[17px] md:text-xl w-[19rem] sm:w-[29rem] md:w-[48rem] leading-[30px] md:leading-[34px] font-normal text-center mb-3">
        Deepen your faith through Bible Intelligence Classes, daily devotionals,
        and spiritual resources designed to nurture your walk with God.
      </p>
      <div className="flex justify-center items-center gap-3 md:gap-5 mb-3 sm:mb-5">
        <Button
          text="Explore Bible Classes"
          color="blue"
          others="w-36 sm:w-48 text-xs sm:text-sm text-nowrap"
        />
        <Button
          text="Read Devotionals"
          border="border-white border-2"
          others="w-36 sm:w-48 text-xs sm:text-sm text-nowrap"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-5 md:gap-7">
        <span className="flex justify-center items-center gap-2">
          <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
            <img src={check} alt="" className="w-[19.2px] h-[19.2px]" />
          </div>
          <p className="text-sm">Free Resources Available</p>
        </span>
        <span className="flex justify-center items-center gap-2">
          <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
            <img src={community} alt="" className="w-[19.2px] h-[19.2px]" />
          </div>
          <p className="text-sm">Growing Community</p>
        </span>
        <span className="flex justify-center items-center gap-2">
          <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
            <img src={star} alt="" className="w-[19.2px] h-[19.2px]" />
          </div>
          <p className="text-sm">Expert Bible Teaching</p>
        </span>
      </div>
    </section>
  );
};

export default Hero;
