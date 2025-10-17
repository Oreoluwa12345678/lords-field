import { storespage } from "../info";
import "./StoreBody.css";

const StoreBody = () => {
  return (
    <section className="flex justify-center flex-col items-center">
      <h1 className="text-center text-blue-700 text-[27px] sm:text-[32px] md:text-[40px] font-semibold mb-2">
        Christian Resource Store
      </h1>
      <p className="text-center text-black text-[18px] sm:text-[20px] font-normal leading-[30px] sm:leading-[34px] w-[23rem] sm:w-[32rem] md:w-[48rem]  mb-10">
        Equip yourself with quality Christian resources, study materials, and
        spiritual growth tools
      </p>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-14 overflow-hidden mb-20 w-full">
        <p className="bg-blue-700 text-white px-4 py-[10px] border border-gray rounded-lg">
          All
        </p>
        <p className="bg-white px-4 py-[10px] border border-gray rounded-lg">
          E-book
        </p>
        <p className="bg-white px-4 py-[10px] border border-gray rounded-lg">
          Audio
        </p>
        <p className="bg-white px-4 py-[10px] border border-gray rounded-lg">
          Video
        </p>
        <p className="bg-white px-4 py-[10px] border border-gray rounded-lg">
          Course
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 w-[86.5%] mb-20">
        {storespage.map((item) => (
          <div
            key={item.id}
            className="w-[344px] max-h-[508px] shadow-lg rounded-2xl"
          >
            <img
              src={item.image}
              alt=""
              className="w-full rounded-tl-2xl rounded-tr-2xl"
            />
            <div className="p-5 text-black bg-white rounded-br-2xl rounded-bl-2xl ">
              <span className="flex justify-between items-center">
                <p>{item.tag}</p>
                <p className="text-[#13CC35] capitalize">{item.status}</p>
              </span>
              <h3 className="text-[16px] mb-[6px] font-semibold">
                {item.title}
              </h3>
              <p className="text-[16px] text-blue-700 mb-[6px] font-semibold">
                ${item.price}
              </p>
              <p className="text-lightBlack text-sm font-normal mb-7">
                {item.content}
              </p>
              <button className="w-full bg-blue-700 text-white rounded-lg p-3">
                {item.status === "free" ? "Download Now" : "Purchase"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[86.5%] mx-auto text-center h-[25rem] md:h-80 flex flex-col justify-center items-center text-white rounded-[20px] mb-6 cta">
        <h3 className="font-medium text-[32px] md:text-[40px] mb-[20px] md:mb-[40px] leading-[43px] md:leading-0 mt-[30px]">
          Looking for Something Specific?
        </h3>
        <p className="text-[16px] md:text-[20px] font-normal w-[19rem] sm:w-[23rem] md:w-[60rem] leading-[26px] md:leading-[34px] mb-6">
          Contact us for custom study materials and personalized spiritual
          growth resources
        </p>
        <div className="bg-white  p-4 rounded-lg">
          <p className="text-sm font-semibold text-blue-700">
            Request Custom Resource
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoreBody;
