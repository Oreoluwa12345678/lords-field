import { useState } from "react";
import { stores } from "../info";
import Button from "./Button";

const Store = () => {
  const [store] = useState(stores);
  return (
    <section className="bg-offWhite flex items-center justify-center flex-col mb-[5rem] w-full py-8">
      <h3 className="text-[20px] sm:text-[40px] font-semibold mb-[10px] text-center ">
        Christian Resources Store
      </h3>
      <p className="font-normal text-[16px] sm:text-xl leading-[26px] sm:leading-[34px] mb-[30px] text-center  w-[20rem] sm:w-full">
        Equip yourself with quality study materials and spiritual growth tools
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-[86.5%] mb-10">
        {store.map((item) => (
          <div
            key={item.id}
            className="w-[344px] max-h-[441px] shadow-sm rounded-2xl"
          >
            <img
              src={item.image}
              alt=""
              className="w-full rounded-tl-2xl rounded-tr-2xl"
            />
            <div className="p-5 text-black bg-white rounded-br-2xl rounded-bl-2xl ">
              <span className="ebook">
                <p>{item.tag}</p>
              </span>
              <h3 className="text-[16px] mb-[6px] font-semibold">
                {item.title}
              </h3>
              <p className="text-[16px] text-blue-700 mb-[6px] font-semibold">
                ${item.price}
              </p>
              <p className="text-lightBlack text-sm font-normal">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button text="Browse All Resources" color="blue" />
    </section>
  );
};

export default Store;
