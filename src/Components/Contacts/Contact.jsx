// import React from 'react'

import { MdOutlineMenuBook } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import ContactNav from "./ContactNav";
import { Link } from "react-router-dom";
import { IoPlayCircleOutline } from "react-icons/io5";
import Message from "../MessageBox/Message";
import ScrollTop from "../ScrollToTop/ScrollTop";
import Handlers from "../../Store/Handlers";

const Contact = () => {
  // Reload

  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-[100%] bg-[#eaeaea]">
          <ContactNav />
          <div className="flex flex-col gap-[1rem] px-[2rem] py-[4rem] justify-start items-start w-[100%]">
            <div className="flex flex-col justify-center items-start gap-[1rem] px-[2rem] py-[2rem] ml-auto mr-auto rounded-md bg-[white] w-[80%] max-md:w-[100%]">
              <p className="text-[2rem] font-medium">Quick Guide</p>
              <p className="text-[1.6rem] font-normal">
                Import contact, create audience & launch campaign, all from one
                place
              </p>
              <div className="flex justify-between items-center gap-[2rem] mt-[2rem] w-[60%] max-xl:flex-col max-xl:w-[100%] max-xl:items-start">
                <Link
                  to={"/contact"}
                  onClick={handleOnClick("/contact")}
                  className="flex items-center gap-[1rem] font-normal max-[380px]:flex-col max-[380px]:items-start text-[1.6rem] tracking-[0] hover:underline"
                >
                  <MdOutlineMenuBook size={20} />
                  <p className="font-normal">
                    How to apply for Whatsapp Business API?
                  </p>
                </Link>
                <Link
                  to={"/contact"}
                  onClick={handleOnClick("/contact")}
                  className="flex items-center gap-[1rem] tracking-[0]"
                >
                  <IoPlayCircleOutline
                    size={20}
                    className="font-medium text-[#122c26]"
                  />
                  <p className="text-[1.6rem] font-normal">Watch Tutorial</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Message />
      <ScrollTop />
    </>
  );
};

export default Contact;
