// import React from 'react'
import shopify_img from "/Images/shopify.png";
import woo_img from "/Images/woo.png";

import IntegrationNav from "../Integrations/IntegrationNav";
import Sidebar from "../Sidebar/Sidebar";
import EcommSidebar from "./EcommSideBar";
import { Link } from "react-router-dom";
import Handlers from "../../Store/Handlers";

const Ecomm = () => {
  // Reload
  const { handleOnClick } = Handlers();

  return (
    <>
      <section className="flex">
        <Sidebar />
        <EcommSidebar />
        <div className="flex flex-col w-[100%]">
          <div className="min-h-screen flex flex-col w-[100%]">
            <IntegrationNav />
            <div className="px-[4rem] py-[4rem] bg-[#eaeaea] min-h-screen w-[100%] max-md:px-[1rem] max-md:py-[1rem]">
              <div className="flex gap-[2rem] justify-start items-start max-md:flex-col w-[100%]">
                <div className="flex flex-col gap-[1rem] justify-start items-start bg-[white] rounded-xl px-[2rem] py-[2rem] w-[40%] max-md:w-[100%]">
                  <img src={shopify_img} alt="img" className="w-[15%]" />
                  <p className="text-[2rem] font-medium">Shopify</p>
                  <p className="font-normal text-[1.6rem]">Status</p>
                  <p className="font-normal text-[2rem] text-[grey]">
                    Not Connected
                  </p>
                  <p className="text-[1.6rem] font-normal">
                    Provide live chat support to your customers & boost cart
                    recovery
                  </p>
                  <Link
                    to={"/ecomm"}
                    onClick={handleOnClick("/ecomm")}
                    className="bg-[#244e55] hover:bg-[#1e3e44] text-[1.8rem] text-[white] font-normal px-[2rem] py-[1rem] rounded-xl leading-[0] tracking-[0] w-[100%] text-center mt-[1rem]"
                  >
                    Store Setup&nbsp;{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="flex flex-col gap-[1rem] justify-start items-start bg-[white] rounded-xl px-[2rem] py-[2rem] w-[40%] max-md:w-[100%]">
                  <img src={woo_img} alt="img" className="w-[15%]" />
                  <p className="text-[2rem] font-medium">WooCommerce</p>
                  <p className="font-normal text-[1.6rem]">Status</p>
                  <p className="font-normal text-[2rem] text-[grey]">
                    Not Connected
                  </p>
                  <p className="text-[1.6rem] font-normal">
                    Boost your cart recovery & reengage with your customers to
                    upsell
                  </p>
                  <Link
                    to={"/ecomm"}
                    onClick={handleOnClick("/ecomm")}
                    className="bg-[#244e55] hover:bg-[#1e3e44] text-[1.8rem] text-[white] font-normal px-[2rem] py-[1rem] rounded-xl leading-[0] tracking-[0] w-[100%] text-center mt-[1rem]"
                  >
                    Store Setup&nbsp;{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ecomm;
