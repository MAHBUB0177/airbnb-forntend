'use client'
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const SmallDeviceFooter = () => {
  const[active,setActive]=useState('Explore')
  return (
    <div className="flex justify-evenly items-center pt-2">
      <div onClick={()=>setActive('Explore')} className={`${active === 'Explore' ? 'text-secondary font-semibold' : 'font-light'}`}>
        <div className="flex justify-center items-center">
          <IoSearchOutline
            style={{ fontWeight: "bold", height: "20px", width: "20px" }}
          />
        </div>
        <p className="text-xs ">Explore</p>
      </div>
      <div onClick={()=>setActive('Whistle')} className={`${active === 'Whistle' ? 'text-secondary font-semibold' : 'font-light'}`}>
        <div className="flex justify-center items-center">
          <MdFavoriteBorder />
        </div>
        <p className="text-xs ">Whistle</p>
      </div>

      <div onClick={()=>setActive('Log In')} className={`${active === 'Log In' ? 'text-secondary font-semibold' : 'font-light'}`}>
        <div className="flex justify-center items-center">
          <FaUserCircle
            style={{ fontWeight: "bold", height: "20px", width: "20px" }}
          />
        </div>
        <p className="text-xs ">Log In</p>
      </div>
    </div>
  );
};

export default SmallDeviceFooter;
