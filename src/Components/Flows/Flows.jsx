// import React from 'react'
import flows_img from "/Images/flows-img.png";
import Sidebar from "../Sidebar/Sidebar";
import FlowsData from "../../APIs/FlowsAPI";
import { useState } from "react";
import { Link } from "react-router-dom";
import Message from "../MessageBox/Message";
import Handlers from "../../Store/Handlers";

const Flows = () => {
  // API
  // ---------------------------------------------Flows API----------------------------------------------------------
  const [flowsdata] = useState(FlowsData);

  // Reload

  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-[100%]">
          <div className="w-[100%] bg-[#dcdcdc] px-[10rem] min-h-screen py-[10rem] max-lg:px-[5rem] max-lg:py-[5rem] max-sm:px-[2rem] max-sm:py-[2rem] relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/Images/flows-bg2.png')] bg-no-repeat bg-center bg-cover opacity-[0.5]"></div>
            <div className="flex justify-center items-center rounded-2xl w-[100%] ml-auto mr-auto bg-[#ffffff] h-[100%] z-[100] relative">
              <div className="grid grid-cols-3 gap-[1rem] max-xl:grid-cols-1 max-xl:py-[4rem] max-xl:px-[4rem] px-[2rem]">
                <div className="col-span-2 flex justify-center items-center max-md:col-span-1">
                  <img src={flows_img} alt="img" className="w-[100%]" />
                </div>
                <div className="flex flex-col justify-center items-center gap-[4rem]">
                  <p className="text-[2rem] font-medium">
                    Flow Builder &nbsp;
                    <span className="bg-[#e3ac2c] text-[white] font-medium rounded-2xl px-[1rem] py-[0.1rem] text-[1.6rem]">
                      Add On
                    </span>
                  </p>
                  <div className="flex flex-col gap-[1rem]">
                    {flowsdata.map((e) => {
                      return (
                        <div
                          className="flex items-center gap-[1rem]"
                          key={e.id}
                        >
                          {e.icon}
                          <p className="text-[1.6rem] font-normal">{e.text}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col justify-center gap-[1rem]">
                    <p
                      className="text-[1.6rem] font-normal mb-[1rem]"
                      id="flows-addon-para"
                    >
                      You don`t have any active addon Flow plan
                    </p>
                    <Link
                      to={"/flows"}
                      onClick={handleOnClick("/flows")}
                      className="bg-[#1b4c3e] font-normal rounded-xl text-[white] text-[1.6rem] tracking-[0] px-[2rem] py-[1rem] text-center leading-[1.6] hover:bg-[#16382e] transition-all duration-[0.2s]"
                    >
                      Get a plan
                    </Link>
                    <Link
                      to={"/flows"}
                      onClick={handleOnClick("/flows")}
                      className="bg-[#1b4c3e] font-normal rounded-xl text-[white] text-[1.6rem] tracking-[0] px-[2rem] py-[1rem] text-center leading-[1.6] hover:bg-[#16382e] transition-all duration-[0.2s]"
                    >
                      Start 14-Day Trial for Flows
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Message />
    </>
  );
};

export default Flows;
