import React from "react";
import { reviewlist, reviewlistitem } from "@/components/common/reviewlist";
import { FaStar } from "react-icons/fa";

import Image from "next/image";

const Reviews = () => {
  return (
    <>
      <div className="pt-3 border-t-[1px] border-slate-200">
        <p className="flex justify-start gap-2 text-3xl font-bold">
          {" "}
          <FaStar style={{ paddingTop: "5px" }} />{" "}
          <span>4.89 · 56 reviews </span>
        </p>

        <div className="hidden lg:block ">
          <div className=" grid grid-cols-7 divide-x divide-gray-400 gap-2 pt-8 w-full  ">
            {reviewlistitem.map((item, i) => (
              <div className="px-4">
                <p className="text-md font-medium">{item?.title}</p>
                <p className="text-xl font-medium ">{item?.rating}</p>
                <p className="text-lg font-medium pt-4">
                  {item.icon && (
                    <item.icon
                      className={`${
                        item?.title === "Overall rating"
                          ? "h-[40px] w-[40px]"
                          : "h-[30px] w-[30px]"
                      }`}
                    />
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-2 md:px-0 mt-10 pt-5 border-t-[1px] border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-10">
        {reviewlist.map((item, i) => (
          <div>
            <div className="flex justify-start ">
              <Image
                src={item?.image}
                alt="review"
                className="rounded-full h-[45px] w-[45px] mt-1"
              />
              <div className="px-2 ">
                <p className="font-semibold leading-none">{item?.name}</p>
                <p className="">{item?.city}</p>
              </div>
            </div>
            <p className="font-semibold flex justify-start text-sm pt-1 px-2">
              <FaStar style={{ paddingTop: "5px" }} />
              <FaStar style={{ paddingTop: "5px" }} />
              <FaStar style={{ paddingTop: "5px" }} />
              <FaStar style={{ paddingTop: "5px" }} />
              <FaStar style={{ paddingTop: "5px" }} />
              <span className="px-1">{item?.date}</span>
            </p>
            <p className="pt-1 text-textprimary px-2">{item?.description}</p>
            <p className="pt-1 text-textprimary px-2 underline font-bold">
              {" "}
              Show more
            </p>
          </div>
        ))}

        <div className="border-[1px] border-slate-500 rounded-md flex justify-center items-center w-[200px] p-3 mt-2">
          <p className="text-md font-semibold">Show All 56 reviews</p>
        </div>
      </div>

      <div className=" px-2 md:p-0 pt-3 border-t-[1px] border-slate-200 mt-6">
        <p className="flex justify-start gap-2 text-2xl font-bold pb-4">
        Where you’ll be
        </p>
        <div className="w-full rounded-md">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.690021795119!2d90.40564997511659!3d23.79405017864068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70937cf2973%3A0xb57c4554f38728d5!2sBanani%20Playground%2C%20Rd%20No%2027%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1711086553103!5m2!1sen!2sbd"  height="450"  className="rounded-md border-0 w-full allowFullScreen-0"  loading="lazy"  ></iframe>
        </div>
      </div>
    </>
  );
};

export default Reviews;
