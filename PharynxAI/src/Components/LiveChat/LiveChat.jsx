// import React from 'react'

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ScrollTop from "../ScrollToTop/ScrollTop";
import Sidebar from "../Sidebar/Sidebar";
import LiveNav from "./LiveNav";
import livechatimg from "/Images/livechat-img.png";
// import { MdOutlineMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";
import LiveChatData from "../../APIs/LiveChatAPI";
import Message from "../MessageBox/Message";

const LiveChat = () => {
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
        <div className="w-[100%] flex flex-col">
          <LiveNav />
          <div className="grid grid-cols-5 min-h-screen max-xl:grid-cols-1">
            <div className="bg-[white] flex flex-col items-center justify-center px-[2rem] max-xl:py-[4rem]">
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <img
                    src={livechatimg}
                    className="w-[100%] max-xl:w-[50%] max-md:w-[100%]"
                    alt="img"
                  />
                </div>
                <p className="text-[2rem] font-normal">Seems Clear !</p>
              </div>
            </div>
            <div className="bg-[url('/Images/livechat-bg.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center col-span-3 relative object-cover max-xl:py-[6rem]">
              <div className="livechat-overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#fff1f3] opacity-[0.8]"></div>
              <div className="flex flex-col justify-center items-center text-center gap-[2rem] relative">
                <div className="flex flex-col gap-[1rem]">
                  <p className="text-[2.5rem] font-normal">
                    Select a chat to continue !
                  </p>
                  <div className="grid grid-cols-3 gap-[3rem] mt-[6rem] justify-center items-center text-center max-2xl:grid-cols-1">
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
      </section>
      <Message />
      <ScrollTop />
    </>
  );
};

export default LiveChat;
