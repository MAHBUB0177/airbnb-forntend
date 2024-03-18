import { Button } from 'antd'
import React from 'react'

interface CommonButtonProps {
    children: React.ReactNode;
    bg: string;
    width?: string; // Optional width prop
    height?: string; 

  }

const CommonButton = ({children,bg,width,height}:CommonButtonProps) => {
  return (
    <div>
        <button className={`bg-${bg} ${height ? `h-${height}` : 'h-auto'} text-white p-3 rounded-md w-[325px]`} >
        {children}
      </button>

    </div>
  )
}

export default CommonButton;