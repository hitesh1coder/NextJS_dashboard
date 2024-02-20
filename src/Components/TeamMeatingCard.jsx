import Image from "next/image";
import React from "react";

const TeamMeatingCard = () => {
  return (
    <div className="w-60 h-28 bg-[#1B2C4F] rounded-2xl flex flex-col p-3 gap-4">
      <div className="flex w-full justify-between items-center ">
        <span>
          <p>Team Meating</p>
          <span className="text-xs font-normal flex space-x-1">
            <Image
              src="/icons/clockIcon.png"
              width={15}
              height={10}
              alt="clockIcon"
            />
            <p className="text-xs font-normal">10:00-11:00 am</p>
          </span>
        </span>
        <span className="bg-slate-500 p-3 rounded-lg ">
          <Image
            src="/icons/notifyColorIcon.png"
            width={10}
            height={10}
            alt="notify"
          />
        </span>
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="flex">
          <Image
            className="border-2 rounded-full bg-white flex w-8 h-8"
            src="/images/userAvatar.png"
            width={20}
            height={20}
            alt="vector"
          />
          <Image
            className="border-2 rounded-full bg-white flex w-8 h-8 -ml-2"
            src="/images/userAvatar2.png"
            width={20}
            height={20}
            alt="vector"
          />
          <Image
            className="border-2 rounded-full bg-white flex w-8 h-8 -ml-2"
            src="/images/userAvatar3.png"
            width={20}
            height={20}
            alt="vector"
          />
          <span className="border-2 rounded-full bg-white flex w-8 h-8 -ml-2 text-black font-bold justify-center items-center cursor-pointer">
            4+
          </span>
        </span>
        <span className="bg-[#409BEE] px-3 py-2 rounded-lg cursor-pointer">
          <Image
            src="/icons/arrowRight.png"
            width={10}
            height={10}
            alt="notify"
          />
        </span>
      </div>
    </div>
  );
};

export default TeamMeatingCard;
