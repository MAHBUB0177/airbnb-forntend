import GiftCard from '@/components/giftcard'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata ={
  // title:'GiftCard'
  title:{
      absolute:'GiftCard'
  }
}

const page = () => {
  return (
    <div className='md:px-10 lg:px-20  pt-10'>
        <GiftCard/>
    </div>
  )
}

export default page