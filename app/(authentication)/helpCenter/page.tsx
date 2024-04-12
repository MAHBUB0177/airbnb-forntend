import HelpCenter from '@/components/helpCenter'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata ={
  // title:'GiftCard'
  title:{
      absolute:'Customer service-Airbnb home'
  }
}

const page = () => {
  return (
    <div className='pt-10'>
        <HelpCenter/>
    </div>
  )
}

export default page