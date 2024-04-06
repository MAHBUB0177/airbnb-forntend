"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CommonButton from "../common/cummonbutton";
import { SketchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Bookingcard = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [guestList, setguestList] = useState({
    adult: 1,
    child: 0,
    infants: 0,
    pets: 0,
  });

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      let data = localStorage.getItem("token");
      if (typeof data === "string") {
        try {
          setTokendata(JSON.parse(data));
        } catch (error) {
          console.error("Error parsing tokenData:", error);
        }
      }
    }
  }, []);
  const handelClick = () => {
    localStorage.setItem('guests',JSON.stringify(guestList))
    {
      tokenData?.token ? router.push("/confirm") : router.push("/orders");
    }
  };
  return (
    <div className="w-full top-20 sticky">
      <div className="relative bg-primary shadow-xl h-auto border-[1px] border-slate-300 rounded-xl   pb-5 ">
        
        <div>
          <div className=" pt-4 px-5  flex gap-2">
            {" "}
            <p className="text-xl font-medium">$418 </p>
            <span className="font-norml pt-1">night</span>
          </div>

          <div className="border-[1px] border-slate-400 rounded-md mt-4 mx-5 ">
            <div className="flex w-full ">
              <div className="border-r-[1px] border-slate-400 w-1/2 p-[6px] text-xs ">
                <p className="font-medium">CHECK-IN</p>
                <p>3/17/24</p>
              </div>

              <div className=" w-1/2  p-[6px] text-xs">
                <p className="font-medium">CHECKOUT</p>
                <p>3/17/24</p>
              </div>
            </div>

            <div
              className="cursor-pointer p-[6px] border-t-[1px] border-slate-400 flex justify-between text-sm"
              onClick={() => setShow(!show)}
            >
              <div>
                <p className="font-medium">Guests</p>
                <p>{`${guestList?.adult + guestList?.child} guests,`} {guestList?.infants>0 &&  ` ${guestList?.infants} infant,`}{guestList?.pets>0 &&  ` ${guestList?.pets} pet`}</p>
              </div>

              <FaChevronDown className="pt-[12px] h-7 w-7" />
            </div>
          </div>

          <div className=" w-full pt-4 flex justify-center items-center">
            <button
              className="bg-secondary w-[90%] h-12 text-white font-semibold hover:none rounded-md"
              type="submit"
              onClick={handelClick}
            >
              Reserve
            </button>
          </div>
        </div>

        <div className="absolute z-50 mt-[-60px]">
          {show && (
            <div className="w-auto bg-white border-2 border-slate-100 rounded-md shadow-md p-2 mx-5 ">
              <p className="text-sm ">
                This place has a maximum of 10 guests, not including infants.
                Pets aren't allowed.
              </p>
              {/* //adults */}
              <div className="flex justify-between py-2 ">
                <div>
                  <p className="leading-normal font-medium">Adults</p>
                  <p className="leading-normal font-normal text-textprimary">
                    Ages 13 or above
                  </p>
                </div>
                <div className="flex justify-between gap-2">
                  <CiCircleMinus
                    className={`text-textprimary cursor-pointer h-[30px] w-[30px] ${
                      guestList.adult === 0 ? "cursor-not-allowed" : ""
                    }`}
                    onClick={() => {
                      if (guestList?.adult > 1) {
                        setguestList({
                          ...guestList,
                          adult: guestList.adult - 1,
                        });
                      }
                    }}
                  />
                  <p>{guestList.adult}</p>
                  <CiCirclePlus
                    className="text-textprimary h-[30px] w-[30px] cursor-pointer"
                    onClick={() =>
                      setguestList({
                        ...guestList,
                        adult: guestList.adult + 1,
                      })
                    }
                  />
                </div>
              </div>
              {/* //child */}
              <div className="flex justify-between py-2 ">
                <div>
                  <p className=" font-medium">Children</p>
                  <p className=" font-normal text-textprimary">Ages 2–12</p>
                </div>
                <div className="flex justify-between gap-2">
                  <CiCircleMinus
                    className={`text-textprimary cursor-pointer h-[30px] w-[30px] ${
                      guestList.child === 0 ? "cursor-not-allowed" : ""
                    }`}
                    onClick={() => {
                      if (guestList?.child > 0) {
                        setguestList({
                          ...guestList,
                          child: guestList.child - 1,
                        });
                      }
                    }}
                  />
                  <p>{guestList.child}</p>
                  <CiCirclePlus
                    className="text-textprimary h-[30px] w-[30px] cursor-pointer"
                    onClick={() =>
                      setguestList({
                        ...guestList,
                        child: guestList.child + 1,
                      })
                    }
                  />
                </div>
              </div>
              {/* //infants */}
              <div className="flex justify-between py-2">
                <div>
                  <p className=" font-medium">Infants</p>
                  <p className=" font-normal text-textprimary">Under 2</p>
                </div>
                <div className="flex justify-between gap-2">
                  <CiCircleMinus
                    className={`text-textprimary cursor-pointer h-[30px] w-[30px] ${
                      guestList.infants === 0 ? "cursor-not-allowed" : ""
                    }`}
                    onClick={() => {
                      if (guestList?.infants > 0) {
                        setguestList({
                          ...guestList,
                          infants: guestList.infants - 1,
                        });
                      }
                    }}
                  />
                  <p>{guestList.infants}</p>
                  <CiCirclePlus
                    className="text-textprimary h-[30px] w-[30px] cursor-pointer"
                    onClick={() =>
                      setguestList({
                        ...guestList,
                        infants: guestList.infants + 1,
                      })
                    }
                  />
                </div>
              </div>
              {/* //pets */}
              <div className="flex justify-between py-2">
                <div>
                  <p className=" font-medium">Pets</p>
                  <p className=" font-medium text-textprimary underline">
                    Bringing a service animal?
                  </p>
                </div>
                <div className="flex justify-between gap-2">
                  <CiCircleMinus
                    className={`text-textprimary cursor-pointer h-[30px] w-[30px] ${
                      guestList.pets === 0 ? "cursor-not-allowed" : ""
                    }`}
                    onClick={() => {
                      if (guestList?.pets > 0) {
                        setguestList({
                          ...guestList,
                          pets: guestList.pets - 1,
                        });
                      }
                    }}
                  />
                  <p>{guestList.pets}</p>
                  <CiCirclePlus
                    className="text-textprimary h-[30px] w-[30px] cursor-pointer"
                    onClick={() =>
                      setguestList({
                        ...guestList,
                        pets: guestList.pets + 1,
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <p
                  className=" bg-slate-200 rounded-md w-[60px] p-1 flex justify-center cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {" "}
                  close
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-[1px] border-slate-400 flex justify-center items-center mt-5 rounded-md p-4 gap-2">
        <SketchOutlined
          className="h-[30px] w-[30px]  text-secondary"
          style={{ fontSize: "200%" }}
        />
        <div>
          <p className="font-medium ">This is a rare find</p>
          <p className="text-sm text-textprimary">
            Manfred's place is usually fully booked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookingcard;
