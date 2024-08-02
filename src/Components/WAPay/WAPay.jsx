// import React from 'react'

import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import wapay_img from "/Images/wa-pay.png";
import WAPayData from "../../APIs/WAPayAPI";
import { useState } from "react";
import WATable from "./WATable";
import Handlers from "../../Store/Handlers";

const WAPay = () => {
  // API
  // --------------------------------------------------WAPay API------------------------------------------------------

  const [wapaydata] = useState(WAPayData);

  // Reload

  const { handleOnClick } = Handlers();

  return (
    <>
      <section className="flex">
        <Sidebar />
        <div className="flex flex-col w-[100%]">
          <div className="w-[100%] bg-[#dcdcdc] px-[10rem] py-[2rem] min-h-screen relative max-md:px-[2rem]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/Images/wa-pay-bg2.jpg')] bg-no-repeat bg-center bg-cover opacity-[0.2]"></div>
            <div className="relative bg-[white] rounded-2xl w-[100%] ml-auto mr-auto h-[100%] px-[2rem] py-[2rem] flex justify-center items-center z-[100]">
              <div className="grid grid-cols-3 gap-[1rem] px-[2rem] max-2xl:grid-cols-1 max-2xl:gap-[6rem]">
                <div className="col-span-2 flex justify-center items-center max-2xl:order-2 max-2xl:col-span-1">
                  <img src={wapay_img} alt="img" className="w-[100%]" />
                </div>
                <div className="flex flex-col justify-center items-center gap-[4rem] w-[100%]">
                  <div className="flex flex-col gap-[1rem] justify-center items-center text-center leading-[1.6]">
                    <p className="text-[2rem] font-medium">Introducing</p>
                    <p className="text-[2.2rem] font-medium">
                      Whatsapp Payments
                    </p>
                    <p className="text-[1.6rem] font-medium rounded-[30px] bg-[#643f90] text-[white] px-[2rem] py-[0.5rem]">
                      Zero Setup Free
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[1rem] max-md:gap-[3rem]">
                    {wapaydata.map((e) => {
                      return (
                        <div
                          className="flex items-center gap-[2rem] leading-[1.6]"
                          key={e.id}
                        >
                          {e.icon}
                          <p className="text-[1.6rem] font-normal">{e.text}</p>
                        </div>
                      );
                    })}
                  </div>
                  <WATable />
                  <div className="flex flex-col justify-center gap-[1rem]">
                    <p
                      className="text-[1.6rem] font-normal mb-[1rem] max-2xl:text-center leading-[1.6]"
                      id="wapay-note-para"
                    >
                      *Note: Platform fee will be deducted from your whatsapp
                      conversation charges (WCC) for every successfull
                      transaction. Failed transactions won`t be charge.
                    </p>
                    <div className="flex justify-center items-center">
                      <Link
                        to={"/wapay"}
                        onClick={handleOnClick("/wapay")}
                        className="bg-[#1b4c3e] font-normal rounded-xl text-[white] text-[1.6rem] tracking-[0] px-[2rem] py-[1rem] text-center leading-[1.6] hover:bg-[#16382e] transition-all duration-[0.2s]"
                      >
                        Accept Pricing & Get Started&nbsp;{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
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

export default WAPay;
