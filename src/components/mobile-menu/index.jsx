import React from 'react';
import { NavItem } from '../nav-item';
import { COMPANY, FEATURES } from '../header/constants';
import { MenuItem } from '../menu-item';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Для анимации

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.6 },
};

const menuVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const MobileMenu = ({ isOpen = false, onClose }) => {
  const [selected, setSelected] = React.useState('');

  const handleSelect = (menu) => {
    setSelected(selected === menu ? '' : menu);
  };

  return (
    <>
      {/* Полупрозрачный фон */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black z-30"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        ></motion.div>
      )}

      {/* Само меню */}
      <motion.div
        className="fixed right-0 top-0 w-4/5 max-w-[320px] bg-gray-900 text-white z-40 shadow-lg h-full flex flex-col py-8 px-6"
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        exit="hidden"
      >
        <nav className="flex flex-col space-y-6 text-lg">
          <NavItem text="Company" onSelect={handleSelect} selected={selected}>
            <motion.div className="flex flex-col mt-4 space-y-3 pl-4 text-sky-500">
              {FEATURES.map(({ text, icon, to }) => (
                <Link to={to} key={text}>
                  <MenuItem text={text} icon={icon} />
                </Link>
              ))}
            </motion.div>
          </NavItem>

          <NavItem text="Services" onSelect={handleSelect} selected={selected}>
            <motion.div className="flex flex-col mt-4 space-y-3 pl-4 text-sky-500">
              {COMPANY.map(({ text, icon, to }) => (
                <Link to={to} key={text}>
                  <MenuItem text={text} icon={icon} />
                </Link>
              ))}
            </motion.div>
          </NavItem>

          <Link to="about-us/about">
            <NavItem text="About" />
          </Link>
          <Link to="/about-us/contact-us">
            <NavItem text="Contact Us" />
          </Link>

          <div className="mt-auto pt-6">
            <Link to="/services/customize-your-order">
              <Button hasWhiteStyle={true} className="w-full py-3">
              Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
};




