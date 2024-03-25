// 'use client'
import Image from 'next/image'
import React from 'react'


//static metadata object for each page
export const metadata={
    // title:'About'
    title:{
        absolute:'About'
    }
}

const About = () => {
  return (
    <>

<div  className="h-screen relative flex flex-col justify-center items-center mx-auto  md:pt-[70px] w-full bg-primary">

   
<div>
    this is image link page
</div>
    {/* <div
        className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
            <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            <div className="mt-8">
                <a href="#"
                    className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                    More</a>
            </div>
        </div>
    </div> */}

</div></>
  )
}

export default About;