import { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navButtons = {
    home: 'Home',
    aboutUs: 'About Us',
    latestNews: 'Latest News',
    meetTheTeam: 'Meet The Team',
    contactUs: 'Contact Us',
  };

  return (
    <nav className="text-white py-4 px-8 mx-auto mt-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Company Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Company Logo" className="h-12" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Center: Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-8 bg-zinc-700 rounded-lg px-12 py-3 mx-22 absolute lg:static ${
            isMenuOpen ? 'top-16 left-0 w-full' : 'hidden'
          } lg:bg-transparent lg:space-x-8 lg:w-auto`}
        >
          {Object.keys(navButtons).map((key) => (
            <li
              key={key}
              className="hover:bg-gray-500 hover:text-gray-300 text-lg font-bold px-4 py-2 rounded-full cursor-pointer transition duration-300"
            >
              {navButtons[key]}
            </li>
          ))}
        </ul>

        {/* Right: Search Bar */}
        <div className="flex-shrink-0 hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-zinc-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
