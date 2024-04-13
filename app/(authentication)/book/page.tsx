import OrderPage from '@/components/order'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata ={
    title:'Request to Book'
    // title:{
    //     absolute:'Order'
    // }
}
const page = () => {
  return (
    <div className='md:px-10 lg:px-20 xl:px-[170px]'>
      <OrderPage/>
    </div>
  )
}

export default page