import React from 'react'



const ProductDetails = ({params}:{params:{id:string}}) => {
  return (
    <div className='pt-5 flex justify-center items-center'>product details product no: {params?.id}</div>
  )
}

export default ProductDetails