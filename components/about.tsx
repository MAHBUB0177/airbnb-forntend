'use client'
import React, { useState } from 'react'

const About = () => {
    const [change, setChange] = useState(false);

    const handleButtonClick = () => {
        setChange(true);
    };
  return (
    <div>
        <div className=' flex justify-center items-center  h-[300px] w-[400px] md:px-20'>
            <button className='bg-red-400 rounded-md w-[150px]' onClick={handleButtonClick}>
                    button
            </button>

        </div>
       
    </div>
  )
}
export default About;