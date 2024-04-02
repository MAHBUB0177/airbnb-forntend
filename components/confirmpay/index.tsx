"use client";
import React, { useState } from "react";
import Reviewcard from "../order/reviewcard";
import { GoChevronLeft } from "react-icons/go";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Radio, message } from "antd";
import { RiVisaLine } from "react-icons/ri";
import { GrAmex } from "react-icons/gr";
import { SiDiscover } from "react-icons/si";
import { FaApplePay, FaCcPaypal } from "react-icons/fa";
import Checkout from "./checkout";
import Policy from "./policy";
import CommonModal from "../common/commonmodal";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useRouter } from "next/navigation";
import CommonButton from "../common/cummonbutton";

const ConfirmPay = () => {
  //modal open part
  const [isModalOpen, setIsModalOpen] = useState(false);
  const _handleCancel = () => {
    setIsModalOpen(false);
  };

  //2nd modal open
  const [isSubModel, setSubModel] = useState(false);
  const _onSubModelCancel = (stateSub = true, stateMain = false) => {
    setIsModalOpen(stateMain);
    setSubModel(stateSub);
  };

  //form submit
  const router = useRouter();

  const [checkout, setCheckout] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });
 
 

  const handelClick = (event:any) => {
    
    event.preventDefault(); // Prevent default form submission behavior
    message.success("Successfully booking");
    // Navigate to the home page
    console.log(checkout,'++++++++++++++++++checkout')
    router.push('/');
  };

  const [guestList, setguestList] = useState({
    adult: 1,
    child: 0,
    infants: 0,
    pets: 0,
  });

  return (
    <div className="pt-10 pb-10">
      <div className="flex justify-start gap-0">
        <p className="hover:bg-[#F7F7F7] hover:rounded-full p-3">
          <GoChevronLeft className="h-[25px] w-[25px]" />
        </p>
        <p className="text-3xl font-semibold">Confirm and pay</p>
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

            <div
              className="font-medium underline cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Edit
            </div>
          </div>

          <div className="flex justify-between pt-5 ">
            <div>
              <p className="font-medium ">Guests</p>
              <p className="font-normal text-textprimary text-sm pt-1">
                1 guest
              </p>
            </div>

            <div
              className="font-medium underline cursor-pointer"
              onClick={() => {
                setSubModel(true);
              }}
            >
              Edit
            </div>
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
              <form onSubmit={handelClick}>
              <div className="w-full ">
               
                  <Checkout setCheckout={setCheckout} checkout={checkout} />
                
              </div>

              <div className="pt-8 border-b-[1px] border-slate-300"></div>
              <div>
                <Policy />
              </div>

              <div className="flex justify-start pt-4">
                <CommonButton
                  bg={"secondary"}
                  width={"40%"}
                  height={"12"}
                  // onClick={handelClick}
                  type="submit"
                >
                  Confirm and pay
                </CommonButton>
              </div>
              </form>

              <div></div>
            </div>
          </div>
          {/* <Login/> */}
        </div>

        <div className=" px-5 md:px-[60px] pt-4 w-full md:w-[45%]">
          <Reviewcard />
        </div>

        {/* //open modal part */}
        <CommonModal
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title={`Welcome to My App`}
          onCancel={_handleCancel}
          width={"600px"}
        >
          <div>
            <h2>About My App</h2>
            <p>
              This is a sample application demonstrating the usage of
              CommonModal component.
            </p>
            <p>
              It allows you to display modals with customizable titles, widths,
              and content.
            </p>
            <p>Feel free to explore!</p>
          </div>
        </CommonModal>

        <CommonModal
          open={isSubModel}
          setIsModalOpen={setSubModel}
          title={`Guests`}
          onCancel={() => _onSubModelCancel(false)}
          width={"900px"}
        >
          <div className="w-[500px]">
            <p className="text-sm ">
              This place has a maximum of 10 guests, not including infants. Pets
              aren't allowed.
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
          </div>
        </CommonModal>
      </div>
    </div>
  );
};

export default ConfirmPay;
