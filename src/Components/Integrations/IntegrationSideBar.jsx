import React from "react";
import { Link } from "react-router-dom";
import { GrCubes } from "react-icons/gr";
import { CiMenuKebab } from "react-icons/ci";
import Handlers from "../../Store/Handlers";

const IntegrationSidebar = () => {
  const { handleOnClick, SubdivOpen, handleSubDivOpen } = Handlers();

  const menus = [{ name: "Discover", link: "/integrations", icon: GrCubes }];

  return (
    <div
      className={`bg-[#ffffff] min-h-screen px-[2rem] py-[2rem] ${
        SubdivOpen
          ? `w-[20%] max-lg:w-[30%] max-md:min-w-[30%] z-[1009]`
          : "w-32 z-[1009]"
      } duration-300 text-[black] px-4`}
    >
      <div
        className={`${
          !SubdivOpen && "gap-[1px]"
        } py-3 flex flex-col gap-[2rem] justify-start fixed max-md:justify-center`}
      >
        <CiMenuKebab
          size={26}
          className="cursor-pointer"
          onClick={() => handleSubDivOpen(!SubdivOpen)}
        />
        <p
          className={`${
            !SubdivOpen && "hidden"
          } text-[2rem] font-medium max-sm:text-[1.8rem]`}
        >
          Integrations
        </p>
      </div>
      <div className="mt-[12rem] flex flex-col fixed justify-start items-start">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            onClick={handleOnClick(menu?.link)}
            className={` ${
              menu?.margin && "mt-[2rem]"
            } group flex items-center justify-start gap-3.5 font-medium tracking-[1px] p-0 hover:bg-[#f4f4f5] w-[200%] rounded-md capitalize text-[1.8rem] max-md:text-[1.5rem] max-md:flex-col max-md:justify-start max-md:items-start`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              className={`whitespace-pre duration-500 ${
                !SubdivOpen && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                SubdivOpen && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IntegrationSidebar;
