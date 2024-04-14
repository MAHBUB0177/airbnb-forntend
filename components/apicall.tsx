'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import {baseurl} from '../env'

const Apicall = () => {
  const[data,setData]=useState()
  const[ok,setok]=useState(false)
  console.log(data,'data++++++++++++++++')
  // useEffect(() => {
  //   axios.get(`${baseurl}/api/products/`).then((res) =>
  //   setData(res?.data)
  //     // console.log('first++++++++++', res?.data)
  //   );
  // }, []);
  return (
    <>
  <div className="bg-slate-200 shadow-md rounded-md h-[200px] w-[300px] flex justify-center items-center">
    <p className="text-2xl text-red-200">hello jerry {ok}</p>
  </div>

  <div className="bg-white shadow-md rounded-md h-[200px] w-[300px] flex justify-center items-center">
    <p className="text-2xl text-red-200">hello jerry</p>
  </div>

  {/* <div className="mb-[10px]">
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      forcePage={forcePage}
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      containerClassName={"flex justify-between pagination  px-4 py-1 ml-2"}
      activeClassName={"bg-bgsecondarylight rounded-full  text-white  h-[30px] w-[30px] flex justify-center items-center"}
    //   previousClassName={"border border-gray-300 rounded px-2 py-1 mr-2"}
    //   nextClassName={"border border-gray-300 rounded px-2 py-1 ml-2"}
    //   breakClassName={"mr-5"}
      pageClassName={"mr-5"}
    //   previousLinkClassName={"text-blue-500 b"}
    //   nextLinkClassName={"text-blue-500 "}
    />
    </div> */}

{/* <ReactPaginate
        pageCount={pageCount}
        onPageChange={onPageChange}
        forcePage={forcePage}
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        containerClassName={"hidden"}
        activeClassName={"hidden"}
        previousClassName={"hidden"}
        nextClassName={"hidden"}
        breakClassName={"hidden"}
        pageClassName={"hidden"}
        previousLinkClassName={"hidden"}
        nextLinkClassName={"hidden"}
      /> */}
    </>
   
  )
}

export default Apicall