import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';
import rack from '../assets/images/placeholder-rack.jpg';

const MerchStore = () => {
  const [filter, setFilter] = useState('all');
  const [merchItems, setMerchItems] = useState([]);

  useEffect(() => {
    const fetchMerch = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/merch");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setMerchItems(data);
      } catch (error) {
        console.error("Error fetching merch:", error);
      }
    };

    fetchMerch();
  }, []);

  const categories = ['all', 'hat', 'shirt', 'jacket'];
  const filteredItems = filter === 'all' ? merchItems : merchItems.filter(item => item.category === filter);

  return (
    <div className="p-8 bg-[#020202] min-h-screen text-[#EEEFEC] mt-20">
      {/* Header Section */}
      <div className="relative w-full h-80 flex flex-col items-center justify-center text-center text-white">
        <img src={rack} alt="Merch Background" className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-3xl" />
        <img src={logo} alt="Logo" className="relative z-10 w-40 h-40" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Merch Store</h2>
          <p className="text-lg">They don't do merch like this anymore! Check out our store for exclusive 4700 Enterprises gear.</p>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 my-8">
        {categories.map(category => (
          <button
            key={category}
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition duration-300 ${filter === category ? 'bg-[#EEEFEC] text-[#020202]' : 'bg-[#020202] text-[#EEEFEC] hover:bg-[#000000]'}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Merch Items Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"
        >
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D5D6D5] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img src={item.img} alt={item.title} className="rounded-md mb-4 w-full h-40 object-cover transition-transform duration-300 hover:rotate-3" />
              <h3 className="text-2xl font-semibold mb-2 text-[#020202]">{item.title}</h3>
              <p className="text-[#C0C0AF] text-2xl font-bold">{item.price}</p>
              <p className="text-sm text-[#000000] opacity-70 mb-4">Premium quality {item.title.toLowerCase()} available now.</p>
              <button className="mt-4 bg-[#020202] text-[#EEEFEC] py-2 px-6 rounded-lg hover:bg-[#000000] transition duration-300">
                Buy Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MerchStore;
