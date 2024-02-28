// "use client";
import { DatePicker, Form, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FiMinusCircle } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import dayjs from "dayjs";
import AutoComplete from "@/components/common/AutoComplete";
const { RangePicker } = DatePicker;

interface SearchCardProps {
  change: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
  selectRef: React.MutableRefObject<HTMLDivElement | null>;
}
const SearchCard = ({ change, setChange, selectRef }: SearchCardProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLDivElement | null>(null);

  const [toggle, setToggle] = useState<boolean>(false);
  const [isTrue, setisTrue] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>("");
  const [guestList, setguestList] = useState({
    adult: 1,
    child: 0,
    infants: 0,
    pets: 0,
  });

  const selectChange = (value: string) => {
    setDestination(value);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        !(divRef.current as any)?.contains(event.target) &&
        !(countRef.current as any)?.contains(event.target)
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div
        className={`bg-primary flex justify-between items-center gap-2 border-[1px] border-slate-200  rounded-full px-3  cursor-pointer divide-x divide-slate-300 w-full hover:shadow-lg ${
          change ? "w-[600px] xl:w-[620px] py-1" : "py-2"
        }`}
        onClick={() => setChange(true)}
      >
        <div className={` font-medium px-2  ${change && "w-[200px]"}`}>
          <p className="text-sm leading-0 px-3 py-0">
            {change ? "Where" : "Anywhere"}{" "}
          </p>
          {change && (
            <AutoComplete selectChange={selectChange} selectRef={selectRef} />
          )}
        </div>

        <div
          className={`font-medium px-2 ${change && "w-[80px]"}`}
          onClick={() => setisTrue(!isTrue)}
        >
          <p className="text-sm">{change ? "check in" : "Any Week"} </p>
          {isTrue && <RangePicker open={true} />}
        </div>

        <div
          className={`font-medium px-2 ${
            change ? " block w-[70px]" : "hidden"
          }`}
        >
          <p className="text-sm">check out </p>
          {/* {change && <input placeholder="dates " />}  */}
        </div>

        <div
          className={`flex justify-between items-center gap-2 px-2 ${
            change && "w-[200px]"
          } `}
          ref={divRef}
          onClick={() => setToggle(true)}
        >
          <p className={`text-textprimary  text-sm `}>add guests</p>
          <div className="flex justify-between gap-1 bg-secondary rounded-full py-2 px-2  text-primary">
            <IoSearchOutline
              style={{ fontWeight: "bold", height: "20px", width: "20px" }}
            />
            <p className={`font-medium text-sm ${change ? "block" : "hidden"}`}>
              Search
            </p>
          </div>
        </div>
      </div>

      {toggle && (
        <div
          ref={countRef}
          className="bg-primary border-[1px] border-slate-200 shadow-md rounded-lg h-auto w-[50%] md:w-[35%] lg:w-[35%] xl:w-[25%] fixed  right-80 top-20 px-4 py-5 gap-3 divide-y divide-slate-200"
          style={{ zIndex: 1000 }}
        >
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
        </div>
      )}
    </div>
  );
};

export default SearchCard;
