'use client'
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import homeairbnb from '@/assets/images/logo/homeimage.webp'
import Image from "next/image";

import home3 from '@/assets/images/landingpage/home3.webp'
import home2 from '@/assets/images/landingpage/home2.webp'
import home1 from '@/assets/images/landingpage/home1.webp'
import Faq from "./faq";
let homeimage=[{image:home3,title:'Park 12 Apartments',desc:'San Diego, California'},{
  image:home2,title:'Old Town Apartments',desc:'Scottsdale, Arizona'
},{image:home1,title:'525 Olive Apartments',desc:'San Diego, California'}]
const detailsList=[
  {title:'One-to-one guidance from a Superhost',
desc:'We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest—by phone, video call, or chat.'},
{
  title:'An experienced guest for your first booking',
  desc:'For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.'
},
{
  title:'Specialized support from Airbnb',
  desc:'New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.'
}
]

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
      <div className="w-full mt-10 px-2 md:px-0">
        <Image src={homeairbnb} alt="landingpage"/>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 gap-8">
          {
            detailsList?.map((item,i)=>
            <div>
              <p className="text-md font-semibold">{item?.title}</p>
              <p className="text-textprimary pt-2">{item?.desc}</p>
            
            </div>)
          }

        </div>

      </div>
<div className="px-2 md:px-[200px] ">
<div className="mt-10 mb-10">
        <p className="flex justify-center items-center text-4xl  font-bold">Introducing Airbnb-friendly apartments</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 ">
          {homeimage?.map((item,i)=>
          <div>
          <Image src={item?.image} alt="landingpage" className="h-[300px] w-[400px] rounded-md"/>
          <div className="flex justify-center items-center mt-3">
            <div>
            <p className="text-xs font-semibold">{item?.title}</p>
          <p className="text-xs font-textprimary">{item?.desc}</p>
              </div>
        
            </div>
          
            </div>
          )}

        </div>

        <div className="mt-5 px-[50px]">

          <p className=" text-md md:text-xl  flex justify-center item-center">We’ve partnered with apartment buildings across the US that let you rent a place to live and Airbnb it part-time. Explore available apartments and find out what you can earn.</p>
          

          <div className="flex justify-center items-center">
          <div className="border-[1px] border-slate-500 rounded-md flex justify-center items-center  mt-5 p-2 font-semibold w-[150px]">
            Learn More
          </div>
          </div>
        </div>
      </div>
</div>
<div>
  <Faq/>
</div>
      

    </div>
  );
};

export default AirBnb;
