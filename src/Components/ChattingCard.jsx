import Image from "next/image";
import React from "react";

const ChattingCard = () => {
  return (
    <div className="bg-[#1C2A4E] w-[90%] h-80 rounded-3xl p-2">
      <div className="px-3 flex space-x-3 items-center justify-between">
        <div className="flex space-x-3 ">
          <Image
            className="border-2 rounded-full bg-white flex w-8 h-8 -ml-2"
            src="/images/userAvatar2.png"
            width={20}
            height={20}
            alt="vector"
          />
          <span>
            <p>Alexa Max</p>
            <p className="text-xs font-thin text-slate-300">Active 5 min ago</p>
          </span>
        </div>
        <span className="p-3 cursor-pointer rounded-full bg-[#2C3A58]">
          <Image
            src="/icons/phoneIcon.png"
            width={10}
            height={10}
            alt="arrow"
          />
        </span>
      </div>

      <hr />

      {/* messages  */}
      <div className="w-full mt-1 h-56 flex flex-col gap-1 overflow-y-auto">
        <div className="px-2 flex space-x-2 justify-start items-center text-sm">
          <p className="bg-slate-200 text-black py-1 px-3 ml-8 rounded-xl max-w-52">
            Hi Doctor
          </p>
        </div>
        <div className="px-2 flex space-x-2 justify-start items-center text-sm">
          <Image
            className="border-2 rounded-full bg-white flex w-8 h-8 -ml-2"
            src="/images/userAvatar2.png"
            width={20}
            height={20}
            alt="vector"
          />
          <p className="bg-slate-200 text-black py-1 px-3 rounded-xl max-w-52">
            I got knee jerk, what should I do right now?
          </p>
        </div>
        <p className="text-xs font-thin ml-10">tue 02:32pm</p>

        <div className="px-2 flex space-x-2 justify-end items-center text-sm">
          <p className="bg-[#BDD8F0] text-black py-1 px-3 rounded-xl max-w-52">
            Hi Alexa
          </p>
          <Image
            className="border-2 rounded-full bg-[#BDD8F0] flex w-8 h-8 -ml-2"
            src="/images/userAvatar2.png"
            width={20}
            height={20}
            alt="vector"
          />
        </div>
        <div className="px-2 flex space-x-2 justify-end items-center text-sm">
          <p className="bg-[#BDD8F0] text-black py-1 px-3 mr-10 rounded-xl max-w-52">
            This help maintain balance and posture. dont worry.
          </p>
        </div>
      </div>

      {/* massage Input  */}
      <div className="w-full bg-[#2C3A58] rounded-2xl flex items-center justify-between px-2">
        <Image
          src="/icons/micIcon.png"
          width={10}
          height={10}
          alt="micIcon"
          className="ml-2 cursor-pointer"
        />
        <input
          type="text"
          placeholder="Type your text.."
          className="border-none outline-none text-xs bg-transparent w-[60%]"
        />
        <span className="p-3 bg-[#409BEE] rounded-lg cursor-pointer">
          <Image
            src="/icons/shareIcon.png"
            width={10}
            height={10}
            alt="shareIcon"
          />
        </span>
      </div>
    </div>
  );
};

export default ChattingCard;
