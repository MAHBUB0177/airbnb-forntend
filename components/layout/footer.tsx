"use client";
import { Button, Drawer, DrawerProps, RadioChangeEvent, Space } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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

const support=[
  {title:'Help Center',link:'/help'},
  {title:'Get help with a safety issue',link:''},
  {title:'AirCover',link:''},
  {title:'Anti-discrimination',link:''},
  {title:'Disability support',link:''},
  {title:'Cancellation options',link:''},
  {title:'Report neighborhood concern',link:''},
]
const Footer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-primary bottom-0 w-full z-50 fixed shadow-sm border-t-[1px] h-[50px]  border-slate-200 ">
      <div className="flex flex-col lg:flex-row pt-2 justify-between items-center md:px-10 lg:px-20 text-sm font-thin text-black">
        <div className="flex justify-between items-center gap-2">
          {quickList?.map((item, i) => {
            return <p className="text-normal font-normal">{item?.title}</p>;
          })}
        </div>

        <div className="flex justify-between items-center gap-2">
          {supportList?.map((item, i) => {
            return (
              <p className="flex justify-between gap-1 text-medium font-semibold hover:underline cursor-pointer">
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
          {
            support?.map((item,i)=>{
              return <Link href={item?.link}>
              <p onClick={()=>setOpen(false)} className="text-base font-normal py-1 hover:underline decoration-1 cursor-pointer">{item?.title}</p>

              </Link>
            })
          }
        </div>

        <div>
        <p className="text-base font-semibold">Hosting</p>
          {
            support?.map((item,i)=>{
              return <p className="text-base font-normal py-1 hover:underline decoration-1 cursor-pointer">{item?.title}</p>
            })
          }
        </div>

        <div>
        <p className="text-base font-semibold">Airbnb</p>
          {
            support?.map((item,i)=>{
              return <p className="text-base font-normal py-1 hover:underline cursor-pointer decoration-1">{item?.title}</p>
            })
          }
        </div>

       </div>
      </Drawer>
    </div>
  );
};

export default Footer;
