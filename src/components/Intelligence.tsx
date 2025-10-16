import { useState } from "react";
import { intelligences } from "../info";
import "./Intelligence.css";
import Button from "./Button";
const Intelligence = () => {
  const [list] = useState(intelligences);
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
    <section className="intelligence w-full text-white flex flex-col justify-center items-center p-[50px] mb-40">
      <h3 className="font-semibold text-[20px] sm:text-[40px] text-center mb-4 sm:mb-0">
        Featured Bible Intelligence
      </h3>
      <p className="font-normal text-[16px] sm:text-xl leading-[26px] sm:leading-[34px] mb-[50px] text-center">
        Discover deep biblical truths through our comprehensive study materials
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] mb-10 w-[86.5%]">
        {list.map((item) => (
          <div
            key={item.id}
            className="w-[344px] h-[439px] flex flex-col justify-center items-center gap-0 rounded-2xl"
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
      <Button text="Explore All Bible Intelligence" color="blue" />
    </section>
  );
};

export default Intelligence;
