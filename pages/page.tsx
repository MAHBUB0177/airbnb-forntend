
import React from 'react'
import ProductCard from './product/product-card';
import CategoryList from '../app/category/page';

const LandingPage = () => {
  return (
    <div className=' pt-[58px] md:pt-[70px] bg-primary '>
      <CategoryList/>
      <ProductCard />
    </div>
  )
}
export default LandingPage;