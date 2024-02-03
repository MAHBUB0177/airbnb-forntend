"use client";
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FiMinusCircle } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

const SearchCard = () => {
  const [large, setlarge] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [guestList, setguestList] = useState({
    adult: 1,
    child: 0,
    infants: 0,
    pets: 0,
  });
  return (
    <div>
      <div
        className="bg-primary flex justify-between items-center gap-2 border-[1px] border-slate-200  rounded-full px-3 py-2 cursor-pointer divide-x divide-slate-300 w-auto hover:shadow-lg "
        onClick={() => setlarge((prevlarge) => !prevlarge)}
      >
        <div className=" font-medium px-2 ">AnyWhere </div>
        <div className="font-medium px-2 ">
          {" "}
          {large ? "check in" : "Any Week"}
        </div>
        <div className={`font-medium px-2 ${large ? "block" : "hidden"}`}>
          check out
        </div>
        <div
          className="flex justify-between gap-2 px-2 "
          onClick={() => setToggle((prevtoggle) => !prevtoggle)}
        >
          <p className={`text-textprimary  ${large ? "pt-2" : "pt-1"}`}>
            add guests
          </p>
          <div className="flex justify-between gap-1 bg-secondary rounded-full py-2 px-2  text-primary">
            <IoSearchOutline
              style={{ fontWeight: "bold", height: "20px", width: "20px" }}
            />
            <p className={`font-medium  ${large ? "block" : "hidden"}`}>
              Search
            </p>
          </div>
        </div>
      </div>

      {toggle && (
        <div
          className="bg-primary border-[1px] border-slate-200 shadow-md rounded-lg h-auto w-[40%] md:w-[25%] lg:w-[25%] fixed right-50 top-20 px-4 py-5 gap-3"
          style={{ zIndex: 1000 }}
        >
          {/* //adults */}
          <div className="flex justify-between py-2">
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
                  if (guestList?.adult > 0) {
                    setguestList({
                      ...guestList,
                      adult: guestList.adult - 1,
                    });
                  }
                }}
              />
              <p>{guestList.adult}</p>
              <CiCirclePlus
                className="text-textprimary h-[30px] w-[30px]"
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
          <div className="flex justify-between py-2">
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
                className="text-textprimary h-[30px] w-[30px]"
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
                className="text-textprimary h-[30px] w-[30px]"
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
              <p className=" font-normal text-textprimary underline">
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
                className="text-textprimary h-[30px] w-[30px]"
                onClick={() =>
                  setguestList({
                    ...guestList,
                    pets: guestList.pets + 1,
                  })
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCard;
