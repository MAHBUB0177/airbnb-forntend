'use client'

import React from "react";
import { GoChevronLeft } from "react-icons/go";
import Login from "./login";
import Reviewcard from "./reviewcard";
interface Token {
  accessToken: string;
  // Add other fields if any
}


const OrderPage = () => {



//   const value = localStorage.getItem("token")
//   let tokenData

// if (typeof value === 'string') {
//      tokenData = JSON.parse(value) // ok

// }




  return (
    <div className="pt-10">
      <div className="flex justify-start gap-0">
        <p className="hover:bg-[#F7F7F7] hover:rounded-full p-3">
          <GoChevronLeft className="h-[25px] w-[25px]" />
        </p>
        <p className="text-3xl font-semibold">Confirm and pay</p>
      </div>

      <div className="flex flex-col-reverse  md:flex-row justify-between gap-5 w-full">
        <div className="px-5 md:px-[60px] pt-4 w-full md:w-[50%] ">
          <p className="text-2xl font-semibold ">Your trip</p>
          <div className="flex justify-between pt-4">
            <div>
              <p className="font-medium ">Dates</p>
              <p className="font-normal text-textprimary text-sm pt-1">
                Apr 1-6
              </p>
            </div>

            <div className="font-medium underline cursor-pointer">Edit</div>
          </div>

          <div className="flex justify-between pt-5 ">
            <div>
              <p className="font-medium ">Guests</p>
              <p className="font-normal text-textprimary text-sm pt-1">
                1 guest
              </p>
            </div>

            <div className="font-medium underline cursor-pointer">Edit</div>
          </div>

          <div className="pt-8 border-b-[1px] border-slate-300"></div>
          <Login/>
        </div>

        <div className=" px-5 md:px-[60px] pt-4 w-full md:w-[50%]">
          <Reviewcard/>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
