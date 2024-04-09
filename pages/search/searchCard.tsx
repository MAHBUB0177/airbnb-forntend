// "use client";
import { DatePicker, Form, Space, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import AutoComplete from "@/components/common/AutoComplete";
import GuestCount from "@/components/common/guestCount";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setPaylodData, setSearchData } from "@/redux/reducer/authReducer";
import { RootState } from "@/redux/store";

interface SearchCardProps {
  change: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
  selectRef: React.MutableRefObject<HTMLDivElement | null>;
}
const SearchCard = ({ change, setChange, selectRef }: SearchCardProps) => {
  const searchData = useSelector((state: RootState) => state.auth?.searchData);
  const router = useRouter();
  const divRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLDivElement | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>("1");

  // const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  // const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");

  console.log(checkInDate, checkOutDate, "++++++++++++++++");


  const dispatch = useDispatch();
  const [guestList, setguestList] = useState({
    adult: 0,
    child: 0,
    infants: 0,
    pets: 0,
  });
  useEffect(()=>{
    setguestList(searchData)
  },[searchData])

  const selectChange = (value: string) => {
    setDestination(value);
  };

  const onChangeCheckIn = (date: any, dateString: string) => {
    console.log("Check-in Date:", dateString);
    setCheckInDate(dateString);
  };

  const onChangeCheckOut = (date: any, dateString: string) => {
    console.log("Check-out Date:", dateString);
    setCheckOutDate(dateString);
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

  const handelSearch = async () => {
    let payload = {
      // adult: guestList?.adult,
      // child: guestList?.child,
      // infants: guestList?.infants,
      // pets: guestList?.pets,
      guestList:guestList,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      destination: destination,
    };

    if (guestList?.adult <= 0) {
      return message.error("Please select passengers");
    } else if (!checkInDate) {
      return message.error("Please select check-in Date");
    } else if (!checkOutDate) {
      return message.error("Please select check-out Date");
    } else if (!destination) {
      return message.error("Please select destination");
    } else {
      setChange(false);
      dispatch(setSearchData(guestList))
      dispatch(setPaylodData(payload))

      router.push("/rooms");
    }
  };

  return (
    <div>
      <div
        className={`bg-primary flex justify-between items-center gap-1 border-[1px] border-slate-200  rounded-full px-2  cursor-pointer divide-x divide-slate-300 w-full hover:shadow-lg ${
          change ? "w-[500px] xl:w-[620px] p-1" : "py-2"
        }`}
      >
        <div
          className={` font-medium px-2  ${change && "w-auto"}`}
          onClick={() => setChange(true)}
        >
          <p
            className={`${change ? "text-xs" : "text-sm"} px-3  leading-0 py-0`}
          >
            {change ? "Where" : "Anywhere"}{" "}
          </p>
          {change && (
            <AutoComplete
              selectChange={selectChange}
              selectRef={selectRef}
              destination={destination}
            />
          )}
        </div>

        <div
          className={`font-medium px-1 ${change && "w-auto"}`}
          onClick={() => {
            setChange(true);
          }}
        >
          <p className={`${change ? "text-xs" : "text-sm"}`}>
            {change ? "check in" : "Any Week"}{" "}
          </p>
          {change && (
            <DatePicker
              className="px-0"
              onChange={onChangeCheckIn}
              bordered={false}
              placeholder="add dates"
              suffixIcon={null}
            />
          )}
        </div>

        <div
          onClick={() => setChange(true)}
          className={`font-medium px-1 ${change ? " block w-auto" : "hidden"}`}
        >
          <p className={`${change ? "text-xs" : "text-sm"}`}>check out </p>
          <DatePicker
            className="px-0"
            onChange={onChangeCheckOut}
            bordered={false}
            placeholder="add dates"
            suffixIcon={null}
          />
        </div>

        <div
          className={`flex justify-between items-center gap-1 px-1 ${
            change && "w-[200px]"
          } `}
        >
          <div
            ref={divRef}
            onClick={() => {
              setToggle(!toggle);
              setChange(true);
            }}
          >
            {change && (
              <p className={`text-xs leading-0 px-1 py-0 font-medium`}>Who</p>
            )}
            <p className={`text-textprimary  text-sm `}>
              {guestList?.adult > 0 ? (
                <p className="font-medium">
                  {`${guestList?.adult + guestList?.child} guests,`}{" "}
                  {guestList?.infants > 0 && `${guestList?.infants} in..`}
                </p>
              ) : (
                "add guests"
              )}
            </p>
          </div>

          <div
            className="flex justify-between gap-1 bg-secondary rounded-full py-2 px-2  text-primary"
            onClick={() => handelSearch()}
          >
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
          <GuestCount
            setguestList={setguestList}
            guestList={guestList}
            width="auto"
          />
        </div>
      )}
    </div>
  );
};

export default SearchCard;
