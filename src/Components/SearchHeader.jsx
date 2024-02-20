import Image from "next/image";
import React from "react";

const SearchHeader = () => {
  return (
    <div className="flex items-center justify-between md:h-14 w-full">
      <div>
        <p>Hello,</p>
        <h2 className="font-bold">Dr. Colter! 👋</h2>
      </div>
      <div className="relative">
        <Image
          className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer"
          src="/icons/searchIcon.png"
          width={20}
          height={20}
          alt="search"
        />
        <input
          type="text"
          placeholder="search"
          className=" text-sm py-3 pl-10 bg-[#2C3A58] md:w-96 border-none outline-none rounded-2xl"
        />
      </div>
      <div className="p-3 rounded-2xl bg-[#409BEE] relative">
        <span className="rounded-full w-2 h-2 bg-red-600 absolute right-3"></span>
        <Image
          src="/icons/notificationIcon.png"
          width={20}
          height={20}
          alt="notification"
        />
      </div>
    </div>
  );
};

export default SearchHeader;
