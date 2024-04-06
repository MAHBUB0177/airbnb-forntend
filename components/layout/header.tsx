"use client";
import React, { useEffect, useRef, useState } from "react";
import airbnb_logo from "../../assets/images/logo/airbnb-logo.png";
import Image from "next/image";
import { FaApple, FaUserCircle } from "react-icons/fa";
import { IoMenuSharp, IoSearchOutline } from "react-icons/io5";
import SearchCard from "@/pages/search/searchCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CommonModal from "../common/commonmodal";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import CommonButton from "../common/cummonbutton";
import { message } from "antd";
import axios from "axios";

const BeforeMenuList = [
  { path: "", title: "Log In" },
  { path: "", title: "Sign Up" },
  { path: "/giftcard", title: "Gift Card" },
  { path: "/airbnbhome", title: "Airbnb Your Home" },
  { path: "", title: "Hepl Center" },
];

const AfterMenuList = [
 
  { path: "/giftcard", title: "Gift Card" },
  { path: "/airbnbhome", title: "Airbnb Your Home" },
  { path: "", title: "Hepl Center" },
  { path: "", title: "Logout" },
];

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

  interface TokenData {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
  }
  const [tokenData, setTokendata] = useState<TokenData | null>(null);
  const [active, setActive] = useState(false);
  let isLoggedIn 
  if (typeof window !== 'undefined' ) {
 isLoggedIn = localStorage.getItem("status");
  }


 
  useEffect(() => {
    let value;
    if (typeof window !== "undefined") {
      value = localStorage.getItem("token");
    }
    if (typeof value === "string") {
      try {
        setTokendata(JSON.parse(value));
      } catch (error) {
        console.error("Error parsing tokenData:", error);
      }
    }
  }, [active,isLoggedIn]);


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

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(false))
  }, []);

  const handleItemClick = (title: string) => {
    if (title === "Sign Up" || title === "Log In") {
      setIsModalOpen(true);
    } else if (title === "Logout") {
      localStorage.setItem("token", JSON.stringify({}));
      setActive(false);
      localStorage.setItem("status", JSON.stringify(false))
    } else {
      setIsModalOpen(false);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginNow = async () => {
    let payload = {
      username: email, //kminchelle
      password: password, //0lelplR
    };
    if (email === "" || password === "") {
      return message.error("User Name Or Password Missing");
    }
    await axios
      .post("https://dummyjson.com/auth/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response?.data) {
          message.success("User Successfully Logged In");
          setIsModalOpen(false);
          setActive(true);
          localStorage.setItem("token", JSON.stringify(response?.data));
          localStorage.setItem("status", JSON.stringify(true))
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        message.error("Something Went Wrong");
      });
  };

  return (
    <>
      {/* dark:bg-orange-300 */}
      <div className="bg-primary  w-full z-50 fixed shadow-sm ">
        <div
          className={`border-b-[1px]  border-slate-200 flex flex-row justify-between items-center md:px-10  md:py-2  ${
            pathname == "/rooms" ? " xl:px-[185px]" : " lg:px-20"
          }`}
        >
          <Link href={"/"}>
            <div className="flex gap-1">
              <Image
                src={airbnb_logo}
                alt="airbnb_logo"
                width={30}
                height={20}
              />
              <p className="hidden lg:block text-secondary text-2xl font-bold ">
                airbnb
              </p>
            </div>
          </Link>

          <div ref={cardRef}>
            <SearchCard
              setChange={setChange}
              change={change}
              selectRef={selectRef}
            />
          </div>

          <div className="flex flex-row gap-2">
            <p className="hidden lg:block pt-3 font-medium ">
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
              {tokenData?.token ? (
                <>
                  <p className="flex justify-center items-center text-normal h-[30px] w-[30px] font-semibold rounded-full bg-black text-white">
                    {tokenData?.firstName?.charAt(0)}
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

      {isShow && (
        <div
          className="bg-primary shadow-md rounded-md h-auto w-[40%] md:w-[25%] lg:w-[15%] fixed right-20 top-20 px-4 border-[1px] border-slate-200"
          style={{ zIndex: 1000 }}
        >
          

          {
             tokenData?.token ? <>
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
          <div className=" border-t-[1px] border-slate-300"></div>
          <p className="text-2xl font-semibold pt-1 pb-1">Welcome to Airbnb</p>
          <div>
            <div className=" mt-2  border border-slate-300 w-100% rounded-md ">
              <div className="bg-white rounded-lg p-2 ">
                <form className="">
                  <div>
                    <label className="block text-textprimary font-bold mb-2">
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-300"
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-textprimary font-bold mb-2">
                      Password
                    </label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-300"
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>

            <p className="text-xs text-textprimary pt-1 ">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
              <span className="font-semibold  underline">
                Privacy Policy{" "}
              </span>{" "}
            </p>

            <div className="mt-3">
              <CommonButton
                bg={"secondary"}
                width={"full"}
                height={"12"}
                onClick={LoginNow}
                type={"submit"}
              >
                Continue
              </CommonButton>
            </div>

            <div className="relative w-full mt-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white">Or continue with</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-full  p-3 mt-2">
                <p className="text-md font-semibold text-sky-500">
                  <FaSquareFacebook className="h-[20px] w-[20px]" />
                </p>
              </div>

              <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-full  p-3 mt-2">
                <p className="text-md font-semibold">
                  <FcGoogle className="h-[20px] w-[20px]" />
                </p>
              </div>

              <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-full p-3 mt-2">
                <p className="text-md font-semibold">
                  <FaApple className="h-[20px] w-[20px]" />
                </p>
              </div>
            </div>
            <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-[100%] mt-3 p-3 ">
              <p className="text-sm font-semibold flex gap-2">
                {" "}
                <MdOutlineMail className="h-[20px] w-[20px] " />
                Continue with email
              </p>
            </div>
          </div>
        </CommonModal>
      </div>
    </>
  );
};
export default Header;
