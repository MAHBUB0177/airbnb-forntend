import React from "react";
import guest1 from "@/assets/images/helpcenter/image1.jpg";
import guest2 from "@/assets/images/helpcenter/image2.jpg";
import guest3 from "@/assets/images/helpcenter/image3.jpg";
import guest4 from "@/assets/images/helpcenter/image4.png";
import Image from "next/image";

//host list
import host1 from "@/assets/images/helpcenter/host1.jpg";
import host2 from "@/assets/images/helpcenter/host2.jpg";
import host3 from "@/assets/images/helpcenter/host3.jpg";
import host4 from "@/assets/images/helpcenter/host4.jpg";

//exhostlist
import exhost1 from "@/assets/images/helpcenter/exhost1.jpg";
import exhost2 from "@/assets/images/helpcenter/exhost2.jpg";
import exhost3 from "@/assets/images/helpcenter/exhost3.jpg";
import exhost4 from "@/assets/images/helpcenter/exhost4.jpg";
import CommonButton from "../common/cummonbutton";

//admin
import admin1 from '@/assets/images/helpcenter/admin1.jpg'
import admin2 from '@/assets/images/helpcenter/admin2.jpg'
import admin3 from '@/assets/images/helpcenter/admin3.jpg'
import admin4 from '@/assets/images/helpcenter/admin4.jpg'

let GuestList = [
  { image: guest1, title: "Getting started on Airbnb" },
  { image: guest2, title: "Access and manage your account" },
  { image: guest3, title: "Help with a reservation" },
  { image: guest4, title: "AirCover for guests" },
];

let HostList = [
  { image: host1, title: "Getting started on Airbnb" },
  { image: host2, title: "Access and manage your account" },
  { image: host3, title: "Help with a reservation" },
  { image: host4, title: "AirCover for guests" },
];

let experinceHostList = [
  { image: exhost1, title: "Getting started on Airbnb" },
  { image: exhost2, title: "Access and manage your account" },
  { image: exhost3, title: "Help with a reservation" },
  { image: exhost4, title: "AirCover for guests" },
];

let adminList = [
    { image: admin1, title: "Getting started on Airbnb" },
    { image: admin2, title: "Access and manage your account" },
    { image: admin3, title: "Help with a reservation" },
    { image: admin4, title: "AirCover for guests" },
  ];
interface activeprops {
  active: string;
}
const Guides = ({ active }: activeprops) => {
//   console.log(active, "active++++++++++++++++");
  return (
    <div>
      <div className="hidden md:block">
        <div className=" mt-6 mb-10 border border-slate-400 rounded-md w-full flex flex-col md:flex-row justify-between gap-10 p-6 items-center">
          <div className=" w-1/2">
            <p className="text-2xl font-bold"> We’re here for you</p>
            <p className="text-lg font-thin">
              Log in to get help with your reservations, account, and more.
            </p>
          </div>

          <div className="w-full md:w-1/2 pt-4 flex justify-center items-center">
            <button
              className="bg-secondary w-full h-12 text-white font-semibold hover:none rounded-md"
              type="submit"
              //   onClick={handelClick}
            >
              Log In or Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full mb-4 pt-4  justify-center items-center">
        <button
          className="bg-secondary w-[50%] h-12 text-white font-semibold hover:none rounded-md"
          type="submit"
          //   onClick={handelClick}
        >
          Log In or Sign Up
        </button>
      </div>

      <p className="text-3xl font-semibold">{active === '1' || active === '2' ? 'Guides for getting started' : active==='3'? "Guides for Experience Hosts" :"Guides for travel admins"}</p>
      <div className=" justify-items-center justify-center  gap-4  grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10 mb-10">
        {active === "1"
          ? GuestList?.map((item, i) => (
              <div key={i}>
                <Image
                  src={item?.image}
                  alt="slleproom"
                  className="rounded-lg h-[240px]"
                />
                <p className="font-medium pt-1 text-lg">{item?.title}</p>
              </div>
            ))
          : active === "2"
          ? HostList?.map((item, i) => (
              <div key={i}>
                <Image
                  src={item?.image}
                  alt="slleproom"
                  className="rounded-lg h-[240px]"
                />
                <p className="font-medium pt-1 text-lg">{item?.title}</p>
              </div>
            ))
          :active==='3'? experinceHostList?.map((item, i) => (
              <div key={i}>
                <Image
                  src={item?.image}
                  alt="slleproom"
                  className="rounded-lg h-[240px]"
                />
                <p className="font-medium pt-1 text-lg">{item?.title}</p>
              </div>
            )) : adminList?.map((item, i) => (
                <div key={i}>
                  <Image
                    src={item?.image}
                    alt="slleproom"
                    className="rounded-lg h-[240px]"
                  />
                  <p className="font-medium pt-1 text-lg">{item?.title}</p>
                </div>
              ))}
      </div>
    </div>
  );
};

export default Guides;
