"use client";
import Image from "next/image";
import React from "react";
import { Line, Circle } from "rc-progress";

const ConsultationCard = () => {
  return (
    <div className="w-60 h-24 bg-[#1B2C4F] rounded-2xl flex flex-col my-2 p-3 ">
      <div className="w-full flex justify-between items-start">
        <span>
          <p className="text-xs font-thin">Consultation</p>
          <p>82/100</p>
        </span>
        <Image
          src="/icons/optionIcon.png"
          width={20}
          height={20}
          alt="option"
        />
      </div>
      <div className="flex w-full h-12 items-center justify-between">
        <span className="flex justify-center items-center gap-1 bg-[#2C3A58] rounded-md">
          <p className="text-xs py-1 pl-3">82%</p>
          <Image
            src="/icons/grothIcon.png"
            width={10}
            height={10}
            alt="groth"
          />
        </span>

        <Circle
          style={{ width: "100%", height: "100%" }}
          percent={82}
          trailWidth={12}
          trailColor="#fff"
          gapPosition="right"
          strokeWidth={13}
          strokeColor="#409BEE"
        />
      </div>
    </div>
  );
};

export default ConsultationCard;
