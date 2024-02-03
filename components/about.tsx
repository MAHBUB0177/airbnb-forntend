'use client'
import React, { useState } from 'react'

const About = () => {
    const [change, setChange] = useState(false);
    console.log(change,'++++++++++++')

    const handleButtonClick = () => {
        setChange(true);
    };
  return (
    <div>
        <div className=' flex justify-center items-center  h-[800px] w-[400px] md:px-20'>
            <p className='text-2xl text-black'>hi this is jerry</p>
            <button className='bg-red-400 rounded-md w-[150px]' onClick={handleButtonClick}>
                    button
                </button>

        </div>
        <div className='flex flex-row justify-between p-5 border-2 border-slate-300 '>
            <div className='flex-3 bg-slate-400 text-2xl p-5 shadow-md rounded-md'>
                hi i a jerry

            </div>
            <div className='bg-red-600 text-2xl p-5 shadow-md rounded-md'>
                tom
            </div>

        </div>
    </div>
  )
}
export default About;