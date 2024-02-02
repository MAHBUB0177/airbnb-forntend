"use client";
import React, { useState } from "react";
import airbnb_logo from "../../assets/images/logo/airbnb-logo.png";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const MenuList = [
  { path: "", title: "Log In" },
  { path: "", title: "Sign Up" },
  { path: "", title: "Gift Card" },
  { path: "", title: "Airbnb Your Home" },
  { path: "", title: "Hepl Center" },
];

const Header = () => {
  const [isShow, setIsshow] = useState(false);
  console.log(isShow, "isShow+++++++++++");

  return (
    <>
      <div className=" bg-primary h-[10%] top-0 w-[100%] fixed  border-b-[1px]  border-slate-200 flex flex-row justify-between items-center px-2 md:px-10 lg:px-20 md:py-10">
        <div className="flex gap-1">
          <Image src={airbnb_logo} alt="airbnb_logo" width={30} height={20} />
          <p className="hidden lg:block text-secondary text-2xl font-bold ">airbnb</p>
        </div>

        <div className="bg-primary flex justify-between items-center gap-2 border-[1px] border-slate-200  rounded-full px-3 py-3 cursor-pointer divide-x divide-slate-300 w-auto">
            <div className=" font-medium px-2">AnyWhere </div>
            <div  className=" font-medium px-2">check in</div>
            <div  className=" font-medium px-2">check out</div>
            <div  className=" text-gray-600 px-2"> add guests</div>
            {/* hello my name is mahbul alam i am a student i want to studu in cse */}

        </div>

        <div className="flex flex-row gap-2">
          <p className="hidden md:block pt-3 font-medium ">airbnb your home </p>
          <div
            className="flex gap-2 border-[1px] border-slate-200  rounded-full p-2 cursor-pointer"
            onClick={() => setIsshow((prevshow) => !prevshow)}
          >
            <IoMenuSharp
              style={{ height: "25px", width: "25px", paddingTop: "5px" }}
            />
            <FaUserCircle
              style={{ height: "30px", width: "30px", color: "gray" }}
            />
          </div>
        </div>
      </div>

      {isShow && (
  <div
    className="bg-primary shadow-md rounded-md h-auto w-[40%] md:w-[25%] lg:w-[15%] fixed right-20 top-20 px-4 "
    style={{ zIndex: 1000 }} 
  >
    {MenuList.map((item, i) => (
      <p key={i} className={`py-2 ${item?.title === 'Sign Up' ? 'border-b-[1px] border-slate-400' : ""}`}>{item.title}</p>
    ))}
  </div>
)}
    </>
  );
};
export default Header;
