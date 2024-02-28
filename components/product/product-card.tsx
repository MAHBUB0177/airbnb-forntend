'use client'
import React from 'react'
import { productsList } from '../common/carditem'



const ProductCard = () => {
  console.log(productsList,'productsList+++++++++++++++++')

  return (
    <div className=' flex justify-between flex-wrap mt-2'>

      {productsList?.map((item)=>
      <div className='flex justify-between flex-wrap flex-col md:flex-row'>
        <p>
          {item?.title}
        </p>
      </div>)}

    </div>
  )
}

export default ProductCard