"use client";
import React, { useEffect, useRef, useState } from "react";
import airbnb_logo from "../../assets/images/logo/airbnb-logo.png";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { IoMenuSharp, IoSearchOutline } from "react-icons/io5";
import SearchCard from "@/pages/search/searchCard";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuList = [
  { path: "", title: "Log In" },
  { path: "", title: "Sign Up" },
  { path: "", title: "Gift Card" },
  { path: "", title: "Airbnb Your Home" },
  { path: "", title: "Hepl Center" },
];

const Header = () => {
  const pathname = usePathname()
  const [isShow, setIsshow] = useState(false);
  const[darkMode,setDarkMode]= useState<boolean>(false);

  const [change, setChange] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (divRef.current && !(divRef.current as any).contains(event.target)) {
        setIsshow(false);
      }
      // if (!(cardRef?.current as any)?.contains(event.target) && !(selectRef?.current as any)?.contains(event.target)) {
      //   setChange(false);
      // }
      
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ divRef]);

  const[status,setStaus]=useState<boolean>(false);
  const toggleMode = () => {
    if (status) {
        // dispatch(setDarkMode(false));
        // localStorage.setItem('darkMode',darkMode)
        localStorage.setItem("darkMode", JSON.stringify(setDarkMode(false)));
        document.documentElement.classList.remove("dark");
    } else {
        // dispatch(setDarkMode(true));
        localStorage.setItem("darkMode", JSON.stringify(setDarkMode(true)));
        document.documentElement.classList.add("dark");
    }
}

// useEffect(() => {
//   toggleMode(status);
// }, [status]);
  
console.log('header is calling....')

  return (
    <>
      <div className="bg-primary  w-full z-50 fixed shadow-sm dark:bg-orange-300">
        <div
          className={`border-b-[1px]  border-slate-200 flex flex-row justify-between items-center md:px-10  md:py-2  ${pathname =='/rooms'? ' xl:px-[185px]' : ' lg:px-20' }`}
        >
          <Link href={'/'}>
          <div className="flex gap-1">
            <Image src={airbnb_logo} alt="airbnb_logo" width={30} height={20} />
            <p className="hidden lg:block text-secondary text-2xl font-bold ">
              airbnb
            </p>
          </div>
          </Link>
         

          <div ref={cardRef}>
            <SearchCard setChange={setChange} change={change} selectRef={selectRef} />
          </div>
          
          <div className="flex flex-row gap-2">
            <p className="hidden lg:block pt-3 font-medium dark:text-white">
              Airbnb your home{" "}
            </p>
            <div
              ref={divRef}
              className="flex gap-2 border-[1px] border-slate-200  rounded-full p-2 cursor-pointer hover:shadow-lg"
              onClick={() => {setIsshow(true);toggleMode();setStaus(!status)}}
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
        
      </div>

      {isShow && (
        <div 
          className="bg-primary shadow-md rounded-md h-auto w-[40%] md:w-[25%] lg:w-[15%] fixed right-20 top-20 px-4 border-[1px] border-slate-200"
          style={{ zIndex: 1000 }}
        >
          {MenuList.map((item, i) => (
            <p
              key={i}
              className={`py-2 cursor-pointer ${
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
