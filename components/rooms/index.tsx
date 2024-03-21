import React from "react";
import { GrFavorite } from "react-icons/gr";
import { IoShareSocial } from "react-icons/io5";
import RoomImage from "./room";
import ReservedCard from "./reservedcard";

const RoomDetails = () => {
  return (
    <div className="pt-5">
      <div className="flex flex-col-reverse md:flex-col">
        <div className="flex justify-between ">
          <p className="text-2xl font-bold flex justify-center items-center px-2 md:px-0 ">
            3-Potential for Noise, 2 bed on the beach w/ pool.
          </p>
          <div className="hidden md:block">
            <div className="  flex gap-2">
              <p className="font-medium flex ">
                {" "}
                <IoShareSocial
                  style={{ paddingTop: "5px", height: "20px", width: "20px" }}
                />
                Share
              </p>
              <p className="font-medium flex ">
                {" "}
                <GrFavorite
                  style={{ paddingTop: "5px", height: "20px", width: "20px" }}
                />
                Save
              </p>
            </div>
          </div>
        </div>

        <RoomImage />
      </div>

      <ReservedCard/>
      

      
    </div>
  );
};

export default RoomDetails;
