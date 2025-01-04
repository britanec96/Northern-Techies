import React, { useState } from 'react';
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

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(''); 

  const handleSelect = (menu) => {
    setSelected(selected === menu ? '' : menu);
  };

  // Настройка наблюдателей для каждой секции
  const { ref: logoRef, inView: logoInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: navRef, inView: navInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <>
      <header className='bg-gray-800 bg-opacity-20 p-3 rounded-lg fixed top-0 container flex items-center my-4 z-50'>
        {/* Логотип с анимацией появления */}
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, y: -30 }} // Начальное положение (невидимый и чуть выше)
          animate={{ opacity: logoInView ? 1 : 0, y: logoInView ? 0 : -30 }} // Анимация появления
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="antialiased cursor-pointer tracking-widest mr-20"
        >
          <Link to="/">
            <h1 className="text-almost-white text-xl font-fira font-extrabold">{"<Northern>"}</h1>
            <h1 className="text-sky-500 text-xl -mt-2 font-fira font-extrabold">{"</Techies>"}</h1>
          </Link>
        </motion.div>

        {/* Навигационное меню с анимацией появления */}
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: -30 }} // Начальное положение (невидимый и чуть выше)
          animate={{ opacity: navInView ? 1 : 0, y: navInView ? 0 : -30 }} // Анимация появления
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='hidden xl:flex space-x-6 items-center'
        >
          <NavItem text='Company' onSelect={handleSelect} selected={selected}>
            <NavMenu items={FEATURES} onClose={() => setSelected('')} />
          </NavItem>
          <NavItem text='Services' onSelect={handleSelect} selected={selected}>
            <NavMenu items={COMPANY} onClose={() => setSelected('')} />
          </NavItem>
          <NavItem text='Portfolio' to="/portfolio" />
          <NavItem text='About' to="/about" />
          <NavItem text='Contact Us' to="/contact" />
        </motion.nav>

        {/* Кнопка заказа с анимацией появления */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Начальное состояние (не видно и немного уменьшено)
          animate={{ opacity: navInView ? 1 : 0, scale: navInView ? 1 : 0.8 }} // Анимация появления
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="hidden ml-auto xl:flex space-x-5"
        >
          <Link to="/order" className='antialiased cursor-pointer tracking-widest mr-20'>
            <Button hasWhiteStyle={true}>
              Order
            </Button>
          </Link>
        </motion.div>

        {/* Иконка мобильного меню с анимацией */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Начальное состояние
          animate={{ opacity: logoInView ? 1 : 0, scale: logoInView ? 1 : 0.8 }} // Анимация появления
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
