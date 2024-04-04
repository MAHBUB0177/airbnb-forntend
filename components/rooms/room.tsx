import React from "react";
import image1 from "@/assets/images/rooms/image1.webp";
import image2 from "@/assets/images/rooms/image2.webp";
import image3 from "@/assets/images/rooms/image3.webp";
import image4 from "@/assets/images/rooms/image4.webp";
import image5 from "@/assets/images/rooms/image5.webp";
import Image from "next/image";

let imageList = [image2, image3, image4, image5];

const RoomImage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 w-full rounded-lg pt-5">
      <div className=" w-full  md:w-[50%] flex justify-center ">
        <Image src={image1} alt="cardimage" className=" h-auto" />
      </div>

      <div className="w-[50%] hidden md:block ">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  justify-items-center justify-center  gap-2">
          {imageList?.map((item, i) => (
            <div className="rounded-lg" key={i}>
              <Image
                src={item}
                alt="cardimage"
                className="w-[500px] h-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomImage;
