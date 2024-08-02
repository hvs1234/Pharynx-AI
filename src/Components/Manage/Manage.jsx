// import React from 'react'
import ManageData from "../../APIs/ManageAPI";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ManageNav from "./ManageNav";
import ManageSidebar from "./ManageSidebar";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Handlers from "../../Store/Handlers";

const Manage = () => {
  // API
  //-------------------------------------------ManageAPI--------------------------------------------------

  const [managedata] = useState(ManageData);

  // Reload

  const { handleOnClick } = Handlers();

  return (
    <>
      <section className="flex">
        <Sidebar />
        <ManageSidebar />
        <div className="flex flex-col w-[100%]">
          <ManageNav />
          <div className="flex flex-col w-[100%] min-h-screen gap-[4rem] px-[20rem] py-[4rem] bg-[#eaeaea] ml-auto mr-auto max-xl:px-[5rem] max-sm:px-[1rem]">
            <div className="bg-[white] px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[1rem] justify-center items-start w-[100%] ml-auto mr-auto">
              <p className="text-[2rem] font-medium">Quick Guide</p>
              <p className="text-[1.6rem] font-normal w-[100%] max-lg:w-[100%] leading-[1.6]">
                You can Initiate a Conversation with users on WhatsApp using
                these template messages.
              </p>
              <div className="grid grid-cols-2 justify-between items-center gap-[2rem] w-[100%] mt-[1rem] max-2xl:flex-col max-2xl:items-start max-2xl:justify-normal max-xl:grid-cols-1">
                {managedata.map((e) => {
                  return (
                    <Link
                      to={e.link}
                      onClick={handleOnClick(e.link)}
                      key={e.id}
                      className="flex items-center gap-[1rem] font-normal max-[380px]:flex-col max-[380px]:items-start text-[1.6rem] tracking-[0] hover:underline max-md:flex-col max-md:items-start max-md:justify-start leading-[1.6]"
                    >
                      {e.icon}
                      <p className="font-normal">{e.text}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between items-center gap-[2rem] max-md:flex-col max-md:items-start max-md:justify-start">
              <div className="flex items-center justify-start w-[40%] gap-[1rem] px-[2rem] py-[1rem] bg-[white] rounded-xl max-md:w-[100%]">
                <input
                  type="text"
                  name="Campaigns Name"
                  id="campaigns-name"
                  placeholder="Search templates (status, name, etc.)"
                  className="outline-0 border-0 text-[1.6rem] font-normal tracking-[0] capitalize w-[100%]"
                />
                <BiSearch size={20} />
              </div>
              <div className="">
                <Link
                  to={"/manage"}
                  onClick={handleOnClick("/manage")}
                  className="text-[1.6rem] font-normal bg-[#e0e0e0] text-[grey] px-[2rem] py-[0.5rem] rounded-md"
                >
                  <i className="fa-solid fa-rotate"></i>&nbsp; Sync Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manage;
