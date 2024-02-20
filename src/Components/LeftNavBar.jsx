"use client";
import Image from "next/image";
import React from "react";

const LeftNavBar = () => {
  return (
    <div className="h-20 md:h-full w-full md:w-16 flex md:flex-col items-center justify-between">
      <div className="md:h-20">
        <Image src="/icons/logo.png" width={30} height={30} alt="logo.png" />
      </div>
      <div className="md:h-96">
        <ul className="flex md:flex-col md:space-y-2">
          <li className="bg-[#2C3A58] p-3 cursor-pointer rounded-xl">
            <Image
              src="/icons/homeIcon.png"
              width={20}
              height={20}
              alt="homeicon"
            />
          </li>
          <li className="p-3 cursor-pointer hover:bg-[#2C3A58] rounded-xl">
            <Image
              src="/icons/saveIcon.png"
              width={20}
              height={20}
              alt="saveicon"
            />
          </li>
          <li className="p-3 cursor-pointer hover:bg-[#2C3A58] rounded-xl">
            <Image
              src="/icons/liveIcon.png"
              width={20}
              height={20}
              alt="liveicon"
            />
          </li>
          <li className="p-3 cursor-pointer hover:bg-[#2C3A58] rounded-xl">
            <Image
              src="/icons/chatIcon.png"
              width={20}
              height={20}
              alt="chaticon"
            />
          </li>
          <li className="p-3 cursor-pointer hover:bg-[#2C3A58] rounded-xl">
            <Image
              src="/icons/settingsIcon.png"
              width={20}
              height={20}
              alt="settingsicon"
            />
          </li>
        </ul>
      </div>
      <div className="h-20 flex flex-col items-center justify-between">
        <Image
          src="/images/userAvatar.png"
          width={30}
          height={30}
          alt="userAvatar"
        />
        <span className="cursor-pointer hover:bg-[#2C3A58] p-3 rounded-xl">
          <Image
            src="/icons/logoutIcon.png"
            width={20}
            height={20}
            alt="logouticon"
          />
        </span>
      </div>
    </div>
  );
};

export default LeftNavBar;
