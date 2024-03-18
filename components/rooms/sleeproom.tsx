import React from 'react'
import sleepimage1 from '@/assets/images/rooms/sleeproom/sleepimage1.webp'
import sleepimage2 from '@/assets/images/rooms/sleeproom/sleepimage2.webp'
import Image from 'next/image'
let SleproomList=[{image:sleepimage1,title:'Living area',desc:'1 sofa bed'},{image:sleepimage2,title:'Beadroom area',desc:'1 queen bed, 2 couches, 1 hammock'}]

const Sleeproom = () => {
  return (
    <div className='pt-10'>
        <p className='text-2xl font-semibold'>Where you'll sleep</p>
        <div className=' justify-items-center justify-center  gap-4  grid  md:grid-cols-2 pt-3'>
            {
                SleproomList?.map((item,i)=>
                <div>
                    <Image  src={item?.image} alt='slleproom' className="rounded-lg h-[240px]"/>
                    <p className='font-medium pt-1'>{item?.title}</p>
                    <p className='text-textprimary'>{item?.desc}</p>
                    
                    </div>)
            }


        </div>

    </div>
  )
}

export default Sleeproom