'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {baseurl} from '../env'

const Apicall = () => {
  const[data,setData]=useState()
  // console.log(data,'data++++++++++++++++')
  useEffect(() => {
    axios.get(`${baseurl}/api/products/`).then((res) =>
    setData(res?.data)
      // console.log('first++++++++++', res?.data)
    );
  }, []);
  return (
    <>
  <div className="bg-slate-200 shadow-md rounded-md h-[200px] w-[300px] flex justify-center items-center">
    <p className="text-2xl text-red-200">hello jerry</p>
  </div>

  <div className="bg-white shadow-md rounded-md h-[200px] w-[300px] flex justify-center items-center">
    <p className="text-2xl text-red-200">hello jerry</p>
  </div>
    </>
   
  )
}

export default Apicall