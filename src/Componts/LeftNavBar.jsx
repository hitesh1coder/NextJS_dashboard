"use client";
import Image from "next/image";
import React from "react";

const LeftNavBar = () => {
  return (
    <div className="flex flex-col border border-white-500 w-10 items-center justify-between">
      <div className="h-20">
        <Image src="/icons/logo.png" width={30} height={30} alt="logo.png" />
      </div>
      <div className="h-80">
        <ul>
          <li>
            <Image
              src="/icons/homeIcon.png"
              width={20}
              height={20}
              alt="homeicon"
            />
          </li>
          <li>
            <Image
              src="/icons/saveIcon.png"
              width={20}
              height={20}
              alt="saveicon"
            />
          </li>
          <li>
            <Image
              src="/icons/liveIcon.png"
              width={20}
              height={20}
              alt="liveicon"
            />
          </li>
          <li>
            <Image
              src="/icons/chatIcon.png"
              width={20}
              height={20}
              alt="chaticon"
            />
          </li>
          <li>
            <Image
              src="/icons/settingsIcon.png"
              width={20}
              height={20}
              alt="settingsicon"
            />
          </li>
        </ul>
      </div>
      <div className="h-32">
        <Image
          src="/images/userAvatar.png"
          width={30}
          height={30}
          alt="userAvatar"
        />
        <Image
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
