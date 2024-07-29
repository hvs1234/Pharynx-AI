// import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import AdsNav from "./AdsNav";
import { FaFacebook } from "react-icons/fa6";
import { IoMegaphone } from "react-icons/io5";

const AdsManager = () => {
  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
  };

  return (
    <>
      <section className="flex">
        <Sidebar />
        <div className="w-[100%] flex flex-col">
          <div className="grid grid-cols-5 gap-[0.1rem] w-[100%] min-h-screen">
            <div className="left min-h-screen bg-[white] px-[2rem] py-[2rem]">
              <div className="flex flex-col gap-[2rem]">
                <p className="text-[2.2rem] font-normal px-[2rem]">
                  Click to Whatsapp Ads
                </p>
                <div className="flex flex-col gap-[0] mt-[2rem] tracking-[1px]">
                  <Link
                    to={"/adsmanager"}
                    onClick={handleOnClick("/adsmanager")}
                    className="tracking-[1px] flex items-center gap-[2rem] rounded-md px-[2rem] py-[2rem] transition-all duration-[0.2s] hover:bg-[#dde2e2]"
                  >
                    <IoMegaphone size={26} className="text-[#2b2b2b]" />
                    <p className="text-[1.6rem] font-normal">Ads Manager</p>
                  </Link>
                  <Link
                    to={"/adsmanager"}
                    onClick={handleOnClick("/adsmanager")}
                    className="tracking-[1px] flex items-center gap-[2rem] rounded-md px-[2rem] py-[2rem] transition-all duration-[0.2s] hover:bg-[#dde2e2] active:bg-[#dde2e2] visited:bg-[#dde2e2]"
                  >
                    <FaFacebook size={26} className="text-[#2b2b2b]" />
                    <p className="text-[1.6rem] font-normal">Setup</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="right col-span-4 min-h-screen bg-[#eaeaea]">
              <AdsNav />
              <div className="flex flex-col gap-[4rem] px-[6rem] py-[4rem]">
                <div className="flex flex-col justify-center items-start bg-white rounded-xl px-[4rem] py-[4rem] w-[100%] h-[100%]">
                  <div className="flex justify-between items-center gap-[10rem] w-[80%]">
                    <div className="flex flex-col gap-[2rem]">
                      <p className="text-[2rem] font-medium">
                        Connect your Facebook account
                      </p>
                      <p className="text-[1.6rem] font-normal">
                        Allow PharynxAI to receive advertisement analytics and
                        events from Facebook
                      </p>
                      <p className="text-[1.6rem] font-normal">
                        *Please select{" "}
                        <span className="font-medium">OPT into all</span> option
                        for Business and Pages*
                      </p>
                    </div>
                    <div className="flex justify-end items-end">
                      <Link
                        to={"/adsmanager"}
                        onClick={handleOnClick("/adsmanager")}
                        className="bg-[#e2e2e2] text-[grey] px-[2rem] py-[1rem] text-[1.6rem] rounded-2xl tracking-[1px]"
                      >
                        Continue With Facebook
                      </Link>
                    </div>
                  </div>
                  <div className="line h-[1px] w-[100%] bg-[#dbdbdb] mt-[4rem] mb-[4rem]"></div>
                  <div className="flex justify-between items-center gap-[10rem] w-[80%]">
                    <div className="flex flex-col gap-[2rem]">
                      <p className="text-[2rem] font-medium">
                        Choose your Facebook page
                      </p>
                      <p className="text-[1.6rem] font-normal">
                        Select Facebook page which will be used to advertise
                      </p>
                    </div>
                    <div className="flex justify-end items-end">
                      <input
                        type="text"
                        placeholder="Choose account page"
                        className="bg-transparent border-[1px] border-[grey] outline-0 capitalize text-[grey] px-[2rem] py-[1rem] text-[1.6rem] rounded-2xl tracking-[1px]"
                      >
                      </input>
                    </div>
                  </div>
                  <div className="line h-[1px] w-[100%] bg-[#dbdbdb] mt-[4rem] mb-[4rem]"></div>
                  <div className="flex justify-between items-center gap-[10rem]">
                    <div className="flex flex-col gap-[2rem]">
                      <p className="text-[2rem] font-medium">
                        Connect your Facebook account
                      </p>
                      <p className="text-[1.6rem] font-normal">
                        Allow PharynxAI to receive advertisement analytics and
                        events from Facebook
                      </p>
                      <p className="text-[1.6rem] font-normal">
                        *Please select{" "}
                        <span className="font-medium">OPT into all</span> option
                        for Business and Pages*
                      </p>
                    </div>
                    <div className="">
                      <Link
                        to={"/adsmanager"}
                        onClick={handleOnClick("/adsmanager")}
                        className="bg-[#e2e2e2] text-[grey] px-[2rem] py-[1rem] text-[1.6rem] rounded-2xl tracking-[1px]"
                      >
                        Continue With Facebook
                      </Link>
                    </div>
                  </div>
                  <div className="line h-[1px] w-[100%] bg-[#dbdbdb] mt-[4rem] mb-[4rem]"></div>
                  <div className="flex justify-between items-center gap-[10rem]">
                    <div className="flex flex-col gap-[2rem]">
                      <p className="text-[2rem] font-medium">
                        Connect your Facebook account
                      </p>
                      <p className="text-[1.6rem] font-normal">
                        Allow PharynxAI to receive advertisement analytics and
                        events from Facebook
                      </p>
                      <p className="text-[1.6rem] font-normal">
                        *Please select{" "}
                        <span className="font-medium">OPT into all</span> option
                        for Business and Pages*
                      </p>
                    </div>
                    <div className="">
                      <Link
                        to={"/adsmanager"}
                        onClick={handleOnClick("/adsmanager")}
                        className="bg-[#e2e2e2] text-[grey] px-[2rem] py-[1rem] text-[1.6rem] rounded-2xl tracking-[1px]"
                      >
                        Continue With Facebook
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdsManager;
