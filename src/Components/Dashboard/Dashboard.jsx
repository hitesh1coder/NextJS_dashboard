import React from "react";
import SearchHeader from "../SearchHeader";
import PatientsVisitedCard from "../PatientsVisitedCard";
import UpcomingEventCard from "../UpcomingEventCard";
import StasticsCard from "../StasticsCard";

const Dashboard = () => {
  return (
    <div className="flex bg-[#151C39] w-full h-full rounded-2xl p-6">
      {/* right contents */}
      <div className="w-[50vw]">
        <SearchHeader />
        <div className="my-3 flex gap-12">
          <div className="flex flex-col gap-3">
            <PatientsVisitedCard />
            <UpcomingEventCard />
          </div>
          <div>
            <StasticsCard />
          </div>
        </div>
      </div>
      {/* right content  */}
    </div>
  );
};

export default Dashboard;
