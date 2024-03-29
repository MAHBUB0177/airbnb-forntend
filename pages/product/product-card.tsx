"use client";
import React, { useState } from "react";
import Image from "next/image";
import { productsList } from "@/components/common/carditem";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import FooterGetway from "@/components/layout/footerGetway";
import CommonButton from "@/components/common/cummonbutton";

const ProductCard = () => {
  const itemsPerPage = 12;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  // console.log(visibleItems,'visibleItems',productsList?.length)
  const[load,setLoad]=useState<boolean>(false)

  // // Calculate whether the last index is reached
  // const [lastIndexReached, setLastIndexReached] = useState(false);

const last= visibleItems == productsList.length;

  const handleLoadMore = () => {
    setLoad(true);
    setTimeout(() => {
      setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
      setLoad(false);

       // Check if the last index is reached after updating visibleItems
      //  if (visibleItems == productsList.length) {
      //   setLastIndexReached(true);
      // }
    }, 3000);
  };

  return (
    <div>
      <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center justify-center  gap-4 mb-5   md:px-10 lg:px-20 ">
        {productsList?.slice(0, visibleItems).map((item, i) => (
          <>
            <div key={i} className={` mt-6 px-2 mb-10`}>
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
      <div className="my-2 ">
      <p className="flex justify-center font-semibold ">Continue exploring OMG! homes</p>
     <div className="flex justify-center pt-2">
     <button
          className="bg-bgsecondarylight text-white font-semibold rounded-md w-[140px]  p-4 "
          onClick={handleLoadMore}
          disabled={last ? true : false}
        >
          {load ? (
            <p>
              <span className="mb-2"> Loading...</span>
            </p>
          ) : (
            " Show More"
          )}
        </button>

        
     </div>
       
      </div>

      <div>
      <FooterGetway/>
      </div>
    </div>
  );
};

export default ProductCard;
