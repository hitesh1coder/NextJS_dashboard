import Image from "next/image";
import React from "react";

const ActivePatientsCard = () => {
  return (
    <>
      <h2>Active Patients</h2>
      <div className="w-96 h-56 bg-[#1B2C4F] rounded-3xl p-2 flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#cecccc] ">08:00 AM</span>
          <span className="flex items-center justify-center w-64">
            <div className="w-[70%] h-9 bg-white rounded-2xl flex gap-2 px-2 items-center text-black">
              <Image
                className="border-2 rounded-full bg-white flex w-8 h-8"
                src="/images/userAvatar.png"
                width={20}
                height={20}
                alt="vector"
              />
              <div>
                <p className="text-sm font-bold">Macro Jhonson</p>
                <span className="text-xs font-normal flex space-x-1">
                  <Image
                    src="/icons/clockIcon.png"
                    width={10}
                    height={10}
                    alt="clockIcon"
                  />
                  <p className="text-xs font-normal">08:00-09:00 am</p>
                </span>
              </div>
            </div>
            <span className=" text-[#686868] text-sm">----------</span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#cecccc] ">09:00 AM</span>
          <span className="flex items-center justify-center w-64">
            <span className=" text-[#686868] text-sm">----------</span>
            <div className="w-[70%] h-9 bg-white rounded-2xl flex gap-2 px-2 items-center text-black">
              <Image
                className="border-2 rounded-full bg-white flex w-8 h-8"
                src="/images/userAvatar2.png"
                width={20}
                height={20}
                alt="vector"
              />
              <div>
                <p className="text-sm font-bold">Maira khan</p>
                <span className="text-xs font-normal flex space-x-1">
                  <Image
                    src="/icons/clockIcon.png"
                    width={10}
                    height={10}
                    alt="clockIcon"
                  />
                  <p className="text-xs font-normal">09:00-10:00 am</p>
                </span>
              </div>
            </div>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#cecccc] ">10:00 AM</span>
          <span className="flex items-center justify-center w-64">
            <div className="w-[70%] h-9 bg-white rounded-2xl flex gap-2 px-2 items-center text-black">
              <Image
                className="border-2 rounded-full bg-white flex w-8 h-8"
                src="/images/userAvatar3.png"
                width={20}
                height={20}
                alt="vector"
              />
              <div>
                <p className="text-sm font-bold">Brick Jhon</p>
                <span className="text-xs font-normal flex space-x-1">
                  <Image
                    src="/icons/clockIcon.png"
                    width={10}
                    height={10}
                    alt="clockIcon"
                  />
                  <p className="text-xs font-normal">10:00-11:00 am</p>
                </span>
              </div>
            </div>
            <span className=" text-[#686868] text-sm">----------</span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#cecccc]">11:00 AM</span>
          <span className="flex items-center justify-center w-64">
            <span className=" text-[#686868] text-sm">------------</span>
            <span className="text-sm bg-black/50 px-3 rounded-2xl">
              Break time
            </span>
            <span className=" text-[#686868] text-sm">------------</span>
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-[#cecccc]">12:00 PM</span>
          <span className="flex items-center justify-center w-64">
            <span className=" text-[#686868] text-sm">----------</span>
            <div className="w-[70%] h-9 bg-white rounded-2xl flex gap-2 px-2 items-center text-black">
              <Image
                className="border-2 rounded-full bg-white flex w-8 h-8"
                src="/images/userAvatar4.png"
                width={20}
                height={20}
                alt="vector"
              />
              <div>
                <p className="text-sm font-bold">Alexa Max</p>
                <span className="text-xs font-normal flex space-x-1">
                  <Image
                    src="/icons/clockIcon.png"
                    width={10}
                    height={10}
                    alt="clockIcon"
                  />
                  <p className="text-xs font-normal">12:00-01:00 pm</p>
                </span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default ActivePatientsCard;
