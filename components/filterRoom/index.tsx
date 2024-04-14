"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { productsFilterList } from "../common/carditem";
import CategoryList from "../category";
import Pagination from "../paginate";

const FilterRoom = () => {

  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const itemsPerPage: number = 8;
  const totalPages: number = Math.ceil(
    productsFilterList.length / itemsPerPage
  );

  // Slice the products based on the current page number
  const visibleItems = productsFilterList.slice(
    (currentPageNumber - 1) * itemsPerPage,
    currentPageNumber * itemsPerPage
  );

  const _handlePageClick = (data: { selected: number }) => {
    // console.log(data,"+++++++++++data")
    setCurrentPageNumber(data.selected + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; 

  return (
    <>
      <CategoryList />

      <div className="mt-20">
        <p className="font-medium  px-2 pb-[1px]">
          Over 1,000 places within map area
        </p>

        <div className="flex flex-col  md:flex-row justify-between gap-0 md:gap-2 w-full">
          {/* //1st div */}
          <div className="w-full md:w-2/3 ">
            <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  justify-items-center justify-center  gap-1    ">
              {visibleItems.map((item, i) => (
                <>
                  <div key={i} className={`  px-2 mb-10`}>
                    <Link href={"/rooms"}>
                      <div className="relative">
                        <Image
                          src={item?.images}
                          alt="cardimage"
                          className="rounded-lg h-[280px]"
                        />
                        <div className="absolute bg-primary rounded-xl p-[4px] top-[5%] left-[5%]">
                          <p className="font-medium text-sm">{item?.guest}</p>
                        </div>
                      </div>
                    </Link>

                    <div className="pt-2">
                      <div className="flex justify-between ">
                        <p className="text-sm font-medium ">{item?.title}</p>
                        <div className="flex justify-between text-sm font-normal gap-1 ">
                          <FaStar />
                          <Link href={"/login"}>
                            <p> {item?.rate}</p>
                          </Link>
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 font-normal">
                        {item?.destination}
                      </p>
                      <p className="text-sm text-slate-500 font-normal">
                        {item?.date}
                      </p>
                      <p className="text-sm pt-2 underline">
                        {" "}
                        <span className="font-bold">{item?.cost}</span>
                        {item?.tax}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex justify-center items-center  mb-5">
              <Pagination
                pageCount={totalPages}
                forcePage={currentPageNumber - 1}
                onPageChange={_handlePageClick}
                scrollToTop={scrollToTop}
              />
            </div>
          </div>
          {/* //2nd div */}
          <div className="w-1/3 rounded-md mt-20 hidden md:block">
            <div className="top-[130px] fixed  w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.690021795119!2d90.40564997511659!3d23.79405017864068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70937cf2973%3A0xb57c4554f38728d5!2sBanani%20Playground%2C%20Rd%20No%2027%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1711086553103!5m2!1sen!2sbd"
                height="450"
                className="rounded-md border-0 w-full md:w-full lg:w-[500px] mt-4 xl:w-[600px] allowFullScreen-0 h-[530px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterRoom;
