import React from 'react'
import errorpage from '@/assets/images/errorpage/404-error-page-templates.jpg'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center min-h-screen mx-auto'>
       <Image src={errorpage} alt='error page'/>
        </div>
  )
}

export default NotFound