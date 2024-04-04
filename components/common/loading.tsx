"use client";
import React, { useEffect, useState } from "react";

const Loading = () => {
  // Example 3: Using arrow function (ES6+)
//   const [isLoading, setIsloading] = useState(false);
//   console.log(isLoading,'isLoading+++++++++++++')

//   useEffect(() => {
//     setIsloading(true);
//   });
//   setTimeout(() => {
//     console.log("This will be executed after 4 seconds.");
//     setIsloading(false);
//   }, 10000);

  return (
    <>
      {/* {isLoading && (
        <div className="bg-red-400 flex justify-center items-center">
          loading......
        </div>
      )} */}
       <div className="bg-red-400 flex justify-center items-center">
          loading......
        </div>
    </>
  );
};

export default Loading;
