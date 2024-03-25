import React from 'react'
import { Metadata } from 'next'


//dynamic metadata genereted function
export const generateMetadata=({params}:{params:{id:string}}):Metadata=>{
  return{
    title:`product ${params?.id}`
  }
}

const ProductDetails = ({params}:{params:{id:string}}) => {
  return (
    <div className='pt-5 flex justify-center items-center'>product details product no: {params?.id}</div>
  )
}

export default ProductDetails