"use client";
import { Button, Drawer, DrawerProps, RadioChangeEvent, Space } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import FooterGetway from "./footerGetway";
import SmallDeviceFooter from "./smallDeviceFooter";

const quickList = [
  { title: "© 2024 Airbnb, Inc. ", link: "" },
  { title: "Sitemap.", link: "" },
  { title: "Privacy.", link: "" },
  { title: "Your Privacy.", link: "" },
  { title: "Choices.", link: "" },
];

const supportList = [
  { title: "English (US)", link: "" },
  { title: "USD", link: "" },
  { title: "Support & resources ", link: "" },
];

const support = [
  { title: "Help Center", link: "/helpCenter" },
  { title: "Get help with a safety issue", link: "/giftcard" },
  { title: "AirCover", link: "/airbnbhome" },
  { title: "Anti-discrimination", link: "/helpCenter" },
  { title: "Disability support", link: "/giftcard" },
  { title: "Cancellation options", link: "/airbnbhome" },
  { title: "Report neighborhood concern", link: "/giftcard" },
];

//small device
const smallsupportList = [
  { title: "English (US)", link: "" },
  { title: "USD", link: "" },
];



const FooterMenuList = [
  { path: "/giftcard", title: "GiftCard" },
  { path: "/airbnbhome", title: "Home" },
  { path: "/helpCenter", title: "Privecy" },
];

const smallMenuList = [
  { path: "/giftcard", title: "Gift Card" },
  { path: "/airbnbhome", title: "Airbnb Your Home" },
  { path: "/helpCenter", title: "Hepl Center" },
];

const Footer = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isopen, setIsopen] = useState<boolean>(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="bg-primary bottom-0 w-full z-50 pb-2 fixed shadow-sm border-t-[1px] h-auto  border-slate-200 mt-[120px] md:mt-0">
        <div className="hidden md:block">
          <div
            className={` flex flex-col lg:flex-row pt-2 justify-between items-center md:px-10 lg:px-20 text-sm font-thin text-black  ${
              pathname == "/rooms" ? " xl:px-[185px]" : " lg:px-20"
            }`}
          >
            <div className="flex justify-between items-center gap-2">
              {quickList?.map((item, i) => {
                return (
                  <p className="text-normal font-normal" key={i}>
                    {item?.title}
                  </p>
                );
              })}
            </div>

            <div className="flex justify-between items-center gap-2">
              {supportList?.map((item, i) => {
                return (
                  <p
                    className="flex justify-between gap-1 text-medium font-semibold hover:underline cursor-pointer"
                    key={i}
                  >
                    {item?.title}{" "}
                    {item?.title === "Support & resources " && (
                      <FaChevronDown
                        style={{ marginTop: "4px" }}
                        onClick={showDrawer}
                      />
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="md:hidden">
          {pathname === "/" || pathname === "/filterRoom" ? (
            <SmallDeviceFooter setIsopen={setIsopen} isopen={isopen} />
          ) : (
            <>
              <div className="px-2 bg-[#F7F7F7] pt-4 pb-4">
                <div className="flex justify-start px-5 gap-4 ">
                  {smallsupportList?.map((item, i) => {
                    return (
                      <p className=" text-sm font-normal " key={i}>
                        {item?.title}{" "}
                      </p>
                    );
                  })}
                </div>

                <div className=" px-5 gap-2 pt-1 ">
                  <p className="text-sm font-light text-slate-900">
                    © 2024 Airbnb, Inc.{" "}
                  </p>
                  <div className="flex justify-start gap-3 pt-1 ">
                    {FooterMenuList?.map((item, i) => (
                      <Link href={item?.path} key={i}>
                        <p className="text-sm font-light text-slate-900">
                          {item?.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <p className="text-sm font-light pt-1 text-slate-900">
                    Your Privecy Choices.{" "}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <Drawer
          placement={"bottom"}
          width={500}
          onClose={onClose}
          open={open}
          // extra={
          //   <Space>
          //     <Button onClick={onClose}>Cancel</Button>
          //     <Button type="primary" onClick={onClose}>
          //       OK
          //     </Button>
          //   </Space>
          // }
        >
          <div className="flex justify-evenly items-center flex-col md:flex-row  gap-4">
            <div>
              <p className="text-base font-semibold">Support</p>
              {support?.map((item, i) => {
                return (
                  <Link href={item?.link} key={i}>
                    <p
                      onClick={() => setOpen(false)}
                      className="text-base font-normal py-1 hover:underline decoration-1 cursor-pointer"
                    >
                      {item?.title}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div>
              <p className="text-base font-semibold">Hosting</p>
              {support?.map((item, i) => {
                return (
                  <Link href={item?.link} key={i}>
<p
                    className="text-base font-normal py-1 hover:underline decoration-1 cursor-pointer"
                    key={i}
                  >
                    {item?.title}
                  </p>
                    
                  </Link>
                  
                );
              })}
            </div>

            <div>
              <p className="text-base font-semibold">Airbnb</p>
              {support?.map((item, i) => {
                return (
                  <Link href={item?.link} key={i}>
                  <p
                    className="text-base font-normal py-1 hover:underline cursor-pointer decoration-1"
                    key={i}
                  >
                    {item?.title}
                  </p>
                  </Link>
               
                );
              })}
            </div>
          </div>
        </Drawer>

        {isopen && (
          <div className="fixed top-[65%] right-2 bg-primary rounded-md shadow-md border-[1px] border-slate-200 z-50 p-4">
            {smallMenuList.map((item, i) => (
              <Link href={item?.path} key={i}>
                <p
                  key={i}
                  className={`py-2 cursor-pointer ${
                    item?.title === "Sign Up"
                      ? "border-b-[1px] border-slate-400"
                      : ""
                  }`}
                  onClick={() => setIsopen(false)}
                >
                  {item?.title}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
