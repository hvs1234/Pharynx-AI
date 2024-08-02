// import { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BiMessage, BiStore } from "react-icons/bi";
import { HiBuildingLibrary } from "react-icons/hi2";
import { BsCart } from "react-icons/bs";
import { LuCopyCheck, LuShip } from "react-icons/lu";
import Handlers from "../../Store/Handlers";

const EcommSidebar = () => {
  const {
    handleOnClick,
    SubdivOpen,
    handleSubDivOpen,
    handleOpen2,
    handleOpen3,
    open2,
    open3,
  } = Handlers();

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
          Ecomm+
        </p>
      </div>
      <div className="mt-[12rem] flex flex-col fixed justify-start items-start w-[20%]">
        <Accordion
          open={open2 === 1}
          className="w-[80%] mb-[1rem] max-md:w-[100%]"
        >
          <AccordionHeader onClick={() => handleOpen2(1)}>
            <p className={` ${!SubdivOpen && "hidden"} text-[1.6rem] font-normal`}>
              Setup&nbsp; <i className="fa-solid fa-chevron-down"></i>
            </p>
          </AccordionHeader>
          <AccordionBody className="flex flex-col gap-[2rem] mt-[1rem] mb-[4rem]">
            <Link
              to={"/"}
              onClick={handleOnClick("/ecomm")}
              className="flex items-center gap-[1rem] text-[1.6rem] tracking-[0] font-normal hover:bg-[#e7e7e7] w-[80%] max-md:flex-col max-md:items-start max-md:justify-start max-md:w-[100%]"
            >
              <BiStore size={20} />
              <p
                className={`${
                  !SubdivOpen && "hidden"
                } font-normal max-md:text-left`}
              >
                Store Setup
              </p>
            </Link>
            <Link
              to={"/"}
              onClick={handleOnClick("/ecomm")}
              className="flex items-center gap-[1rem] text-[1.6rem] tracking-[0] font-normal hover:bg-[#e7e7e7] w-[80%] max-md:flex-col max-md:items-start max-md:justify-start max-md:w-[100%]"
            >
              <BiMessage size={20} />
              <p className={`${!SubdivOpen && "hidden"} font-normal`}>
                Setup Messages
              </p>
            </Link>
            <Link
              to={"/"}
              onClick={handleOnClick("/ecomm")}
              className="flex items-center gap-[1rem] text-[1.6rem] tracking-[0] font-normal hover:bg-[#e7e7e7] w-[80%] max-md:flex-col max-md:items-start max-md:justify-start max-md:w-[100%]"
            >
              <HiBuildingLibrary size={20} />
              <p className={`${!SubdivOpen && "hidden"} font-normal`}>
                Shopify Chekouts
              </p>
            </Link>
          </AccordionBody>
        </Accordion>
        <Accordion open={open3 === 1} className="w-[80%] mb-[1rem]">
          <AccordionHeader onClick={() => handleOpen3(1)}>
            <p className={` ${!SubdivOpen && "hidden"} text-[1.6rem] font-normal`}>
              Flows&nbsp; <i className="fa-solid fa-chevron-down"></i>
            </p>
          </AccordionHeader>
          <AccordionBody className="flex flex-col gap-[2rem] mt-[1rem] mb-[4rem]">
            <Link
              to={"/"}
              onClick={handleOnClick("/ecomm")}
              className="flex items-center gap-[1rem] text-[1.6rem] tracking-[0] font-normal hover:bg-[#e7e7e7] w-[80%] max-md:flex-col max-md:items-start max-md:justify-start max-md:w-[100%]"
            >
              <BsCart size={20} />
              <p className={`${!SubdivOpen && "hidden"} font-normal`}>
                Abandoned Cart Flow
              </p>
            </Link>
            <Link
              to={"/"}
              onClick={handleOnClick("/ecomm")}
              className="flex items-center gap-[1rem] text-[1.6rem] tracking-[0] font-normal hover:bg-[#e7e7e7] w-[80%] max-md:flex-col max-md:items-start max-md:justify-start max-md:w-[100%]"
            >
              <LuCopyCheck size={20} />
              <p className={`${!SubdivOpen && "hidden"} font-normal`}>
                Confirm Flow
              </p>
            </Link>
            <Link
              to={"/"}
              onClick={handleOnClick("/ecomm")}
              className="flex items-center gap-[1rem] text-[1.6rem] tracking-[0] font-normal hover:bg-[#e7e7e7] w-[80%] max-md:flex-col max-md:items-start max-md:justify-start max-md:w-[100%]"
            >
              <LuShip size={20} />
              <p className={`${!SubdivOpen && "hidden"} font-normal`}>
                Order Flow
              </p>
            </Link>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default EcommSidebar;
