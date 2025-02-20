import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-white py-10 px-6 mt-15 mb-4 rounded-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-[#C0C0AF] text-lg font-semibold mb-3 transition-transform duration-300 hover:scale-110 hover:text-white">Main Website</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#C0C0AF] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#C0C0AF] transition">What We Do</a></li>
            <li><a href="#" className="hover:text-[#C0C0AF] transition">Meet The Team</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#C0C0AF] text-lg font-semibold mb-3 transition-transform duration-300 hover:scale-110 hover:text-white">Shop</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#C0C0AF] transition">Artist Merch</a></li>
            <li><a href="#" className="hover:text-[#C0C0AF] transition">4700 Merch</a></li>
            <li><a href="#" className="hover:text-[#C0C0AF] transition">4700 + Ravenous</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#C0C0AF] text-lg font-semibold mb-3 transition-transform duration-300 hover:scale-110 hover:text-white">More From 4700</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#C0C0AF] transition">Blog</a></li>
            <li><a href="#" className="hover:text-[#C0C0AF] transition">FAQs</a></li>
            <li><a href="#" className="hover:text-[#C0C0AF] transition">More Information</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#C0C0AF] text-lg font-semibold mb-3 transition-transform duration-300 hover:scale-110 hover:text-white">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-[#C0C0AF] transition"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-[#C0C0AF] transition"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-[#C0C0AF] transition"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-[#C0C0AF] transition"><FaFacebook size={24} /></a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm mt-10 text-white">&copy; {new Date().getFullYear()} All Rights Reserved | 4700 Enterprises LLC.</p>
    </footer>
  );
};

export default Footer;
