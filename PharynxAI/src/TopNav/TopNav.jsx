// import React from 'react'

import { Link } from "react-router-dom";
import logo from "/Images/pharynxai-logo.jpeg";

const TopNav = () => {
  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
  };

  return (
    <>
      <div className="main-nav w-[100%] flex gap-[3rem] justify-between items-center bg-[white] px-[2rem] py-[2rem] max-xl:flex-col mx-auto my-0">
        <div className="logo flex gap-[2rem] items-center">
          <img src={logo} alt="logo" className="w-[20%] h-[100%]" />
          <p className="text-[2.5rem] max-md:text-[3rem]">PharynxAI</p>
        </div>
        <div className="main-nav-link flex text-center gap-[4rem] items-center max-xl:flex-col max-xl:gap-[3rem]">
          <div className="left flex gap-[2rem] items-center max-lg:flex-col">
            <p className="text-[1.5rem] max-md:text-[2rem]">
              WhatsApp Business API Status:
            </p>
            <p className="capitalize text-[red] text-[1.5rem] max-md:text-[2rem]">
              pending
            </p>
            <Link
              to={"/"}
              onClick={handleOnClick("/")}
              className="text-[1.5rem] bg-[green] text-[white] rounded-md px-[2rem] py-[0.5rem] max-md:text-[2rem] max-md:py-[1rem] tracking-[0] hover:scale-[1.1] transition-all ease-in-out duration-[0.3s]"
            >
              Apply Now
            </Link>
          </div>
          <div className="right flex items-center gap-[2rem] max-lg:flex-col max-md:text-[1.8rem] max-lg:gap-[2rem]">
            <p className="text-[1.5rem] max-md:text-[2rem]">Current Plan:</p>
            <p className="capitalize text-[1.5rem] max-md:text-[2rem]">Basic</p>
            <Link
              to={"/"}
              onClick={handleOnClick("/")}
              className="text-[1.5rem] text-center bg-[purple] text-[white] rounded-md px-[2rem] py-[0.5rem] max-md:text-[2rem] max-md:py-[1rem] tracking-[0] hover:scale-[1.1] transition-all ease-in-out duration-[0.3s]"
            >
              Upgrade Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
