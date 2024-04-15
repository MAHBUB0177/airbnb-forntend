"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CommonButton from "../common/cummonbutton";
import { SketchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import GuestCount from "../common/guestCount";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData } from "@/redux/reducer/authReducer";
import moment from "moment";


// Get the current date
var currentDate = new Date();
var fourDaysLater = new Date();
fourDaysLater.setDate(fourDaysLater.getDate() + 4);


interface PayloadType {
  checkIn: string; // Assuming checkIn is a string representing a date
  checkOut: string; // Assuming checkOut is a string representing a date
  guestList:any
}

// Assuming authData is also an object with a token property
interface AuthDataType {
  token: string; // Assuming token is a string
  // Add other properties as needed
}

// Assuming searchData has similar properties to guestList
interface SearchDataType {
  adult: number;
  child: number;
  infants: number;
  pets: number;
  // Add other properties as needed
}


const Bookingcard = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state: RootState) => state.auth?.searchData) as SearchDataType;
  const payload = useSelector((state: RootState) => state.auth?.payloadData) as PayloadType;
  const authData = useSelector((state: RootState) => state.auth?.authData) as AuthDataType;
  // console.log("searchData+++++++++++", payload);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [guestList, setguestList] = useState({
    adult: 1,
    child: 0,
    infants: 0,
    pets: 0,
  });
  // console.log(guestList,'guestList+++++++++++++++')

  useEffect(() => {
    if (searchData?.adult >= 1) {
      setguestList(searchData);
    }
  }, [searchData]);

  

  const handelClick = () => {
    dispatch(setSearchData(guestList));
    {
      authData?.token ? router.push("/confirm") : router.push("/book");
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
                <p>
                  {payload?.checkIn
                    ? payload?.checkIn
                    : moment(currentDate).format("YYYY-MM-DD")}
                </p>
              </div>

              <div className=" w-1/2  p-[6px] text-xs">
                <p className="font-medium">CHECKOUT</p>
                <p>
                  {payload?.checkOut
                    ? payload?.checkOut
                    : moment(fourDaysLater).format("YYYY-MM-DD")}
                </p>
              </div>
            </div>

            <div
              className="cursor-pointer p-[6px] border-t-[1px] border-slate-400 flex justify-between text-sm"
              onClick={() => setShow(!show)}
            >
              <div>
                <p className="font-medium">Guests</p>
                <p>
                  {" "}
                  {`${guestList?.adult + guestList?.child} guests,`}{" "}
                  {guestList?.infants > 0 && ` ${guestList?.infants} infant,`}
                  {guestList?.pets > 0 && ` ${guestList?.pets} pet`}
                </p>
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
          <div className="px-4">
            <p className="text-sm  pt-4 pb-4 flex justify-center items-center">
              You won't be charged yet
            </p>
            <div className="text-sm  pt-2 flex justify-between ">
              <p>$25.00 x 5 nights</p>
              <p>$125.00</p>
            </div>
            <div className="text-sm   pt-2 flex justify-between ">
              <p className="underline">Cleaning fee</p>
              <p>$5.00</p>
            </div>
            <div className="text-sm   pt-2 flex justify-between ">
              <p className="underline">Airbnb service fee</p>
              <p>$18.35</p>
            </div>

            <div className="mt-5 border-t-[1px]   border-slate-300"></div>
            <div className="text-sm font-medium   pt-2 flex justify-between ">
              <p>Total (USD)</p>
              <p>$148.35</p>
            </div>
          </div>
        </div>

        <div className="absolute z-50 mt-[-180px] ">
          {show && (
            <div className="w-auto bg-white border-2 border-slate-100 rounded-md shadow-md p-2 mx-5 ">
              <GuestCount
                setguestList={setguestList}
                guestList={guestList}
                width="auto"
                setShow={setShow}
              />
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
