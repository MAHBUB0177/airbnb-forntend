"use client";
import React, { useEffect, useRef, useState } from "react";
import airbnb_logo from "../../assets/images/logo/airbnb-logo.png";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { IoMenuSharp, IoSearchOutline } from "react-icons/io5";
import SearchCard from "@/pages/search/searchCard";

const MenuList = [
  { path: "", title: "Log In" },
  { path: "", title: "Sign Up" },
  { path: "", title: "Gift Card" },
  { path: "", title: "Airbnb Your Home" },
  { path: "", title: "Hepl Center" },
];

const Header = () => {
  const [isShow, setIsshow] = useState(false);
  const [change, setChange] = useState<boolean>(false);
  console.log(change, "change");
  const divRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (divRef.current && !(divRef.current as any).contains(event.target)) {
        setIsshow(false);
      }
      if (cardRef.current && !(cardRef.current as any).contains(event.target)) {
        setChange(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [setChange, setIsshow, divRef, cardRef]);
  

  return (
    <>
      <div className="bg-primary  top-0 w-[100%] fixed shadow-sm ">
        <div
          className={`h-10%] border-b-[1px]  border-slate-200 flex flex-row justify-between items-center md:px-10 lg:px-20 md:py-2 `}
        >
          <div className="flex gap-1">
            <Image src={airbnb_logo} alt="airbnb_logo" width={30} height={20} />
            <p className="hidden lg:block text-secondary text-2xl font-bold ">
              airbnb
            </p>
          </div>
          <div ref={cardRef}>
            <SearchCard setChange={setChange} change={change} />
          </div>
          <div className="flex flex-row gap-2">
            <p className="hidden lg:block pt-3 font-medium ">
              Airbnb your home{" "}
            </p>
            <div
              ref={divRef}
              className="flex gap-2 border-[1px] border-slate-200  rounded-full p-2 cursor-pointer hover:shadow-lg"
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

        <div
          className={` flex flex-row justify-between items-center md:px-10 lg:px-20 md:py-5  `}
        >
          <p>welcome</p>
          <p>welcome</p>
          <p>welcome</p>
        </div>
      </div>

      {isShow && (
        <div
          className="bg-primary shadow-md rounded-md h-auto w-[40%] md:w-[25%] lg:w-[15%] fixed right-20 top-20 px-4 "
          style={{ zIndex: 1000 }}
        >
          {MenuList.map((item, i) => (
            <p
              key={i}
              className={`py-2 ${
                item?.title === "Sign Up"
                  ? "border-b-[1px] border-slate-400"
                  : ""
              }`}
            >
              {item.title}
            </p>
          ))}
        </div>
      )}
    </>
  );
};
export default Header;
