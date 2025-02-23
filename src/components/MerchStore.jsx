import React from 'react';

const MerchStore = () => {
  const items = [
    { id: 1, title: 'T-Shirt', price: '$25', img: 'https://source.unsplash.com/random/200x200?shirt' },
    { id: 2, title: 'Hoodie', price: '$50', img: 'https://source.unsplash.com/random/200x200?hoodie' },
    { id: 3, title: 'Cap', price: '$15', img: 'https://source.unsplash.com/random/200x200?cap' },
  ];

  return (
    <div className="p-8 bg-[#020202] min-h-screen text-[#EEEFEC] mt-20">
      <div className='text-center w-5/8 my-10 mx-auto'>
      <h2 className="text-3xl font-bold mb-8 text-center">Merch Store</h2>
      <p>
      They dont do merch like this anymore! New Website always calls for a new Merch Store. Check out our Merchandise Store to check out all of the gear we have from our 4700 Enterprises Team. From hats, to shirts and more. Check out next store. 
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
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
