// import React from 'react'

import { Link } from "react-router-dom";

const CampaignsNav = () => {
  return (
    <>
      <div className="flex justify-between items-center px-[2rem] py-[2rem] bg-[white] w-[100%] shadow-sm max-md:flex-col max-md:justify-start max-md:items-start">
        <p className="text-[2.5rem] font-normal">Campaigns</p>
        <div className="flex items-center gap-[2rem] max-sm:flex-col max-sm:items-start">
          <p className="text-[1.6rem] font-normal text-[grey]">
            Template Messaging Tier
          </p>
          <p className="text-[1.6rem] font-normal">
            Tier <span className="font-normal">0</span> (2/24 Hours)
          </p>
          <p className="text-[1.6rem] text-[grey] font-normal">
            Remaining Quota
          </p>
          <Link
            to={"/campaigns"}
            className="bg-[#dcdcdc] text-[#b3b3b3] text-[1.6rem] px-[2rem] py-[0.5rem] tracking-[0] rounded-md"
          >
            + Launch
          </Link>
        </div>
      </div>
    </>
  );
};

export default CampaignsNav;
