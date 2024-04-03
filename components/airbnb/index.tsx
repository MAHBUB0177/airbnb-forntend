import React from "react";
import { IoSearchOutline } from "react-icons/io5";
// import {homeimage} from '@/assets/images/giftcard/'

const AirBnb = () => {
  return (
    <div>
      <div className="px-2 flex justify-evenly items-center flex-col md:flex-row  gap-4">
        <div className="w-full ">
          <p className="text-4xl font-semibold text-secondary">Airbnb it</p>
          <p className="text-4xl font-semibold ">and earn</p>
          <p className="text-sm text-textprimary">
            Your Airbnb could be one of the first in this area. For an earnings
            estimate, search nearby.
          </p>
          <div className="border-[1px] border-slate-500 rounded-full flex justify-start gap-4 items-center p-2 w-[350px] mt-5">
            <IoSearchOutline style={{ fontWeight: "bold" }} />
            <div>
              <p className="text-md font-semibold">Sharetpur</p>
              <p className="text-md  text-textprimary">
                Entire Place . 2Bedrooms
              </p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29298.427356007523!2d90.20550016302742!3d23.377238251282247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1712048040670!5m2!1sen!2sbd"
            height="450"
            className="rounded-md border-0 w-full md:w-[600px] allowFullScreen-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <p className="px-2 text-4xl flex  justify-center items-center font-semibold mt-20">
        Airbnb it easily with Airbnb Setup
      </p>
    </div>
  );
};

export default AirBnb;
