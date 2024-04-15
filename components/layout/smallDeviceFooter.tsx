'use client'
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import CommonModal from "../common/commonmodal";
import CommonLogin from "../login/page";

const SmallDeviceFooter = () => {
     //modal open part
     const [isModalOpen, setIsModalOpen] = useState(false);
     const _handleCancel = () => {
       setIsModalOpen(false);
     };
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

      <div onClick={()=>{setActive('Log In'); setIsModalOpen(true);}} className={`${active === 'Log In' ? 'text-secondary font-semibold' : 'font-light'}`}>
        <div className="flex justify-center items-center">
          <FaUserCircle
            style={{ fontWeight: "bold", height: "20px", width: "20px" }}
          />
        </div>
        <p className="text-xs ">Log In</p>
      </div>

      <CommonModal
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title={`Log in or sign up`}
          onCancel={_handleCancel}
          width={"500px"}
        >
          <CommonLogin setIsModalOpen={setIsModalOpen}/>
         
        </CommonModal>
    </div>
  );
};

export default SmallDeviceFooter;
