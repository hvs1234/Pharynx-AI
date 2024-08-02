// import React from 'react'

import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import CampaignsNav from "./CampaignsNav";
import { MdOutlineMenuBook } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import Handlers from "../../Store/Handlers";

const Campaigns = () => {
  // Reload

  const { handleOnClick } = Handlers();

  return (
    <>
      <section className="flex">
        <Sidebar />
        <div className="flex flex-col w-[100%]">
          <CampaignsNav />
          <div className="flex flex-col w-[100%] min-h-screen gap-[4rem] px-[20rem] py-[4rem] bg-[#eaeaea] ml-auto mr-auto max-xl:px-[5rem] max-sm:px-[1rem]">
            <div className="bg-[white] px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[1rem] justify-center items-start w-[100%] ml-auto mr-auto">
              <p className="text-[2rem] font-medium">Quick Guide</p>
              <p className="text-[1.6rem] font-normal w-[100%] max-lg:w-[100%] leading-[1.6]">
                Tap on any Campaign to see detailed analytics. Launch a campaign
                now to initiate new conversations with users on WhatsApp.
              </p>
              <div className="flex justify-between items-center gap-[2rem] w-[70%] mt-[1rem] max-2xl:flex-col max-2xl:items-start max-2xl:justify-normal">
                <Link
                  to={"/contact"}
                  onClick={handleOnClick("/campaigns")}
                  className="flex items-center gap-[1rem] font-normal max-[380px]:flex-col max-[380px]:items-start text-[1.6rem] tracking-[0] hover:underline max-md:flex-col max-md:items-start max-md:justify-start leading-[1.6]"
                >
                  <MdOutlineMenuBook size={20} />
                  <p className="font-normal">
                    Audience segregation for WhatsApp Broadcast
                  </p>
                </Link>
                <Link
                  to={"/contact"}
                  onClick={handleOnClick("/campaigns")}
                  className="flex items-center gap-[1rem] font-normal max-[380px]:flex-col max-[380px]:items-start text-[1.6rem] tracking-[0] hover:underline max-md:flex-col max-md:items-start max-md:justify-start leading-[1.6]"
                >
                  <MdOutlineMenuBook size={20} />
                  <p className="font-normal">Upgrade WhatsApp Tier Limit</p>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-start w-[50%] gap-[1rem] px-[2rem] py-[1rem] bg-[white] rounded-xl max-md:w-[100%]">
              <BiSearch size={20} />
              <input
                type="text"
                name="Campaigns Name"
                id="campaigns-name"
                placeholder="Search by campaigns name"
                className="outline-0 border-0 text-[1.6rem] font-normal tracking-[0] capitalize w-[100%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Campaigns;
