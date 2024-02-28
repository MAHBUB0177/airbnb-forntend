

import { IconType } from "react-icons";

import React from 'react';
import Slider from 'react-slick';




interface Category {
  title: string;
  icon: IconType;
}
import { FaHotel } from "react-icons/fa";
import { FaGolfBallTee, FaKitchenSet } from "react-icons/fa6";
import { GiStoneTower } from "react-icons/gi";
import { MdOutlineBathroom } from "react-icons/md";
import { TiNews } from "react-icons/ti";
const categoryList: Category[] = [
  { title: "Hotels", icon: FaHotel },
  { title: "Golfing", icon: FaGolfBallTee },
  { title: "Rooms", icon: MdOutlineBathroom },
  { title: "News", icon: TiNews },
  { title: "Kitchen", icon: FaKitchenSet },
  { title: "Towers", icon: GiStoneTower },
];

const CategoryList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
        <Slider {...settings}>
        <div className="flex justify-overlay gap-4 items-center">
        {categoryList.map((item, i) => (
          <div key={i}>
            <p className="flex justify-between items-center">
              {item.icon && <item.icon />}
            </p>
            <p className="text-sm text-textprimary">{item.title}</p>
          </div>
        ))}
      </div>
        </Slider>
      


    </div>
  );
};

export default CategoryList;
