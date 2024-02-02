import React from 'react'

const About = () => {
  return (
    <div>
        <div className=' flex justify-center items-center  h-[800px] w-[400px] md:px-20'>
            <p className='text-2xl text-black'>hi this is jerry</p>
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