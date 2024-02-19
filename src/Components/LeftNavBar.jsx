"use client";
import Image from "next/image";
import React from "react";

const LeftNavBar = () => {
  return (
    <div className="h-full w-16 flex flex-col items-center">
      <div className="h-20">
        <Image src="/icons/logo.png" width={30} height={30} alt="logo.png" />
      </div>
      <div className="h-96">
        <ul className="flex flex-col space-y-2">
          <li className="bg-[#2C3A58] p-3 cursor-pointer rounded-xl">
            <Image
              src="/icons/homeIcon.png"
              width={20}
              height={20}
              alt="homeicon"
            />
          </li>
          <li className="p-3 cursor-pointer rounded-xl">
            <Image
              src="/icons/saveIcon.png"
              width={20}
              height={20}
              alt="saveicon"
            />
          </li>
          <li className="p-3 cursor-pointer rounded-xl">
            <Image
              src="/icons/liveIcon.png"
              width={20}
              height={20}
              alt="liveicon"
            />
          </li>
          <li className="p-3 cursor-pointer rounded-xl">
            <Image
              src="/icons/chatIcon.png"
              width={20}
              height={20}
              alt="chaticon"
            />
          </li>
          <li className="p-3 cursor-pointer rounded-xl">
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
        <Image
          className="cursor-pointer"
          src="/icons/logoutIcon.png"
          width={20}
          height={20}
          alt="logouticon"
        />
      </div>
    </div>
  );
};

export default LeftNavBar;
