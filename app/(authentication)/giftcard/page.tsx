import GiftCard from '@/components/giftcard'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata ={
  title:'Buy And Airbnb Giftcard'
  // title:{
  //     absolute:'Buy And Airbnb Giftcard'
  // }
}

const page = () => {
  return (
    <div className='md:px-10 lg:px-20  pt-10'>
        <GiftCard/>
    </div>
  )
}

export default page