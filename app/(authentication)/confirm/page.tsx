import ConfirmPay from '@/components/confirmpay'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata ={
  // title:'Confirm and Pay'
  title:{
      absolute:'Confirm and Pay'
  }
}

const page = () => {
  return(
    <div className='md:px-10 lg:px-20 xl:px-[170px] pt-10'>
   <ConfirmPay/>
    </div>
  )
}

export default page