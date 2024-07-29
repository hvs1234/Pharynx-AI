// import React from 'react'
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { RiMenu4Line } from "react-icons/ri";
import HistoryNav from "./HistoryNav";
import { useState } from "react";
import LiveChatData from "../../APIs/LiveChatAPI";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ScrollTop from "../ScrollToTop/ScrollTop";
import Message from "../MessageBox/Message";

const HistoryPart = () => {
  // API
  //----------------------------------------------LiveChatAPI-----------------------------------

  const [livechatdata] = useState(LiveChatData);

  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
  };

  return (
    <>
      <section className="flex">
        <Sidebar />
        <div className="flex flex-col w-[100%]">
          <div className="historypart grid grid-cols-4 max-xl:grid-cols-1">
            <div className="left bg-[white] min-h-screen px-[2rem] py-[0]">
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
              <div className="flex flex-col justify-center items-center min-h-screen">
                <p className="text-[2rem] font-normal">No Chats Yet !</p>
              </div>
            </div>
            <div className="right bg-[lightgrey] col-span-3 min-h-screen max-xl:col-span-2">
              <HistoryNav />
              <div className="grid grid-cols-3 w-[100%] min-h-screen max-xl:grid-cols-2 max-sm:grid-cols-1">
                <div className="bg-[url('/Images/livechat-bg.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center col-span-2 relative object-cover max-xl:py-[6rem] max-xl:col-span-1">
                  <div className="livechat-overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#fff1f3] opacity-[0.8]"></div>
                  <div className="flex flex-col justify-center items-center text-center gap-[2rem] relative">
                    <div className="flex flex-col gap-[1rem]">
                      <p className="text-[2.5rem] font-normal">
                        Select a chat to continue !
                      </p>
                      <div className="grid grid-cols-3 gap-[3rem] mt-[6rem] justify-center items-center text-center max-xl:grid-cols-1">
                        {livechatdata.map((e) => {
                          return (
                            <div className={e.class} key={e.id}>
                              {e.icon}
                              <Link
                                to={e.link}
                                onClick={handleOnClick(e.link)}
                                className="text-[1.6rem] font-normal hover:underline tracking-[0]"
                              >
                                {e.text}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[white] px-[2rem] flex flex-col gap-[0]">
                  <div className="flex justify-center items-center px-[2rem] py-[3rem]">
                    <FaUserCircle size={60} className="text-[goldenrod]" />
                  </div>
                  <div className="line bg-[grey] w-[100%] h-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Message />
      <ScrollTop />
    </>
  );
};

export default HistoryPart;
