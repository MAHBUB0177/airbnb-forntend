import AirBnb from '@/components/airbnb'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata ={
  // title:'Host Your Home airbnb'
  title:{
      absolute:'Host Your Home airbnb'
  }
}

const page = () => {
  return (
    <div className=''>
      <AirBnb/>
    </div>
  )
}

export default page