"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "./header";
import Image from "next/image";

import airbnb_logo from "../../assets/images/logo/airbnb-logo.png";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import CommonButton from "../common/cummonbutton";
import CommonHeader from "./commonHeader";

const Rootheader = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname == "/giftcard" || pathname == "/helpCenter"   ? (
        <>
          <CommonHeader
            title1={"airbnb"}
            title2={"Redeem"}
            btntitle={"Buy gift card"}
          />
        </>
      ) : pathname == "/airbnbhome" ? (
        <>
          <CommonHeader
            title1={"airbnb"}
            title2={"Ready to Airbnb it?"}
            btntitle={"Airbnb Setup"}
          />
        </>
      ) : (
        <Header />
      )}
    </div>
  );
};

export default Rootheader;
