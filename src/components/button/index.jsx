import React from 'react';

const redStyle = `
  bg-transparent
  text-red-500 font-semibold
  rounded-lg
  border-2 border-red-500
  transform transition-all duration-300 ease-out
  hover:bg-red-500 hover:text-white
  hover:shadow-md
  active:scale-95
  md:text-lg sm:text-sm
  md:px-6 sm:px-4
  md:py-2 sm:py-1
  whitespace-nowrap
`;

const whiteStyle = `
  bg-transparent
  text-almost-white font-semibold
  rounded-lg
  border-2 border-gray-400
  transform transition-all duration-300 ease-out
  hover:bg-sky-500 hover:text-white hover:border-transparent
  hover:shadow-md
  active:scale-95
  md:text-lg sm:text-sm
  md:px-6 sm:px-4
  md:py-2 sm:py-1
  whitespace-nowrap
`;


export const Button = ({
  children = '',
  hasRedStyle = false,
  hasWhiteStyle = false,
  hasBlueStyle = false,
  isFilled = false,
  onClick,            
  className = '',      
  type = 'button',   
  ...props 
}) => {

  
  return (
    <button
      type={type}  
      onClick={onClick}  
      className={`px-5 py-2 text-lg tracking-wide
        ${hasRedStyle ? redStyle : ''}
        ${hasWhiteStyle ? whiteStyle : ''}
        ${className}`}      
      {...props}  
    >
      {children}
    </button>
  );
};

