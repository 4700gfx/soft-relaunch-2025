import React, { useState } from 'react';
import hoodie from '../assets/images/placeholder-hoodie.jpg';
import hat from '../assets/images/placeholder-hat.jpg';
import rack from '../assets/images/placeholder-rack.jpg';
import shirt from '../assets/images/placeholder-shirt.jpg';

const MerchStore = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, title: 'T-Shirt', price: '$25', category: 'shirt', img: shirt },
    { id: 2, title: 'Hoodie', price: '$50', category: 'jacket', img: hoodie },
    { id: 3, title: 'Cap', price: '$15', category: 'hat', img: hat },
  ];

  const categories = ['all', 'hat', 'shirt', 'jacket'];
  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <div className="p-8 bg-[#020202] min-h-screen text-[#EEEFEC] mt-20">
      {/* Header Section with Background Overlay */}
      <div className="relative w-full h-80 flex items-center justify-center text-center text-white">
        <img 
          src={rack} 
          alt="Merch Background" 
          className="absolute inset-0 w-11/12 h-full mx-auto object-cover opacity-50 rounded-3xl"
        />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">Merch Store</h2>
          <p className="text-md">
            They don't do merch like this anymore! A new website always calls for a new merch store. 
            Check out our store for exclusive 4700 Enterprises gear – hats, shirts, and more. Make sure to use 47DAY for new customers to get up to 47% off your favorite merch. Sale ends 4/14.
          </p>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 my-8">
        {categories.map((category) => (
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-[#D5D6D5] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-md mb-4 w-full h-40 object-cover transition-transform duration-300 hover:rotate-3"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#020202]">{item.title}</h3>
            <p className="text-[#C0C0AF] text-2xl font-bold">{item.price}</p>
            <p className="text-sm text-[#000000] opacity-70 mb-4">Premium quality {item.title.toLowerCase()} available now.</p>
            <button className="mt-4 bg-[#020202] text-[#EEEFEC] py-2 px-6 rounded-lg hover:bg-[#000000] transition duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchStore;
