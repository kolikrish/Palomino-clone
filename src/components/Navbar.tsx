import React from 'react';
import { motion } from 'motion/react';
import KPVerseMenu from './KPVerseMenu';

export const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <nav className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6 text-white"
            >
              <path d="M12 2L4.5 20.5H9.5L12 14.2L14.5 20.5H19.5L12 2Z" />
              <path d="M12 6L9 13.5H15L12 6Z" opacity="0.6" />
            </svg>
          </div>
          <span className="font-extralight text-lg sm:text-xl text-white uppercase font-display">
            PALOMINO
          </span>
        </a>

        {/* Desktop Links & KPVerse Interactive Menu Drawer */}
        <div className="flex items-center space-x-8 sm:space-x-12">
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.25em] font-light text-white/90 hover:text-white uppercase transition-colors duration-200 font-gilroy"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* KPVerse Menu Hover Drawer Component */}
          <KPVerseMenu />
        </div>
      </nav>
    </motion.header>
  );
};
