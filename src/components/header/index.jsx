import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg';
import { NavItem } from '../nav-item';
import { NavMenu } from '../nav-menu';
import { COMPANY, FEATURES } from './constants';
import { Button } from '../button';
import { MobileMenu } from '../mobile-menu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(''); 

  const handleSelect = (menu) => {
    setSelected(selected === menu ? '' : menu);
  };

  return (
    <>
  <header className='fixed top-0 container flex items-center my-4 z-50'>
    <Link to="/" className='antialiased cursor-pointer tracking-widest mr-20'>
      <h1 className="text-almost-white text-xl font-fira font-extrabold">{"<Northern>"}</h1>
      <h1 className="text-sky-500 text-xl -mt-2 font-fira font-extrabold">{"</Techies>"}</h1>
    </Link>
    <nav className='hidden xl:flex space-x-6 items-center'>
      <NavItem text='Company' onSelect={handleSelect} selected={selected}>
        <NavMenu items={FEATURES} onClose={() => setSelected('')} />
      </NavItem>
      <NavItem text='Services' onSelect={handleSelect} selected={selected}>
        <NavMenu items={COMPANY} onClose={() => setSelected('')} />
      </NavItem>
      <NavItem text='Portfolio' to="/portfolio" />
      <NavItem text='About' to="/about" />
      <NavItem text='Contact Us' to="/contact" />
    </nav>
    <div className="hidden ml-auto xl:flex space-x-5">
      <Link to="/order" className='antialiased cursor-pointer tracking-widest mr-20'>
        <Button hasWhiteStyle={true}>
          Order
        </Button>
      </Link>
    </div>
    <div 
      className="flex xl:hidden ml-auto cursor-pointer z-30"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
    </div>
    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
  </header>
</>

  );
};
