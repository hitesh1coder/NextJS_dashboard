import React from "react";
import SearchHeader from "../SearchHeader";

const MainContainer = () => {
  return (
    <div className="flex bg-[#151C39] w-full h-full rounded-2xl p-6">
      {/* right contents */}
      <div className="w-[50vw]">
        <SearchHeader />
      </div>
      {/* right content  */}
    </div>
  );
};

export default MainContainer;
