import React from "react";
import ProductCard from "./product/product-card";
import CategoryList from "@/components/category";

const LandingPage = () => {
  return (
    <>
      <CategoryList />
      <div className="mt-20">
      <ProductCard />

      </div>
    </>
  );
};
export default LandingPage;
