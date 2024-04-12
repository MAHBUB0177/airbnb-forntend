import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import TabList from "./tabList";
import Explore from "./explore";

const HelpCenter = () => {
  return (
    <div className="">
      <div className="px-4 md:px-10 lg:px-20">
      <div className="flex flex-col justify-center items-center mb-6">
        <p className="text-3xl md:text-4xl font-bold"> Hi, how can we help?</p>
        <div className="border rounded-full p-1 md:p-3 flex justify-between gap-20 mt-3">
          <p className="font-semibold pt-2 px-2">Search how-tos and more</p>
          <div className="flex justify-between gap-1 bg-secondary rounded-full py-2 px-2  text-primary">
            <IoSearchOutline
              style={{ fontWeight: "bold", height: "20px", width: "20px" }}
            />
          </div>
        </div>
      </div>

      <div className=" px-2 lg:px-20 ">
        <TabList />
      </div>
      

      </div>
      <div className="bg-[#000000] px-4 md:px-0">
      <Explore/>
      </div>
    </div>
  );
};

export default HelpCenter;