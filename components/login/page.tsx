'use client'
import { setAuth } from '@/redux/reducer/authReducer';
import { message, notification } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CommonButton from '../common/cummonbutton';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
interface loginProps{
    setIsModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const CommonLogin = ({setIsModalOpen}:loginProps) => {
 
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const LoginNow = async () => {
  //   let payload = {
  //     username: email, //kminchelle
  //     password: password, //0lelplR
  //   };
  //   if (email === "" || password === "") {
  //   //    message.error("User Name Or Password Missing");
  //      return notification.error({
  //       message: "User Name Or Password Missing",
  //       placement: "bottomRight", // Set the placement to bottomLeft
  //     });
  //   }
  //   await axios
  //     .post("https://dummyjson.com/auth/login", payload, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       if (response?.data) {
  //       //   message.success("User Successfully Logged In");
  //         notification.success({
  //           message: "User Successfully Logged In",
  //           placement: "bottomRight", // Set the placement to bottomLeft
  //         });
  //         setIsModalOpen(false)
  //         dispatch(setAuth(response?.data));
  //       }
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("An error occurred:", error);
  //       message.error("Something Went Wrong");
  //     });
  // };


  const LoginNow = async () => {
    let payload = {
      username: email, //kminchelle
      password: password, //0lelplR
      expiresInMins: 30, // optional, defaults to 60
    };
  
    if (email === "" || password === "") {
      // Notify user if email or password is missing
      return notification.error({
        message: "User Name Or Password Missing",
        placement: "bottomRight", // Set the placement to bottomLeft if needed
      });
    }
  
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response?.data) {
        notification.success({
          message: "User Successfully Logged In",
          placement: "bottomRight", // Set the placement to bottomLeft if needed
        });
        setIsModalOpen(false);
        dispatch(setAuth(response.data));
      }
  
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred:", error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <div>
        
          <div className=" border-t-[1px] border-slate-300"></div>
          <p className="text-2xl font-semibold pt-1 pb-1">Welcome to Airbnb</p>
          <div>
            <div className=" mt-2  border border-slate-300 w-100% rounded-md ">
              <div className="bg-white rounded-lg p-2 ">
                <form className="">
                  <div>
                    <label className="block text-textprimary font-bold mb-2">
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-300"
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-textprimary font-bold mb-2">
                      Password
                    </label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-300"
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>

            <p className="text-xs text-textprimary pt-1 ">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
              <span className="font-semibold  underline">
                Privacy Policy{" "}
              </span>{" "}
            </p>

            <div className="mt-3">
              <CommonButton
                bg={"secondary"}
                width={"full"}
                height={"12"}
                onClick={LoginNow}
                type={"submit"}
              >
                Continue
              </CommonButton>
            </div>

            <div className="relative w-full mt-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white">Or continue with</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-full  p-3 mt-2">
                <p className="text-md font-semibold text-sky-500">
                  <FaSquareFacebook className="h-[20px] w-[20px]" />
                </p>
              </div>

              <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-full  p-3 mt-2">
                <p className="text-md font-semibold">
                  <FcGoogle className="h-[20px] w-[20px]" />
                </p>
              </div>

              <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-full p-3 mt-2">
                <p className="text-md font-semibold">
                  <FaApple className="h-[20px] w-[20px]" />
                </p>
              </div>
            </div>
            <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-[100%] mt-3 p-3 ">
              <p className="text-sm font-semibold flex gap-2">
                {" "}
                <MdOutlineMail className="h-[20px] w-[20px] " />
                Continue with email
              </p>
            </div>
          </div>
       
    </div>
  )
}

export default CommonLogin;