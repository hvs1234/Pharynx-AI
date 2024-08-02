// import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import IntegrationNav from "./IntegrationNav";
import IntegrationSidebar from "./IntegrationSideBar";
import IntegrationData from "../../APIs/IntegrationAPI";
import { useState } from "react";
import ScrollTop from "../ScrollToTop/ScrollTop";
import Message from "../MessageBox/Message";
import Handlers from "../../Store/Handlers";

const Integrations = () => {
  // API
  // -------------------------------------------------IntegrationAPI------------------------------------------------------

  const [integrationdata] = useState(IntegrationData);


  // Reload

  const { handleOnClick } = Handlers();

  return (
    <>
      <section className="flex">
        <Sidebar />
        <IntegrationSidebar />
        <div className="flex flex-col w-[100%]">
          <div className="min-h-screen flex flex-col w-[100%]">
            <IntegrationNav />
            <div className="px-[10rem] py-[4rem] mb-[4rem] bg-[#eaeaea] min-h-screen w-[100%] max-md:px-[1rem] max-md:py-[1rem]">
              <div className="grid grid-cols-3 gap-[2rem] w-[100%] max-2xl:grid-cols-1">
                {integrationdata.map((e) => {
                  return (
                    <Link
                      to={e.to}
                      key={e.id}
                      onClick={handleOnClick(e.to)}
                      className="bg-[white] tracking-[1px] h-[100%] mb-auto hover:shadow-lg transition-all duration-[0.4s] ease-out px-[2rem] py-[2rem] shadow-sm rounded-xl flex flex-col gap-[2rem] justify-start items-start cursor-pointer"
                    >
                      <img
                        src={e.img}
                        alt="img"
                        className="w-[15%] max-2xl:w-[10%]"
                      />
                      <p className="text-[2rem] font-medium tracking-[0]">
                        {e.title}
                      </p>
                      <p className="text-[1.6rem] font-medium tracking-[0] leading-[1.6] text-[#585858]">
                        {e.desc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop />
      <Message />
    </>
  );
};

export default Integrations;
