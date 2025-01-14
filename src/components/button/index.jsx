import React from 'react';

const redStyle = 'border-2 border-gray-400 text-red-500 rounded-lg hover:bg-red-500 hover:text-white hover:border-transparent transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-lg md:text-lg sm:text-sm md:px-4 sm:px-2 md:py-2 sm:py-1 whitespace-nowrap';

const whiteStyle = 'border-2 border-gray-400 text-almost-white rounded-lg hover:bg-sky-500 hover:text-white hover:border-transparent transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-lg md:text-lg sm:text-sm md:px-4 sm:px-2 md:py-2 sm:py-1 whitespace-nowrap';





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

