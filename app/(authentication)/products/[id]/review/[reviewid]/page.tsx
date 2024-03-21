import React from 'react'

const page = ({params}:{params:{id:string,reviewid:string}}) => {
  return (
    <div className='flex justify-center pt-5'>Review {params?.reviewid} for product {params?.id}</div>
  )
}

export default page