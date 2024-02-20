import Image from "next/image";
import React from "react";
import ChattingCard from "./ChattingCard";

const UserInfo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-3 space-y-2">
      <Image
        className="rounded-full w-20 h-20 bg-slate-300 border-4 border-blue-700"
        src="/images/userImage.png"
        width={70}
        height={70}
        alt="useImage"
      />
      <p>Aliam Colter</p>
      <p className="text-xs font-thin">Physician</p>
      <div className="bg-[#1C2A4E] w-[90%] rounded-full flex justify-between items-center p-2">
        <p className="p-2">Active Patients</p>
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
      </div>
      <ChattingCard />
    </div>
  );
};

export default UserInfo;
