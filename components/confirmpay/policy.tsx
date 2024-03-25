'use client'
import { message } from "antd";
import { useRouter } from "next/navigation";
import React  from "react";
import { LuFileClock } from "react-icons/lu";

const Policy = () => {
    const router=useRouter()

    const handelClick=()=>{
        message.success('Successfully booking')
        router.push('/')

    }
  return (
    <div className="pt-4 mb-10">
      <div>
        <p className="text-xl font-semibold">Required for your trip</p>
        <div className="flex justify-between w-full mt-2">
          <div className=" w-[80%]">
            <p className="font-medium ">Message the Host</p>
            <p className="text-sm pt-1">
              Share why you're traveling, who's coming with you, and what you
              love about the space.
            </p>
          </div>

          <div className="border-[1px] border-slate-500 rounded-md flex justify-center items-center p-0 h-[40px] w-[20%]">
            <p className="text-md font-semibold"> Add</p>
          </div>
        </div>

        <div className="flex justify-between w-full mt-5">
          <div className=" w-[80%]">
            <p className="font-medium ">Phone number</p>
            <p className="text-sm pt-1">
            Add and confirm your phone number to get trip updates.
            </p>
          </div>

          <div className="border-[1px] border-slate-500 rounded-md flex justify-center items-center p-0 h-[40px] w-[20%]">
            <p className="text-md font-semibold"> Add</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-b-[1px] border-slate-300"></div>

      <div className="pt-5">
        <p className="text-2xl font-medium">Cancellation policy</p>
            <p className=" pt-1">Free cancellation before Apr 6.<span className="text-sm text-textprimary">Cancel before Apr 29 for a partial refund.</span></p>
            <p className="font-semibold underline ">Show more</p>
           
      </div>

      <div className="pt-8 border-b-[1px] border-slate-300"></div>

      <div className="pt-5 flex justify-between gap-4">
      <LuFileClock className="h-[40px] w-[40px] text-pink-600" />
      <p className="text-sm">Your reservation won’t be confirmed until the Host accepts your request (within 24 hours). You won’t be charged until then.</p>

    </div>
    <div className="pt-8 border-b-[1px] border-slate-300"></div>
    <p className="text-xs font-normal pt-5">By selecting the button below, I agree to the <span className="underline font-semibold">Host's House Rules,  Ground rules for guests, Airbnb's Rebooking and Refund Policy,</span> and that Airbnb can charge my payment method if I’m responsible for damage. I agree to pay the total amount shown if the Host accepts my booking request.</p>
    <div className="flex justify-start pt-4">
    <button
            className="bg-secondary w-[40%] h-12 text-white font-semibold hover:none rounded-md"
            type="submit"
            onClick={handelClick}
          >
            Request to Book
          </button>
        </div>
    </div>
  );
};

export default Policy;
