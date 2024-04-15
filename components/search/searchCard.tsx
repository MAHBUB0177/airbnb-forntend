"use client";
import { DatePicker, notification } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import AutoComplete from "@/components/common/AutoComplete";
import GuestCount from "@/components/common/guestCount";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setPaylodData, setSearchData } from "@/redux/reducer/authReducer";
import { RootState } from "@/redux/store";
import moment from "moment";
import { Dayjs } from "dayjs"; // Import Dayjs instead of Moment

interface SearchCardProps {
  change: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
  selectRef: React.MutableRefObject<HTMLDivElement | null>;
}
const SearchCard = ({ change, setChange, selectRef }: SearchCardProps) => {
  //store data
  const searchData = useSelector((state: RootState) => state.auth?.searchData);

  const router = useRouter();
  const divRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLDivElement | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>("1");

  //date states
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");

  const dispatch = useDispatch();
  const [dates, setDates] = useState({
    checkInDate: "",
    checkOutDate: "",
  });
  const [guestList, setguestList] = useState({
    adult: 0,
    child: 0,
    infants: 0,
    pets: 0,
  });
  useEffect(() => {
    setguestList(searchData);
  }, [searchData]);

  const selectChange = (value: string) => {
    setDestination(value);
  };

  const onChangeCheckIn = (date: Dayjs | null, dateString: string) => {
    setDates({
      ...dates,
      checkInDate: dateString,
    });
  };

  const onChangeCheckOut = (date: Dayjs | null, dateString: string) => {
    setDates({
      ...dates,
      checkOutDate: dateString,
    });
  };
  function disabledDateCheckIn(current: Dayjs | null) {
    const today = moment().startOf("day");
    if (!dates.checkOutDate) {
      // No checkOutDate selected yet, disable all past dates
      return current ? current < today : false;
    } else {
      // Disable dates after the checkOutDate and before today
      return current
        ? current > moment(dates.checkOutDate).startOf("day") || current < today
        : false;
    }
  }

  function disabledDateCheckOut(current: Dayjs | null) {
    const today = moment().startOf("day");
    // Disable dates before the checkInDate and before today
    return current
      ? current < moment(dates.checkInDate).startOf("day") || current < today
      : false;
  }

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
      guestList: guestList,
      checkIn: dates?.checkInDate,
      checkOut: dates?.checkOutDate,
      destination: destination,
    };

    if (!destination) {
      return notification.error({
        message: "Please select destination",
        placement: "bottomRight", // Set the placement to bottomLeft
      });
    } else if (!dates?.checkInDate) {
      return notification.error({
        message: "Please select check-in Date",
        placement: "bottomRight", // Set the placement to bottomLeft
      });
    } else if (!dates?.checkOutDate) {
      return notification.error({
        message: "Please select check-out Date",
        placement: "bottomRight", // Set the placement to bottomLeft
      });
    } else if (guestList?.adult <= 0) {
      return notification.error({
        message: "Please select passengers",
        placement: "bottomRight", // Set the placement to bottomLeft
      });
    } else {
      setChange(false);
      dispatch(setSearchData(guestList));
      dispatch(setPaylodData(payload));

      router.push("/filterRoom");
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
              disabledDate={disabledDateCheckIn}
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
            disabledDate={disabledDateCheckOut}
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
          className="bg-primary z-50 border-[1px] border-slate-200 shadow-md rounded-lg h-auto w-[50%] md:w-[35%] lg:w-[35%] xl:w-[25%] fixed  right-80 top-20 px-4 py-5 gap-3 divide-y divide-slate-200"
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
