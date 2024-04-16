"use client";
import React, { useEffect, useRef, useState } from "react";
import airbnb_logo from "../../assets/images/logo/airbnb-logo.png";
import Image from "next/image";
import {FaUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CommonModal from "../common/commonmodal";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setPaylodData, setSearchData } from "@/redux/reducer/authReducer";
import { RootState } from "@/redux/store";
import SearchCard from "../search/searchCard";
import CommonLogin from "../login/page";
import SmallDeviceHeader from "./smallDeviceHeader";

const BeforeMenuList = [
  { path: "", title: "Log In" },
  { path: "", title: "Sign Up" },
  { path: "/giftcard", title: "Gift Card" },
  { path: "/airbnbhome", title: "Airbnb Your Home" },
  { path: "/helpCenter", title: "Hepl Center" },
];

const AfterMenuList = [
 
  { path: "/giftcard", title: "Gift Card" },
  { path: "/airbnbhome", title: "Airbnb Your Home" },
  { path: "/helpCenter", title: "Hepl Center" },
  { path: "", title: "Logout" },
];

interface AuthDataType {
  token: string; // Assuming token is a string
  firstName:string;
  // Add other properties as needed
}

const Header = () => {
  const pathname = usePathname();
  const [isShow, setIsshow] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const [change, setChange] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  //modal open part
  const [isModalOpen, setIsModalOpen] = useState(false);
  const _handleCancel = () => {
    setIsModalOpen(false);
  };

  // // set auth data
  const dispatch = useDispatch();
  const authData = useSelector((state: RootState) => state.auth?.authData) as AuthDataType;




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
  }, [divRef]);

  const [status, setStaus] = useState<boolean>(false);
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
  };

  

  const handleItemClick = (title: string) => {
    if (title === "Sign Up" || title === "Log In") {
      setIsModalOpen(true);
    } else if (title === "Logout") {
      handelLogout()
      
    } else {
      setIsModalOpen(false);
    }
  };

  const router = useRouter();

  const handelLogout=()=>{
    console.log('call lagout function')
    dispatch(setAuth({}));
    dispatch(setSearchData({
      adult: 0,
      child: 0,
      infants: 0,
      pets: 0,
    }));
    dispatch(setPaylodData({}));
    window.location.href = '/';
   
   
  }
  
  const handelClick=()=>{
      dispatch(setSearchData({
        adult: 0,
        child: 0,
        infants: 0,
        pets: 0,
      }));
    dispatch(setPaylodData({}));
    router.push('/')
  
  }

  return (
    <>
      {/* dark:bg-orange-300 */}
      <div className="bg-primary  w-full z-50 fixed shadow-sm ">
        <div className="block md:hidden">
          <SmallDeviceHeader/>
        </div>

        <div className="hidden md:block">
        <div
          className={`border-b-[1px]  border-slate-200 flex flex-row justify-between items-center md:px-2  md:py-2  ${
            pathname == "/rooms" ? " xl:px-[185px]" : " xl:px-20"
          }`}
        >
            <div className="flex gap-1 cursor-pointer" onClick={handelClick}>
              <Image
                src={airbnb_logo}
                alt="airbnb_logo"
                width={30}
                height={20}
              />
              <p className="hidden xl:block text-secondary text-2xl font-bold ">
                airbnb
              </p>
            </div>
          

     {  pathname === '/confirm'  || pathname === '/book'  ? "":  <div ref={cardRef}>
            <SearchCard
              setChange={setChange}
              change={change}
              selectRef={selectRef}
            />
          </div>}

          <div className="flex flex-row gap-2">
            <p className="hidden xl:block pt-3 font-medium ">
              Airbnb your home{" "}
            </p>
            <div
              ref={divRef}
              className="flex gap-2 border-[1px] border-slate-200  rounded-full p-2 cursor-pointer hover:shadow-lg"
              onClick={() => {
                setIsshow(true);
                toggleMode();
                setStaus(!status);
              }}
            >
              <IoMenuSharp
                style={{ height: "25px", width: "25px", paddingTop: "5px" }}
              />
              {authData?.token ? (
                <>
                  <p className="flex justify-center items-center text-normal h-[30px] w-[30px] font-semibold rounded-full bg-black text-white">
                    {authData?.firstName?.charAt(0)}
                  </p>{" "}
                </>
              ) : (
                <FaUserCircle
                  style={{ height: "30px", width: "30px", color: "gray" }}
                />
              )}
            </div>
          </div>
        </div>
        </div>
      </div>

      {isShow && (
        <div
          className="bg-primary shadow-md rounded-md h-auto w-[40%] md:w-[25%] lg:w-[15%] fixed right-20 top-20 px-4 border-[1px] border-slate-200"
          style={{ zIndex: 1000 }}
        >
          

          {
             authData?.token ? <>
                  {AfterMenuList.map((item, i) => (
            <Link href={item?.path} key={i}>
              <p
                key={i}
                className={`py-2 cursor-pointer ${
                  item?.title === "Sign Up"
                    ? "border-b-[1px] border-slate-400"
                    : ""
                }`}
                onClick={() => handleItemClick(item.title)}
              >
                {item?.title}
              </p>
            </Link>
          ))}
             </> : <>
             {BeforeMenuList.map((item, i) => (
            <Link href={item?.path} key={i}>
              <p
                key={i}
                className={`py-2 cursor-pointer ${
                  item?.title === "Sign Up"
                    ? "border-b-[1px] border-slate-400"
                    : ""
                }`}
                onClick={() => handleItemClick(item.title)}
              >
                 {item?.title}
              </p>
            </Link>
          ))}
             </>
          }
        </div>
      )}
      <div>
        <CommonModal
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title={`Log in or sign up`}
          onCancel={_handleCancel}
          width={"500px"}
        >
          <CommonLogin setIsModalOpen={setIsModalOpen}/>
         
        </CommonModal>
      </div>
    </>
  );
};
export default Header;
