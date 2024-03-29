import React from 'react';

interface CommonButtonProps {
  children: React.ReactNode;
  bg: string;
  type?: 'button' | 'submit' | 'reset'; 
  width?: string;
  height?: string;
  padding?:string,
  onClick?: () => void; // Define onClick event handler
}

const CommonButton = ({ children, bg, type, width, height, onClick }: CommonButtonProps) => {
  return (
    <div>
      <button
        type={type ? type : 'button'} // Set the type attribute based on the prop, defaulting to 'button'
        className={`bg-${bg} ${height ? `h-${height}` : 'h-auto'} ${width ? `w-${width}` : 'w-auto'}  text-white p-3 font-semibold hover:none rounded-md`}
        onClick={onClick} // Add onClick event handler to the button
      >
        {children}
      </button>
    </div>
  );
};

export default CommonButton;
