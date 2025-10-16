import { FaArrowRightLong } from "react-icons/fa6";
import { devotionals } from "../info";

const Devotionals = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-20 w-[86.5%] mx-auto">
      <h1 className="text-center text-blue-700 text-[27px] sm:text-[32px] md:text-[40px] font-semibold mb-2">
        Devotionals
      </h1>
      <p className="text-center text-black text-[18px] sm:text-[20px] font-normal leading-[30px] sm:leading-[34px] w-[25rem] sm:w-[32rem] md:w-[48rem]  mb-10">
        Start your day with God's Word and find inspiration for your spiritual
        journey
      </p>
      <div className="flex flex-wrap justify-center items-center mt-[20px] gap-12 w-full ">
        {devotionals.map((item) => (
          <div
            key={item.id}
            className="w-[344px] h-[468px] flex items-center justify-center flex-col"
          >
            <img
              src={item.image}
              alt=""
              className="w-full rounded-tl-2xl rounded-tr-2xl"
            />
            <div className="bg-white text-black p-5 rounded-br-2xl rounded-bl-2xl border-[1px] border-gray border-t-0">
              <span className="flex items-center justify-start gap-[10px] mb-[15px]">
                <img src={item.calender.icon} alt="" />
                <p className="text-sm font-normal text-lightBlack">
                  {item.calender.date}
                </p>
              </span>
              <p className="font-semibold text-[16px] mb-[10px]">
                {item.title}
              </p>
              <span className="flex items-center justify-start gap-2 mb-3">
                <img src={item.bibletext.icon} alt="" />
                <p className="text-[14px] font-normal text-lightBlack ">
                  {item.bibletext.passage}
                </p>
              </span>
              <p className="text-[14px] font-normal text-lightBlack">
                {item.content}
              </p>
              <div className="flex justify-start items-center gap-4 mt-[10px]">
                <p className="text-blue-700 text-sm font-normal">Read more</p>
                <FaArrowRightLong color="#255fe5" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Devotionals;
