// import React from 'react'

import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const LiveNav = () => {
  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
  };

  return (
    <>
      <div className="livenav grid grid-cols-3 justify-between items-center gap-[3rem] px-[2rem] py-[1rem] bg-[white] shadow-md w-[100%] max-lg:grid-cols-1">
        <div className="left flex items-center gap-[2rem] w-[100%] max-sm:flex">
          <div className="search-input flex justify-between items-center bg-[#f1f1f1] px-[1rem] py-[1rem] rounded-xl w-[100%]">
            <input
              type="text"
              placeholder="Search name or mobile number"
              className="rounded-lg text-start px-[2rem] py-[0] bg-transparent text-[1.6rem] w-[100%] outline-0 border-0 font-normal capitalize"
            />
            <BiSearch
              size={40}
              className="rounded-full bg-[#c8d6da] px-[1rem] py-[0.5rem] cursor-pointer"
            />
          </div>
          <div className="flex items-center">
            <RiMenu4Line size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="right w-[100%] flex justify-between items-center col-span-2 max-lg:justify-around">
          <div className="flex items-center">
            <IoMdArrowDropleft
              size={30}
              className="cursor-pointer rounded-full hover:bg-[lightgrey]"
            />
          </div>
          <div className="flex items-center justify-end">
            <IoMdArrowDropright
              size={30}
              className="cursor-pointer rounded-full hover:bg-[lightgrey]"
            />
          </div>
        </div>
      </div>
      <div className="livenav2 flex justify-between items-center gap-[3rem] px-[12rem] py-[2rem] bg-[#113841] max-md:flex-col max-md:justify-center max-md:items-center">
        <div className="flex justify-center text-center items-start gap-[4rem] max-md:flex-col max-md:items-center">
          <div className="">
            <Link
              to={"/livechat"}
              onClick={handleOnClick("/livechat")}
              className="text-[white] text-[1.6rem] tracking-[1px] font-normal hover:border-b-2 hover:pb-[1rem] transition-all duration-[0.1s] max-md:text-[1.5rem]"
            >
              Active (<span className="">0</span>)
            </Link>
          </div>
          <div className="">
            <Link
              to={"/livechat"}
              onClick={handleOnClick("/livechat")}
              className="text-[white] text-[1.6rem] tracking-[1px] font-normal hover:border-b-2 hover:pb-[1rem] transition-all duration-[0.1s] max-md:text-[1.5rem]"
            >
              Requesting (<span className="">0</span>)
            </Link>
          </div>
          <div className="">
            <Link
              to={"/livechat"}
              onClick={handleOnClick("/livechat")}
              className="text-[white] text-[1.6rem] tracking-[1px] font-normal hover:border-b-2 hover:pb-[1rem] transition-all duration-[0.1s] max-md:text-[1.5rem]"
            >
              Inverted (<span className="">0</span>)
            </Link>
          </div>
        </div>
        <div className="">
          <p className="text-[white] text-[2rem] font-normal">Chat Profile</p>
        </div>
      </div>
    </>
  );
};

export default LiveNav;
