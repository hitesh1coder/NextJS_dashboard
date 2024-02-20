import React from "react";
import SearchHeader from "../SearchHeader";
import PatientsVisitedCard from "../PatientsVisitedCard";
import UpcomingEventCard from "../UpcomingEventCard";
import StasticsCard from "../StasticsCard";
import ActivePatientsCard from "../ActivePatientsCard";
import TeamMeatingCard from "../TeamMeatingCard";
import ConsultationCard from "../ConsultationCard";
import UserInfo from "../UserInfo";

const Dashboard = () => {
  return (
    <div className="flex bg-[#151C39] w-full h-full rounded-2xl p-2 space-x-10">
      {/* right contents */}
      <div className="w-[50vw] mx-7">
        <SearchHeader />
        <div className="my-1 flex gap-12">
          <div className="flex flex-col gap-3">
            <PatientsVisitedCard />
            <UpcomingEventCard />
          </div>
          <div>
            <StasticsCard />
          </div>
        </div>
        {/* right-bottom content  */}

        <div className="my-3 flex gap-12">
          <div>
            <ActivePatientsCard />
          </div>
          <div className="flex flex-col">
            <h2>Upcoming Events</h2>
            <TeamMeatingCard />
            <ConsultationCard />
          </div>
        </div>
      </div>
      {/* right content  */}

      {/* left content  */}
      <div className="w-[30vw] bg-[#111729] rounded-3xl">
        <UserInfo />
      </div>
    </div>
  );
};

export default Dashboard;
