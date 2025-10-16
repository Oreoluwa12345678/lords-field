import { useState } from "react";
import { tips } from "../info";
interface Itips {
  id: number;
  icon: string;
  title: string;
  content: string;
}
const Spiritual = () => {
  const [list] = useState<Itips[]>(tips);
  return (
    <section className="w-full max-h-[120rem] bg-offWhite text-center flex justify-center items-center flex-col mb-40 py-10">
      <p className="mb-4 md:mb-0 text-[18px] sm:text-[25px] md:text-[40px] font-semibold">
        Everything You Need for Spiritual Growth
      </p>
      <p className="text-[16px] sm:text-xl font-normal w-[21.5rem] sm:w-[30rem] md:w-[46rem] leading-[28px] md:leading-[34px] mb-16">
        Comprehensive tools and resources designed to help you grow deeper in
        your relationship with God
      </p>
      <div className="flex flex-col md:flex-row items-start justify-center  gap-8 w-[86.5%]">
        {list.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-5 bg-white px-[16px] py-[16px] shadow-lg rounded-2xl h-[266px]"
          >
            <img src={item.icon} alt="" />
            <p className="text-xl font-semibold">{item.title}</p>
            <p className="text-[16px] font-normal leading-[26px]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spiritual;
