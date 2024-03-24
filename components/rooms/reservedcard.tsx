import Image from "next/image";
import React from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";
import profilelogo from "@/assets/images/rooms/profiledemo.webp";
import CommonButton from "../common/cummonbutton";
import dimondlogo from "@/assets/images/rooms/dimond.jpg";
import { SketchOutlined } from "@ant-design/icons";
import { IoLocationOutline } from "react-icons/io5";
import { GrKey } from "react-icons/gr";
import { CiFilter } from "react-icons/ci";
import Bookingcard from "./bookingcard";
import Sleeproom from "./sleeproom";
import Offers from "./offers";
import Reviews from "./reviews";

const ReservedCard = () => {
  return (
    <div>
      <div className="pt-8  flex flex-col md:flex-row justify-between pb-12 w-full gap-10">
        <div className="w-full p-2 md:p-0 md:w-2/3">
          <p className="text-2xl font-bold">
            Entire villa in Tambon Bo Put, Thailand
          </p>
          <p className="font-light">4 guests2 . bedrooms2 . beds3 . baths</p>
          <p className="font-medium flex pt-2">
            {" "}
            <FaStar style={{ paddingTop: "5px" }} /> 4.92{" "}
            <span className="underline px-2"> 87 reviews</span>
          </p>

          <div className=" pt-6 ">
            <div className="flex gap-3  border-t-[1px] border-slate-200 pt-3 pb-5">
              <Image
                src={profilelogo}
                alt="profilecard"
                className="rounded-full h-[40px] w-[40px]"
              />
              <div>
                <p className="font-medium">Hosted by Manfred</p>
                <p className="text-sm text-textprimary">
                  Superhost7 . years hosting
                </p>
              </div>
            </div>

            <div className="flex gap-3  border-t-[1px] border-slate-200 pt-3">
              <CiFilter className=" h-[30px] w-[30px] text-textprimary" />
              <div>
                <p className="font-medium">Manfred is a Superhost</p>
                <p className="text-sm text-textprimary">
                  Superhosts are experienced, highly rated Hosts.
                </p>
              </div>
            </div>

            <div className="flex gap-3 pb-2  pt-3">
              <IoLocationOutline className=" h-[30px] w-[30px] text-textprimary" />

              <div>
                <p className="font-medium">Great check-in experience</p>
                <p className="text-sm text-textprimary">
                  95% of recent guests gave the check-in process a 5-star
                  rating.
                </p>
              </div>
            </div>

            <div className="flex gap-3  border-b-[1px] border-slate-200 pt-3 pb-5">
              <GrKey className=" h-[30px] w-[30px] text-textprimary" />
              <div>
                <p className="font-medium">Dive right in</p>
                <p className="text-sm text-textprimary">
                  This is one of the few places in the area with a pool.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-bgsecondary rounded-md p-4   mt-3">
            <p className="text-textprimary">
              Some info has been automatically translated.{" "}
              <span className="underline font-semibold">Show original</span>
            </p>
          </div>
          <p className="text-textprimary pt-3">
            You are welcome to another luxurious hospitality experience in the
            heart of the Galilee nature. Unique Extended and relaxing unit
            Located on the 2nd floor with two balconies overlooking a
            fascinating view
            <br />A variety of corners for relaxing in front of the open
            landscape. Large and relaxing ...
          </p>
          <p className="underline font-medium pt-2 border-b-[1px] border-slate-200 pb-10">
            Show more
          </p>

          <Sleeproom />
          <Offers />
        </div>

        <div className="w-full  p-2 md:p-0 md:w-1/3 ">
          <Bookingcard />
        </div>
      </div>
      <Reviews/>

  
    </div>
  );
};

export default ReservedCard;
