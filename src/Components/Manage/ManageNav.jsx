// import React from 'react'

import { Link } from "react-router-dom";

const ManageNav = () => {
  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
  };

  return (
    <>
      <div className="flex justify-between items-center gap-[2rem] px-[2rem] py-[2rem] bg-[white] shadow-sm w-[100%] max-md:flex-col max-md:items-start max-md:justify-start">
        <div className="flex items-center">
          <p className="text-[2rem] font-medium max-sm:text-[1.8rem]">
            Template Messages
          </p>
        </div>
        <div className="">
          <Link
            to={"/manage"}
            onClick={handleOnClick("/manage")}
            className="text-[1.6rem] font-normal bg-[#e0e0e0] text-[grey] px-[2rem] py-[0.5rem] rounded-md"
          >
            + New
          </Link>
        </div>
      </div>
    </>
  );
};

export default ManageNav;
