import Image from "next/image";
import React from "react";

const StasticsCard = () => {
  return (
    <div className="md:w-96 h-60 bg-[#1B2C4F] rounded-3xl p-5 backdrop-blur-2xl">
      <div className="flex justify-between">
        <span>
          <p>Statistics</p>
          <p className="text-xs font-thin">November 2013</p>
        </span>
        <div className="flex justify-between items-center bg-transparent">
          <select
            id="select"
            className="bg-transparent border-2 outline-none p-1 text-xs border-blue-800 rounded-lg"
          >
            <option value="weekily">Weekly </option>
            <option value="monthly">Monthly </option>
            <option value="yearly">Yearly </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Image
          className="w-full h-full relative"
          src="/icons/vector.png"
          width={300}
          height={100}
          alt="vector"
        />
        {/* indicator */}
        <span className="z-10 absolute top-[4.2rem] left-[7.8rem] ">
          <Image
            src="/images/tooltip.png"
            width={50}
            height={50}
            alt="tooltip"
          />
          <p className="text-xs font-thin absolute top-1 left-2 flex items-center justify-center space-x-2">
            82%
            <Image
              src="/icons/grothIcon.png"
              width={10}
              height={10}
              alt="groth"
            />
          </p>
        </span>
        <span className="rounded-full border-2 absolute top-[6rem] left-[9rem] flex w-3 h-3 bg-white border-black"></span>
        <span className=" absolute top-[6.7rem] left-[9.3rem] w-1 bg-black h-16 z-10 rounded-b-full"></span>

        <Image
          className="absolute top-5"
          src="/images/wave.png"
          width={500}
          height={100}
          alt="wave"
        />
      </div>
    </div>
  );
};

export default StasticsCard;
