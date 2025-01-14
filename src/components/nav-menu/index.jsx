import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import { MenuItem } from '../menu-item';

export const NavMenu = ({ items = [], onClose }) => {
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      onClose(); 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={menuRef}
      className='flex flex-col 
      px-4 py-2
      bg-gray-900 drop-shadow rounded-lg 
      absolute top-10 right-0 w-44
      space-y-3 z-30 text-sky-500'>
        {items.map(({ text, icon, to }) => (
          <Link to={to} key={text} onClick={onClose}> 
            <MenuItem text={text} icon={icon} /> 
          </Link>
        ))}
    </div>
  );
};


