import FilterRoom from "@/components/filterRoom";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata ={
  title:'Airbnb | Vacation rentals,cabin' 
}
const page = () => {
  return <FilterRoom />;
};

export default page;
