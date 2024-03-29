"use client";
import React from "react";
import image1 from "@/assets/images/giftcard/giftcard2.webp";
import image2 from "@/assets/images/giftcard/giftcard.webp";
import Image from "next/image";

import giftcard1 from "@/assets/images/giftcard/giftcard1.webp";
import giftcard2 from "@/assets/images/giftcard/giftcard2.webp";
import giftcard3 from "@/assets/images/giftcard/giftcard3.webp";
import giftcard4 from "@/assets/images/giftcard/giftcard4.webp";
import giftcard5 from "@/assets/images/giftcard/giftcard5.webp";
import giftcard6 from "@/assets/images/giftcard/giftcard6.webp";

import slider1 from "@/assets/images/giftcard/slider1.webp";
import slider2 from "@/assets/images/giftcard/slider2.webp";
import Slider from "react-slick";
import Faq from "./faq";
let sliderImage = [
  {
    image: slider1,
    title: "A Key to the world ",
    subtitle: "Of Airbnb",
  },
  {
    image: slider2,
    title: "Great places ",
    subtitle: "to stay",
  },
];

let giftCard = [
  giftcard1,
  giftcard2,
  giftcard3,
  giftcard4,
  giftcard5,
  giftcard6,
];

const GiftCard = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };
  return (
    <div className="h-auto">
      <div className="mb-[100px]">
        <div className="flex justify-center items-center mx-auto md:mt-5 md:mb-8 ">
          <p className="text-8xl font-bold">
            Airbnb <br />
            gift cards
          </p>
        </div>
        <div className="flex justify-center md:mb-10 ">
          <div className="relative">
            <Image
              src={giftcard6}
              alt="giftcard"
              style={{ transform: "rotate(-10deg)", height: "250px" }}
            />
            <div className="absolute">
              <Image
                src={giftcard2}
                alt="giftcard"
                style={{ transform: "rotate(10deg)", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-[300px]">
        <p className="flex justify-center items-center text-6xl font-bold ">
          Easy to give. Easy to love.
        </p>
        <p className="flex justify-center items-center text-6xl font-bold pb-8">
          Never expires.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {giftCard?.map((item, i) => (
            <div key={i}>
              <Image src={item} alt="i" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-20">
        <Slider {...settings}>
          {sliderImage?.map((item, i) => (
            <>
              <div className="relative">
                <Image
                  src={item?.image}
                  alt="cardimage"
                  className="rounded-lg h-[350px]"
                />
                <div className="absolute rounded-xl p-[4px] top-[15%] left-[10%] ">
                  <p className="font-bold text-5xl text-white">{item?.title}</p>
                  <p className="font-bold text-5xl text-white">
                    {item?.subtitle}
                  </p>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>

      <Faq/>
    </div>
  );
};

export default GiftCard;
