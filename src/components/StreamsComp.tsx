import clock from "../assets/images/clock.svg";
import { streams } from "../info";
import notificationblue from "../assets/images/notificationblue.svg";

const StreamsComp = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-20 w-[86.5%] mx-auto">
      <h1 className="text-center text-blue-700 text-[27px] sm:text-[32px] md:text-[40px] font-semibold mb-2">
        Lord's Field Streams
      </h1>
      <p className="text-center text-black text-[18px] sm:text-[20px] font-normal leading-[30px] sm:leading-[34px] w-[25rem] sm:w-[32rem] md:w-[48rem]  mb-6">
        Live worship, teaching, and fellowship are coming soon to bring the
        Lord's Field community together
      </p>
      <div className="flex justify-center items-center bg-lightPurple p-4 rounded-full gap-4 mb-10">
        <img src={clock} alt="" />
        <p className="text-purple text-xl font-normal">Coming soon</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mb-20">
        {streams.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-5 bg-white px-[16px] py-[16px]  rounded-2xl h-[208px] w-[344px] border border-gray"
          >
            <div
              className={`${
                item.id === 1
                  ? "bg-blue-100"
                  : item.id === 2
                  ? "bg-lightPurple"
                  : item.id === 3
                  ? "bg-[#DEFFE4]"
                  : null
              }w-10 h-10 flex justify-center items-center`}
            >
              <img src={item.icon} alt="" />
            </div>
            <p className="text-xl font-semibold">{item.title}</p>
            <p className="text-[14px] font-normal leading-[24px] text-center">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[86.5%] mx-auto text-center h-[25rem] md:h-80 flex flex-col justify-center items-center text-white rounded-[20px] mb-6 cta">
        <h3 className="font-medium text-[32px] md:text-[40px] mb-[20px] md:mb-[40px] leading-[43px] md:leading-0 mt-[30px]">
          Stay Connected
        </h3>
        <p className="text-[16px] md:text-[20px] font-normal w-[16rem] sm:w-[23rem] md:w-[60rem] leading-[26px] md:leading-[34px] mb-6">
          Be the first to know when Lord's Field Streams launches
        </p>
        <div className="bg-white flex justify-center items-center gap-4 p-4 rounded-lg">
          <img src={notificationblue} alt="" />
          <p className="text-sm font-semibold text-blue-700">
            Notify Me When Ready
          </p>
        </div>
      </div>
    </section>
  );
};

export default StreamsComp;
