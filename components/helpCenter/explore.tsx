import React from "react";
import explore1 from "@/assets/images/helpcenter/explore1.png";
import explore2 from "@/assets/images/helpcenter/explore2.png";
import { title } from "process";
import Image from "next/image";

const exploreList = [
  {
    image: explore1,
    title: "Our community policies",
    desc: "How we build a foundation of trust.",
  },
  {
    image: explore2,
    title: "Host resources and inspiration",
    desc: "Find tips, best practices, and news.",
  },
];

const Explore = () => {
  return (
    <div className="px-0 md:px-40 pt-10 pb-10">
      <p className="text-white text-2xl font-bold">Explore more</p>

      <div className="flex flex-col md:flex-row justify-between md:gap-20">
        <div className="  gap-20 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-10 rounded-lg shadow-xl">
          {exploreList?.map((item, i) => (
            <div className="  bg-gray-900 shadow-xl rounded-md w-[340px]">
              <Image
                src={item?.image}
                alt="slleproom"
                className="rounded-t-md h-[240px]"
              />
              <div className="p-2">
                <p className="font-medium pt-1 text-lg text-white">
                  {item?.title}
                </p>
                <p className="font-light  text-md text-white">{item?.desc}</p>
              </div>
            </div>
          ))}

          <div></div>
        </div>

        <div className="">
          <p className=" pt-0 text-2xl font-bold text-white md:pt-10 ">
            Need to get in touch?
          </p>
          <p className="text-lg font-medium text-white ">
            We’ll start with some questions and get <br /> you to the right
            place.
          </p>
          <div className="w-full mb-4 pt-4  justify-center items-center">
            <button
              className="bg-white w-full h-12 text-black font-semibold hover:none rounded-md"
              type="submit"
              //   onClick={handelClick}
            >
              Contact Us
            </button>
            <p className="text-lg text-white pt-2">
              You can also <span className="underline">give us feedback.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
