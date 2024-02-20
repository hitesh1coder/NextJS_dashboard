import Image from "next/image";
import React from "react";

const PatientsVisitedCard = () => {
  return (
    <div className="w-60 h-28 bg-[#1B2C4F] rounded-2xl flex my-1">
      <div className="w-4/6 h-full flex flex-col items-start justify-center p-2">
        <p>42</p>
        <p className="text-sm">Patients Visited</p>
        <p className="text-xs font-thin">This Month</p>
      </div>
      <div className="w-4/12 bg-[#2C3A58] rounded-r-2xl h-full flex items-center justify-center">
        <div className="rounded-3xl  bg-[#409BEE]  h-14 w-8 overflow-hidden">
          <div className="bg-[#1b4368] h-[30%]  rounded-t-2xl"></div>
          <div className="flex items-center justify-center flex-col mt-1">
            <Image
              src="/icons/grothIcon.png"
              width={10}
              height={10}
              alt="groth"
            />
            <p className="text-xs">70%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsVisitedCard;
