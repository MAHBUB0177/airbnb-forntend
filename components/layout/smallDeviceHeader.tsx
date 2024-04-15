"use client";
import React, { useEffect, useRef, useState } from "react";
import SearchCard from "../search/searchCard";
import Image from "next/image";
import airbnb_logo from "@/assets/images/logo/airbnb-logo.png";
import { IoFilterSharp, IoSearchOutline, IoShareSocial } from "react-icons/io5";
import CommonModal from "../common/commonmodal";
import CommonLogin from "../login/page";
import AutoComplete from "../common/AutoComplete";
import { DatePicker, notification } from "antd";
import moment from "moment";
import { Dayjs } from "dayjs"; // Import Dayjs instead of Moment
import GuestCount from "../common/guestCount";
import { setPaylodData, setSearchData } from "@/redux/reducer/authReducer";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

const SmallDeviceHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const _handleCancel = () => {
    setIsModalOpen(false);
  };
  const [toggle, setToggle] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>("1");
  const divRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLDivElement | null>(null);

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
      return current ? current < today : false;
    } else {
      return current
        ? current > moment(dates.checkOutDate).startOf("day") || current < today
        : false;
    }
  }

  function disabledDateCheckOut(current: Dayjs | null) {
    const today = moment().startOf("day");
    return current
      ? current < moment(dates.checkInDate).startOf("day") || current < today
      : false;
  }

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
      dispatch(setSearchData(guestList));
      dispatch(setPaylodData(payload));

      router.push("/filterRoom");
      setIsModalOpen(false);
    }
  };
  const pathname = usePathname();

  
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
    <div className="items-center px-2 py-3">
        {
            pathname === '/filterRoom' ||  pathname === '/' ?
             <><div className="w-full flex gap-1 cursor-pointer pl-[5%]">
            <div
              onClick={() => {
                // setIsModalOpen(true);
              }}
              className=" w-5/6 gap-3 flex py-[4px] mb-[4px] rounded-full  justify-start px-4 items-center shadow-md border border-slate-200"
            >
              <IoSearchOutline
                style={{ fontWeight: "bold", height: "18px", width: "18px" }}
              />
              <div className="leading-none">
                <p className="text-md font-semibold">AnyWhere</p>
                <p className="text-sm text-textprimary">Any week. Add guests</p>
              </div>
            </div>
    
            <div className=" w-1/6 ">
              <button className="border border-gray-300 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer p-3">
                <IoFilterSharp
                  style={{ height: "20px", width: "20px", color: "" }}
                  className="text-black-600"
                />
              </button>
            </div>
          </div></> :
          <> <div className="flex justify-between gap-1 cursor-pointer" onClick={handelClick}>
            <div className="flex gap-1">
            <Image
                src={airbnb_logo}
                alt="airbnb_logo"
                width={30}
                height={30}
              />
              <p className=" text-secondary text-2xl font-bold ">
                airbnb
              </p>
            </div>
             
              <div>
                <p className="font-medium flex ">
                {" "}
                <IoShareSocial
                  style={{ paddingTop: "5px", height: "30px", width: "30px" }}
                />
            <span className="text-md pt-1 px-1">
            Share

            </span>
              </p></div>
            </div></>
        }
      

      <CommonModal
        open={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onCancel={_handleCancel}
        width={"500px"}
      >
        <div className="flex flex-col w-[300px] mt-5">
          <div className=" border border-slate-200 rounded-md mb-4 p-2 shadow-md font-medium flex justify-center">
            <AutoComplete
              selectChange={selectChange}
              destination={destination}
            />
          </div>

          <div className=" border border-slate-200 rounded-md mb-4 p-2 shadow-md font-medium flex justify-center centered-datepicker">
            <DatePicker
              disabledDate={disabledDateCheckIn}
              className=" "
              onChange={onChangeCheckIn}
              bordered={false}
              placeholder="add dates"
              suffixIcon={null}
            />
          </div>

          <div className="shadow-md border border-slate-200 rounded-md mb-4 p-2 font-medium flex justify-center centered-datepicker">
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
            ref={divRef}
            className=" border border-slate-200 rounded-md mb-4 p-2 shadow-md font-medium flex justify-center"
            onClick={() => setToggle(!toggle)}
          >
            <p>
              {guestList?.adult > 0 ? (
                <>
                  {`${guestList?.adult + guestList?.child} guests,`}{" "}
                  {guestList?.infants > 0 && ` ${guestList?.infants} infant,`}
                  {guestList?.pets > 0 && ` ${guestList?.pets} pet`}
                </>
              ) : (
                "add Guests"
              )}
            </p>
          </div>

          <div
            className="flex justify-center gap-1 bg-secondary rounded-md p-2 px-2 mt-2  text-primary "
            onClick={() => handelSearch()}
          >
            <IoSearchOutline
              style={{ fontWeight: "bold", height: "20px", width: "20px" }}
            />
            <p className={`font-medium text-sm `}>Search</p>
          </div>
        </div>

        {toggle && (
          <div
            ref={countRef}
            className="bg-primary  mt-[2px] z-50 border-[1px] border-slate-200 shadow-md rounded-lg h-auto    px-4 py-5 gap-3 divide-y divide-slate-200"
            style={{ zIndex: 1000 }}
          >
            <GuestCount
              setguestList={setguestList}
              guestList={guestList}
              width="auto"
            />
          </div>
        )}
      </CommonModal>
    </div>
  );
};

export default SmallDeviceHeader;
