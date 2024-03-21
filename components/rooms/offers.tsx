import React from "react";
import { CiFilter } from "react-icons/ci";
import { LuFlower2 } from "react-icons/lu";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import { PiAlarmThin } from "react-icons/pi";

import { CiWifiOn } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";
import { MdSevereCold } from "react-icons/md";
import { LuPalmtree } from "react-icons/lu";
import { BiAlarmOff } from "react-icons/bi";

const offerList1 = [
  {
    title: "Courtyard view",
    icon: LuFlower2,
  },
  {
    title: "Dedicated workspace",
    icon: BsPersonWorkspace,
  },
  {
    title: "Free dryer – In building",
    icon: FaRegBuilding,
  },
  {
    title: "Shared patio or balcony",
    icon: MdBalcony,
  },
  {
    title: "Carbon monoxide alarm",
    icon: PiAlarmThin,
  },
];

const offerList2 = [
  {
    title: "Wifi",
    icon: CiWifiOn,
  },
  {
    title: "Free parking on premises",
    icon: FaCarAlt,
  },
  {
    title: "AC - split type ductless system",
    icon: MdSevereCold,
  },
  {
    title: "Backyard",
    icon: LuPalmtree,
  },
  {
    title: "alarmSmoke alarm",
    icon: BiAlarmOff,
  },
];

const Offers = () => {
  return (
    <div className="pt-5 ">
      <p className="text-2xl font-medium">What this place offers</p>
      <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-2 pb-2">
        <div className="pt-3 ">
          {offerList1.map((item, i) => (
            <div className="flex gap-8 pt-2">
              {item.icon && (
                <item.icon
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                  className="text-textprimary"
                />
              )}
              <p className="text-[16px] text-slate-800 font-base ">
                {item?.title}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-3 ">
          {offerList2.map((item, i) => (
            <div className="flex gap-8 pt-2">
              {item.icon && (
                <item.icon
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                  className="text-textprimary"
                />
              )}
              <p className="text-[16px] text-slate-800 font-base">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-[1px] border-slate-500 rounded-md flex justify-center items-center w-[200px] p-3 mt-2">
        <p className="text-md font-semibold">Show All 21 Animates</p>

      </div>

     
    </div>
  );
};

export default Offers;
