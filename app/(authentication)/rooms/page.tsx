import React from "react";
import RoomDetails from "@/components/rooms";
import { Metadata } from 'next';

export const metadata: Metadata ={
    title:'rooms'
}

const page = () => {
  return (
    <div className="md:px-10 lg:px-20px xl:px-[185px]">
      <RoomDetails />
    </div>
  );
};
export default page;
