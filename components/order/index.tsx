'use client'

import React, { useEffect, useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import Login from "./login";
import Reviewcard from "./reviewcard";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import CommonModal from "../common/commonmodal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import moment from "moment";
interface Token {
  accessToken: string;
  // Add other fields if any
}

// Get the current date
var currentDate = new Date();
var fourDaysLater = new Date();
fourDaysLater.setDate(fourDaysLater.getDate() + 4);

const OrderPage = () => {
  const searchData = useSelector((state: RootState) => state.auth?.searchData);
  const payload = useSelector((state: RootState) => state.auth?.payloadData);
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

 //guest state
 const [guestList, setguestList] = useState({
  adult: 1,
  child: 0,
  infants: 0,
  pets: 0,
});
useEffect(()=>{
  setguestList(searchData)
},[searchData])


  return (
    <div className="pt-10">
      <div className="flex justify-start gap-0">
        <p className="hover:bg-[#F7F7F7] hover:rounded-full p-3">
          <GoChevronLeft className="h-[25px] w-[25px]" />
        </p>
        <p className="text-3xl font-semibold">Request to book</p>
      </div>

      <div className="flex flex-col-reverse  md:flex-row justify-between gap-5 w-full">
        <div className="px-5 md:px-[60px] pt-4 w-full md:w-[50%] ">
          <p className="text-2xl font-semibold ">Your trip</p>
          <div className="flex justify-between pt-4">
            <div>
              <p className="font-medium ">Dates</p>
              <p className="font-normal text-textprimary text-sm pt-1">
              {payload?.checkIn
                    ?  moment(payload?.checkIn).format("MMM D")
                    : moment(currentDate).format("MMM D")} -  {payload?.checkOut
                      ?  moment(payload?.checkOut).format("D")
                      : moment(fourDaysLater).format("D")}
              </p>
            </div>

            <div className="font-medium underline  disabled" >Edit</div>
          </div>

          <div className="flex justify-between pt-5 ">
            <div>
              <p className="font-medium ">Guests</p>
              <p className="font-normal text-textprimary text-sm pt-1">
              {`${guestList?.adult + guestList?.child} guests,`} {guestList?.infants>0 &&  ` ${guestList?.infants} infant,`}{guestList?.pets>0 &&  ` ${guestList?.pets} pet`}
              </p>
            </div>

            <div className="font-medium underline cursor-pointer"  onClick={() => {
                setSubModel(true);
              }}>Edit</div>
          </div>

          <div className="pt-8 border-b-[1px] border-slate-300"></div>
          <Login guestlist={guestList}/>
        </div>

        <div className=" px-5 md:px-[60px] pt-4 w-full md:w-[50%]">
          <Reviewcard/>
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
                    if (guestList?.adult > 1) {
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

export default OrderPage;
