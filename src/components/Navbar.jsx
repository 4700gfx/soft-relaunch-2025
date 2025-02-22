import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navButtons = {
    Home: 'Home',
    WhatWeDo: 'What We Do',
    MeetTheTeam: 'Meet The Team',
    Merch: 'Merch Store',
    AboutUs: 'About Us',
    ContactUs: 'Contact Us',
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(`#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="text-white py-4 px-8 mx-auto mt-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Animated Company Logo */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <img
            src={logo}
            alt="Company Logo"
            className="h-20 max-h-20 w-auto cursor-pointer"
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </motion.svg>
        </button>

        {/* Center: Navigation Links with Animation */}
        <AnimatePresence>
          {(isMenuOpen || window.innerWidth >= 1024) && (
            <motion.ul
              className={`lg:flex lg:space-x-8 bg-zinc-700 rounded-lg px-12 py-3 absolute lg:static ${
                isMenuOpen ? 'top-16 left-0 w-full' : 'hidden'
              } lg:bg-transparent lg:space-x-8 lg:w-auto`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delayChildren: 0.2, staggerChildren: 0.05 }}
            >
              {Object.keys(navButtons).map((key) => (
                <motion.li
                  key={key}
                  className="hover:bg-gray-500 hover:text-gray-300 text-lg font-bold px-4 py-2 rounded-full cursor-pointer transition duration-300"
                  onClick={() => scrollToSection(key)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {navButtons[key]}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Right: Social Media Icons with Hover Animation */}
        <div className="flex space-x-4 hidden lg:flex">
          {[
            { link: 'https://twitter.com', Icon: Twitter },
            { link: 'https://instagram.com', Icon: Instagram },
            { link: 'https://facebook.com', Icon: Facebook },
          ].map(({ link, Icon }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
              whileHover={{ rotate: -10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
