import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { FaBoltLightning, FaRegSquareCheck } from "react-icons/fa6";
import { RiBillFill, RiMessage2Line } from "react-icons/ri";
import { TfiList } from "react-icons/tfi";
import { IoIosNotificationsOutline, IoMdBookmarks } from "react-icons/io";
import { FiTag, FiUsers } from "react-icons/fi";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineVpnKey } from "react-icons/md";
import Handlers from "../../Store/Handlers";

const ManageSidebar = () => {
  // Open Sidebar]

  const [open, setOpen] = useState(true);

  // Reload

  const { handleOnClick } = Handlers();

  const menus = [
    { name: "Template Message", link: "/manage", icon: FaBoltLightning },
    { name: "Optin Management", link: "/manage", icon: FaRegSquareCheck },
    { name: "Live Chat Settings", link: "/manage", icon: RiMessage2Line },
    { name: "User Attributes", link: "/manage", icon: TfiList },
    { name: "Canned Message", link: "/manage", icon: IoMdBookmarks },
    { name: "Agents", link: "/manage", icon: FiUsers },
    { name: "Tags", link: "/manage", icon: FiTag },
    { name: "Analytics", link: "/manage", icon: IoAnalytics },
    { name: "API Key", link: "/manage", icon: MdOutlineVpnKey },
    { name: "Billing & Usage", link: "/manage", icon: RiBillFill },
    {
      name: "Notification Preferences",
      link: "/manage",
      icon: IoIosNotificationsOutline,
    },
  ];

  return (
    <div
      className={`bg-[#ffffff] min-h-screen px-[2rem] py-[2rem] ${
        open
          ? `w-[20%] max-xl:w-[35%] max-md:min-w-[35%] z-[1200]`
          : "w-32 z-[1200]"
      } duration-300 text-[black] px-4`}
    >
      <div
        className={`${
          !open && "gap-[1px]"
        } py-3 flex flex-col gap-[2rem] justify-start fixed max-md:justify-center`}
      >
        <CiMenuKebab
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <p
          className={`${
            !open && "hidden"
          } text-[2rem] font-medium max-sm:text-[1.8rem]`}
        >
          Manage
        </p>
      </div>
      <div className="mt-[12rem] flex flex-col gap-[2rem] fixed justify-start items-start">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            onClick={handleOnClick(menu?.link)}
            className={` ${
              menu?.margin && "mt-[2rem]"
            } group flex items-center justify-start gap-3.5 font-normal tracking-[0px] p-0 hover:bg-[#f4f4f5] w-[100%] rounded-md capitalize text-[1.8rem] max-md:text-[1.5rem] max-md:flex-col max-md:justify-start max-md:items-start`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
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

export default ManageSidebar;
