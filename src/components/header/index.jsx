import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg';

import { NavItem } from '../nav-item';
import { NavMenu } from '../nav-menu';
import { COMPANY, FEATURES } from './constants';
import { Button } from '../button';
import { MobileMenu } from '../mobile-menu';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Logo from '../../images/Logo.svg'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [isScrolled, setIsScrolled] = useState(false); // Для отслеживания прокрутки

  const handleSelect = (menu) => {
    setSelected(selected === menu ? '' : menu);
  };

  // Настройка наблюдателей для секций
  const { ref: logoRef, inView: logoInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: navRef, inView: navInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Отслеживание скролла
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`p-3 rounded-lg fixed container top-0 flex items-center justify-between my-4 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-gray-900 bg-opacity-80' : 'bg-gray-900 bg-opacity-30'
        }`}
      >
        {/* Логотип с анимацией появления */}
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: logoInView ? 1 : 0, y: logoInView ? 0 : -30 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="antialiased cursor-pointer tracking-widest"
        >
<Link to="/" className="group">
  <div className="flex w-48 md:w-52 items-center justify-center">
    <img 
      src={Logo} 
      alt="Company Logo" 
      className="h-auto w-full object-contain transition-transform duration-200 group-hover:scale-105" 
    />
  </div>
</Link>
        </motion.div>

        {/* Навигационное меню */}
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: navInView ? 1 : 0, y: navInView ? 0 : -30 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="hidden xl:flex space-x-6 items-center"
        >
          <NavItem text="Company" onSelect={handleSelect} selected={selected}>
            <NavMenu items={FEATURES} onClose={() => setSelected('')} />
          </NavItem>
          <NavItem text="Services" onSelect={handleSelect} selected={selected}>
            <NavMenu items={COMPANY} onClose={() => setSelected('')} />
          </NavItem>
          <NavItem text="About" to="about-us/about" />
          <NavItem text="Contact Us" to="/about-us/contact-us" />
        </motion.nav>

        {/* Кнопка заказа */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: navInView ? 1 : 0, scale: navInView ? 1 : 0.8 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="hidden xl:flex"
        >
          <Link to="/services/customize-your-order" className="antialiased cursor-pointer tracking-widest">
            <Button hasWhiteStyle={true}>Get Started</Button>
          </Link>
        </motion.div>

        {/* Иконка мобильного меню */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: logoInView ? 1 : 0, scale: logoInView ? 1 : 0.8 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="flex xl:hidden ml-auto cursor-pointer z-30"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
        </motion.div>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </header>
    </>
  );
};
