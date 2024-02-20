import Image from "next/image";
import React from "react";

const UpcomingEventCard = () => {
  return (
    <div className="w-48 h-28 bg-[#1B2C4F] rounded-2xl flex flex-col space-y-4 mt-2 p-2">
      <div className="flex h-5 w-full items-center gap-2">
        <div className="p-2 rounded-full bg-[#409BEE]">
          <Image
            src="/icons/arrowRight.png"
            width={10}
            height={10}
            alt="arrowright"
          />
        </div>
        <p>Upcoming Events</p>
      </div>
      <div>
        <div className="flex justify-around items-center">
          <div className="rounded-full border-2 flex w-12 h-12 items-center justify-center">
            <Image
              className="rounded-full bg-white flex w-8 h-8"
              src="/images/eventImage.png"
              width={30}
              height={30}
              alt="eventImage"
            />
          </div>
          <div>
            <p className="text-sm">Aliza Shah</p>
            <span className="text-xs font-thin flex space-x-1">
              <Image
                src="/icons/clockIcon.png"
                width={10}
                height={10}
                alt="clockIcon"
              />
              <p>08:00-09:00 am</p>
            </span>
            <p className="text-xs font-thin mt-1 bg-slate-600 p-1 rounded-xl">
              Visited 7 days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
