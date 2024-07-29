// import React from 'react'
import { FaWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AdsNav = () => {
  return (
    <>
      <div className="flex justify-between items-center px-[4rem] py-[2rem] bg-[white] shadow-sm">
        <div className="flex items-center">
          <p className="text-[2.5rem] font-normal">Setup</p>
        </div>
        <div className="flex items-center gap-[2rem]">
          <div className="flex items-center gap-[1rem]">
            <FaWallet size={30} className="text-[#184242]" />
            <p className="text-[2rem] font-normal text-[#184242]">
              Ad Credit: ₹ <span>0.00</span>
            </p>
          </div>
          <div className="">
            <Link
              to={"/adsmanager"}
              className="border-[1px] rounded-md border-[#184242] text-[#184242] px-[2rem] py-[1rem] text-[1.6rem] tracking-[1px] font-normal"
            >
              Buy Credits
            </Link>
          </div>
          <div className="">
            <Link
              to={"/adsmanager"}
              className="bg-[#d4d4d4] text-[gray] border-[1px] border-[grey] rounded-md px-[2rem] py-[1rem] text-[1.6rem] tracking-[1px] font-normal"
            >
              + Create Ad
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdsNav;
