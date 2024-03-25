'use client'
import React, { useState } from "react";
import Reviewcard from "../order/reviewcard";
import { GoChevronLeft } from "react-icons/go";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Radio } from "antd";
import { RiVisaLine } from "react-icons/ri";
import { GrAmex } from "react-icons/gr";
import { SiDiscover } from "react-icons/si";
import { FaApplePay, FaCcPaypal } from "react-icons/fa";
import Checkout from "./checkout";
import Policy from "./policy";
import CommonModal from "../common/commonmodal";

const ConfirmPay = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubModel, setSubModel] = useState(false);

  const handelclick = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const _onSubModel = (e, stateSub = true, stateMain = false) => {
    setIsModalOpen(stateMain);
    setSubModel(stateSub);
  };

  return (
    <div className="pt-10">
      <div className="flex justify-start gap-0">
        <p className="hover:bg-[#F7F7F7] hover:rounded-full p-3">
          <GoChevronLeft className="h-[25px] w-[25px]" />
        </p>
        <p className="text-3xl font-semibold">Request to book</p>
      </div>

      <div className="pt-5 px-5 md:px-[60px]">
        <div className="flex justify-start gap-1">
          <FaRegCircleCheck className="h-[25px] w-[25px] mt-1" />
          <p className="text-2xl font-semibold">Hi, you’re logged in</p>
        </div>
      </div>

      <div className="flex flex-col-reverse  md:flex-row justify-between gap-0 w-full">
        <div className="px-2 md:px-[60px] pt-4 w-full md:w-[55%] ">
          <p className="text-2xl font-semibold ">Your trip</p>
          <div className="flex justify-between pt-4">
            <div>
              <p className="font-medium ">Dates</p>
              <p className="font-normal text-textprimary text-sm pt-1">
                Apr 1-6
              </p>
            </div>

            <div className="font-medium underline cursor-pointer" onClick={()=>setIsModalOpen(true)}>Edit</div>
          </div>

          <div className="flex justify-between pt-5 ">
            <div>
              <p className="font-medium ">Guests</p>
              <p className="font-normal text-textprimary text-sm pt-1">
                1 guest
              </p>
            </div>

            <div className="font-medium underline cursor-pointer" onClick={() => {
                setSubModel(true);
              }}>Edit</div>
          </div>

          <div className="pt-8 border-b-[1px] border-slate-300"></div>

          <div className="pt-4">
            <p className="text-2xl font-semibold"> Choose how to pay</p>

            <div className="border-2 border-slate-500 mt-4 rounded-md">
              <div className="flex justify-between p-4 ">
                <div>
                  <p className=" font-medium">Pay in full</p>
                  <p className="text-sm text-textprimary">
                    Pay the total ($1,580.70).
                  </p>
                </div>
                <div>
                  <Radio></Radio>
                </div>
              </div>

              <div className="flex justify-between p-4 border-t-2 border-slate-500">
                <div>
                  <p className=" font-medium">Pay in full</p>
                  <p className="text-sm text-textprimary">
                    Pay the total ($1,580.70).
                  </p>
                </div>
                <div>
                  <Radio></Radio>
                </div>
              </div>
            </div>

            <div className="pt-8 border-b-[1px] border-slate-300"></div>
            <div className="pt-4">
              <div className="flex justify-between ">
                <p className="text-xl font-semibold">Pay with</p>

                <div className="flex gap-1 pb-4 ">
                  <RiVisaLine className="text-blue-600 h-[30px] w-[30px]" />{" "}
                  <GrAmex className="text-red-600 h-[30px] w-[30px]" />{" "}
                  <SiDiscover className="orange-600 h-[30px] w-[30px]" />{" "}
                  <FaApplePay className="violet-600 h-[30px] w-[30px]" />
                </div>
              </div>

              <div className="w-full ">
                <form>
                  <Checkout />
                </form>
              </div>

             

              <div className="pt-8 border-b-[1px] border-slate-300"></div>

              <div>

<Policy/>
</div>

              <div>

              </div>
            </div>
          </div>
          {/* <Login/> */}
        </div>

        <div className=" px-5 md:px-[60px] pt-4 w-full md:w-[45%]">
          <Reviewcard />
        </div>

        <CommonModal
        open={isModalOpen}
        onCancel={handleCancel}
        title={`Open Modal`}
        width={'900px'}
      >
        <div>
          {/* Content inside the modal */}
          <p>This is the content inside the modal.In both examples, CommonModalProps defines the expected props for the CommonModal component. React.FC is a generic type that describes a functional component. It takes the props type as a generic parameter. This way, you ensure type safety for your component.

         </p>
        </div>
      </CommonModal>


      <CommonModal
        open={isModalOpen}
        onCancel={handleCancel}
        title={`Open Modal`}
        width={'900px'}
      >
        <div>
          {/* Content inside the modal */}
          open is a boolean indicating whether the modal should be open or closed.
onCancel is a function that will be called when the modal is canceled or closed.
title is a string representing the title of the modal.
width is an optional string specifying the width of the modal.
        </div>
      </CommonModal>
      </div>
    </div>
  );
};

export default ConfirmPay;
