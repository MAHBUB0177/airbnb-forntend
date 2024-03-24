'use client'

import { Form, Input, Select } from 'antd';

import React from 'react'
import { FaApple } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMail } from 'react-icons/md';

const Login = () => {
    const onFinish = () => {
        console.log('first')
    }
  return (
    <div className='pt-8 mb-10'>
        <p className='text-2xl font-medium'>Log in or sign up to book</p>
        <div className=' mt-4 pt-4 border border-slate-300 w-100% rounded-md h-[100px]'>
            <p className='flex justify-center'>this is select </p>

            <p className='flex justify-center border-t-[1px] border-slate-300'>this is input </p>
        {/* <Form onFinish={onFinish} className='border border-slate-300 w-100% rounded-md '>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
             <Select
                size="large"
                className="w-full h-[100px] border-none"
                placeholder="Passenger Type"
                
              >
               
                  <Select.Option >
                   select
                  </Select.Option>
                
              </Select>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              className="w-[310px] h-[40px] border-none"
              placeholder="Password"
             
            />
          </Form.Item>

          
        </Form> */}

        </div>
        <p className='text-xs text-textprimary pt-1 '>We’ll call or text you to confirm your number. Standard message and data rates apply.<span className='font-semibold  underline'>Privacy Policy </span> </p>

        <button
            className="bg-secondary w-[100%] h-12 text-white font-semibold hover:none rounded-md mt-3"
            type="submit"
          >
            Continue
          </button>

          <div className="relative w-full mt-3">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white">
                            Or continue with
                        </span>
                    </div>
            </div>

            <div className='flex justify-between gap-1'>
            <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-[200px] p-3 mt-2">
          <p className="text-md font-semibold text-sky-500"><FaSquareFacebook className='h-[20px] w-[20px]' /></p>
        </div>

        <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-[200px] p-3 mt-2">
          <p className="text-md font-semibold"><FcGoogle  className='h-[20px] w-[20px]'/></p>
        </div>

        <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-[200px] p-3 mt-2">
          <p className="text-md font-semibold"><FaApple className='h-[20px] w-[20px]'/></p>
        </div>
            </div>
            <div className="cursor-pointer border-[1px] border-slate-500 rounded-md flex justify-center items-center w-[100%] mt-3 p-3 ">
          <p className="text-sm font-semibold flex gap-2"> <MdOutlineMail className='h-[20px] w-[20px] '/>Continue with email</p>
        </div>


    </div>
  )
}

export default Login