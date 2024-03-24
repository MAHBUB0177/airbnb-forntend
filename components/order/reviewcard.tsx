import React from "react";
import image1 from "@/assets/images/rooms/image1.webp";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Reviewcard = () => {
  return (
    <div className="w-full top-20 sticky">
      <div className="bg-primary  h-auto border-[1px] border-slate-300 rounded-md w-full  p-5 ">
        <div className="flex justify-between gap-2">
          <Image
            src={image1}
            alt="reviewcard"
            className="rounded-md w-[130px]"
          />
          <div>
            <p className="font-semibold text-sm">
              Ashoka Home - B&B homestay with private balcony
            </p>
            <p className="text-sm text-textprimary pt-1">
              Room in bed and breakfast
            </p>
            <p className="text-sm text-textprimary flex pt-1">
              {" "}
              <FaStar style={{ paddingTop: "5px" }} />
              <span className="underline px-2"> 5.00 (6 reviews)</span>
            </p>
          </div>
        </div>

        <div className="mt-5 border-t-[1px] border-slate-300"></div>
        <div>
            <p className="text-xl font-semibold pt-3">Price details</p>
            <div className="flex justify-between">
                <p className="text-textprimary">$25.00 x 5 nights</p>
                <p className="text-textprimary">$125.00</p>

            </div>
            <div className="flex justify-between pt-3">
                <p className="text-textprimary underline decoration-1">Cleaning fee</p>
                <p className="text-textprimary">$5.00</p>

            </div>

            <div className="flex justify-between pt-3">
                <p className="text-textprimary underline decoration-1">Airbnb service fee</p>
                <p className="text-textprimary">$18.35</p>
            </div>

            <div className="mt-5 border-t-[1px] border-slate-300"></div>

            <div className="flex justify-between pt-3">
                <p className="text-md font-medium">Total (USD)</p>
                <p className="text-md font-medium">$148.35</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
