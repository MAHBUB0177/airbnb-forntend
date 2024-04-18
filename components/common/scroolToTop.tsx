'use client'
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; 

const ScroolToTop = () => {
const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
        {isVisible && (
        <div
          className=" fixed bottom-32 md:bottom-20 right-5  rounded-full bg-bgsecondarylight shadow-lg w-[50px] h-[50px] flex justify-center p-4 cursor-pointer items-center"
          onClick={scrollToTop}
        >
          
          <IoIosArrowUp  className="text-[60px] text-white font-bold "/>
        </div>
      )}
    </div>
  )
}

export default ScroolToTop;