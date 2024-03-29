'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Header from './header'
import Image from 'next/image'

import airbnb_logo from "../../assets/images/logo/airbnb-logo.png";
import Link from 'next/link'
import { IoMenuSharp } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import CommonButton from '../common/cummonbutton'

const Rootheader = () => {
    const pathname = usePathname()
  return (
    <div>
        {pathname == '/giftcard' ? <>
        <div className="bg-primary  w-full z-50 fixed ">
        <div
          className={`flex flex-row justify-between items-center md:px-10  md:py-2  `}
        >
          <Link href={'/'}>
          <div className="flex gap-1">
            <Image src={airbnb_logo} alt="airbnb_logo" width={30} height={20} />
            <p className="hidden lg:block text-secondary text-2xl font-bold ">
              airbnb
            </p>
          </div>
          </Link>
         

         
          
          <div className="flex flex-row gap-5">
            <p className="hidden lg:block pt-3 font-medium  underline">
              Redeem
            </p>
            <div
              className=""
            >
                <CommonButton  bg={"secondary"}
                  width={"40%"}
                  height={"12"}
                  type="button">
                    Buy gift card
                </CommonButton>
               
              
            </div>
          </div>
        </div>
        
      </div></> :   <Header />}
    </div>
  )
}

export default Rootheader