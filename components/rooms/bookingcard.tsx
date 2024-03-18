import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import CommonButton from '../common/cummonbutton';
import { SketchOutlined } from '@ant-design/icons';

const Bookingcard = () => {
  return (
  
         <div className="w-full top-20 sticky">
        <div className="bg-primary shadow-xl h-auto border-[1px] border-slate-300 rounded-xl   pb-5 ">
        <div className=" pt-4 px-5  flex gap-2">
          {" "}
          <p className="text-xl font-medium">$418 </p>
          <span className="font-norml pt-1">night</span>
        </div>

        <div className="border-[1px] border-slate-400 rounded-md mt-4 mx-5 ">
          <div className="flex w-full ">
            <div className="border-r-[1px] border-slate-400 w-1/2 p-[6px] text-xs ">
              <p className="font-medium">CHECK-IN</p>
              <p>3/17/24</p>
            </div>

            <div className=" w-1/2  p-[6px] text-xs">
              <p className="font-medium">CHECKOUT</p>
              <p>3/17/24</p>
            </div>
          </div>

          <div className="p-[6px] border-t-[1px] border-slate-400 flex justify-between text-sm">
            <div>
              <p className="font-medium">Guests</p>
              <p>1guests</p>
            </div>

            <FaChevronDown className="pt-[12px] h-7 w-7" />
          </div>
        </div>

        <div className=" w-full pt-4 flex justify-center items-center">
        <CommonButton bg={'secondary'} width={'full'} height={'12'} >Check Avilability</CommonButton>
        </div>
        </div>

        <div className="border-[1px] border-slate-400 flex justify-center items-center mt-5 rounded-md p-4 gap-2">
            <SketchOutlined className="h-[30px] w-[30px]  text-secondary" style={{ fontSize: '200%'}} />
            <div>
                <p className="font-medium ">This is a rare find</p>
                <p className="text-sm text-textprimary">Manfred's place is usually fully booked.</p>
            </div>

        </div>
        </div>
   
  )
}

export default Bookingcard;