"use client";
import { IconType } from "react-icons";

import React from "react";
import Slider from "react-slick";

interface Category {
  title: string;
  icon: IconType;
}
import { FaHotel } from "react-icons/fa";
import { FaGolfBallTee, FaKitchenSet } from "react-icons/fa6";
import { GiStoneTower } from "react-icons/gi";
import { MdOutlineBathroom } from "react-icons/md";
import { TiNews } from "react-icons/ti";
import { IoFilterSharp } from "react-icons/io5";
import ProductCard from "./product/product-card";

const categoryList: Category[] = [
  { title: "Hotels", icon: FaHotel },
  { title: "Golfing", icon: FaGolfBallTee },
  { title: "Rooms", icon: MdOutlineBathroom },
  { title: "News", icon: TiNews },
  { title: "Kitchen", icon: FaKitchenSet },
  { title: "Towers", icon: GiStoneTower },

  { title: "Hotels", icon: FaHotel },
  { title: "Golfing", icon: FaGolfBallTee },
  { title: "Rooms", icon: MdOutlineBathroom },
  { title: "News", icon: TiNews },
  { title: "Kitchen", icon: FaKitchenSet },
  { title: "Towers", icon: GiStoneTower },

  { title: "Hotels", icon: FaHotel },
  { title: "Golfing", icon: FaGolfBallTee },
  { title: "Rooms", icon: MdOutlineBathroom },
  { title: "News", icon: TiNews },
  { title: "Kitchen", icon: FaKitchenSet },
  { title: "Towers", icon: GiStoneTower },
];

const CategoryList = () => {
  const settings = {
    // dots: true,
    infinite: false,
    // speed: 500,
    slidesToShow: 10,
    slidesToScroll:1,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:px-10 lg:px-20 md:py-2 mt-[70px] mb-[20px] top-0 w-[100%] fixed ">
      <div className="flex justify-between w-[100%] border-b-[1px] border-slate-300 mb-2">
        <div className="w-[85%] ">
        <Slider {...settings}>
        {categoryList?.map((item, i) => (
          <>
            <div className="flex justify-between items-center" key={i}>
              <div>
                <p className="flex justify-center items-center ">
                {item.icon && <item.icon  style={{height:'30px',width:'30px',color:'#FD375C'}}/>}
                </p>
                <p className="text-sm text-textprimary">{item.title}</p>
              </div>
            </div>
          </>
        ))}
      </Slider>
        </div>

        <div className=" hidden md:flex w-[10%] border-[1px] border-slate-300 rounded-md  justify-center items-center">
        <IoFilterSharp style={{height:'30px' ,width:'30px',color:'#FD375C'}}/>
          <p className="text-md">Filter</p>
          
        </div>


      </div>
      <ProductCard /> 
    </div>
  );
};

export default CategoryList;
