import React from "react";
import ProductCard from "./product/product-card";
import CategoryList from "@/components/category";

const LandingPage = () => {
  return (
    <>
      <CategoryList />
      <ProductCard />
    </>
  );
};
export default LandingPage;
