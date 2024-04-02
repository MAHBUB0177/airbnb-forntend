import React from "react";
import CommonButton from "../common/cummonbutton";
import Link from "next/link";
import Image from "next/image";
import airbnb_logo from "../../assets/images/logo/airbnb-logo.png";
interface commonheaderprops {
  title1: string;
  title2: string;
  btntitle: string;
}

const CommonHeader = ({ title1, title2, btntitle }: commonheaderprops) => {
  return (
    <div>
      <div className="bg-primary  w-full z-50 fixed px-2 py-2">
        <div
          className={`flex flex-row justify-between items-center md:px-10  md:py-2 lg:px-20 `}
        >
          <Link href={"/"}>
            <div className="flex gap-1">
              <Image
                src={airbnb_logo}
                alt="airbnb_logo"
                width={30}
                height={20}
              />
              <p className="hidden lg:block text-secondary text-2xl font-bold ">
                {title1}
              </p>
            </div>
          </Link>

          <div className="flex flex-row gap-5">
            <p className="hidden lg:block pt-3 font-medium  underline">
              {title2}
            </p>
            <div className="">
              <CommonButton
                bg={"secondary"}
                width={"40%"}
                height={"12"}
                type="button"
              >
                {btntitle}
              </CommonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
