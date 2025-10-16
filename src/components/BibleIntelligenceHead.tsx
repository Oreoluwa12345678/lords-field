import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { bibleIntelligences } from "../info";

const BibleIntelligenceHead = () => {
  const [list] = useState(bibleIntelligences);
  const color1 = {
    color: "#b752e2",
  };
  const color2 = {
    color: "#1DC168",
  };
  const color3 = {
    color: "#C22B1B",
  };
  const color4 = {
    color: "#000",
  };

  return (
    <section className=" flex flex-col justify-center items-center mb-20 w-[86.5%] mx-auto">
      <h1 className="text-center text-blue-700 text-[27px] sm:text-[32px] md:text-[40px] font-semibold mb-2">
        Bible Intelligence
      </h1>
      <p className="text-center text-black text-[18px] sm:text-[20px] font-normal leading-[30px] sm:leading-[34px] w-[25rem] sm:w-[32rem] md:w-[48rem]  mb-10">
        Deepen your understanding of God's Word through comprehensive study
        materials and spiritual insights
      </p>
      <form className="bg-white border border-gray p-4 w-[353px] sm:w-[422px] h-[56px] rounded-lg flex gap-4 justify-start items-center mb-8">
        <FaMagnifyingGlass size={24} color="#545252" />
        <input
          type="text"
          className=" outline-none text-lightBlack"
          placeholder="Search Content"
        />
      </form>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap- md:gap-8 overflow-hidden mb-20 w-full">
        <p className="bg-blue-700 text-white px-4 py-[10px] border border-gray rounded-lg">
          All
        </p>
        <p className="bg-white px-4 py-[10px] border border-gray rounded-lg">
          Faith
        </p>
        <p className="bg-white px-4 py-[10px] border border-gray rounded-lg">
          Prayer
        </p>
        <p className="bg-white px-4 py-[10px] border border-gray rounded-lg">
          Worship
        </p>
        <p className="bg-white px-4 py-[10px] border border-gray rounded-lg">
          Ministry
        </p>
        <p className="bg-white px-4 py-[10px] border border-gray rounded-lg">
          Discipleship
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-14 mx-auto mb-10 place-items-center">
        {list.map((item) => (
          <div
            key={item.id}
            className="w-[344px] h-[439px] flex flex-col justify-center items-center gap-0 rounded-2xl shadow-sm"
          >
            <img
              src={item.image}
              alt=""
              className="w-full rounded-tl-2xl rounded-tr-2xl"
            />
            <div className="bg-white text-black p-5 rounded-bl-2xl rounded-br-2xl">
              <div className="flex justify-between items-center mb-[10px]">
                <span className="bg-blue-100 rounded-[45px] py-2 px-[14px]">
                  <p className="uppercase font-normal text-sm">{item.tag}</p>
                </span>
                <span className="flex justify-between items-center gap-[7px]">
                  <img src={item.media.icon} alt="" />
                  <p
                    style={
                      item.media.text === "read"
                        ? color1
                        : item.media.text === "audio"
                        ? color2
                        : item.media.text === "video"
                        ? color3
                        : color4
                    }
                    className="font-normal text-sm uppercase"
                  >
                    {item.media.text}
                  </p>
                </span>
              </div>
              <h3 className="font-semibold text-[16px] mb-[10px]">
                {item.title}
              </h3>
              <span className="flex items-center justify-start gap-[10px] mb-[10px]">
                <img src={item.bibletext.icon} alt="" />
                <p>{item.bibletext.passage}</p>
              </span>
              <p className="font-normal text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 md:gap-20">
        <p className="bg-blue-100 px-6 py-4 rounded-lg text-[16px] font-bold">
          Previous Page
        </p>
        <div className="hidden md:flex justify-center items-center gap-2">
          <p>Page</p>
          <p className="border p-[10px] border-[#bdbdbd] rounded-[4px] w-[69px]">
            1
          </p>
          <p>Of 100</p>
        </div>
        <p className="bg-blue-100 px-6 py-4 rounded-lg text-[16px] font-bold">
          Next Page
        </p>
      </div>
    </section>
  );
};

export default BibleIntelligenceHead;
