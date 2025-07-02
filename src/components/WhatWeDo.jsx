import { motion } from 'framer-motion';
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';

const WhatWeDo = () => {
  const services = [
    {
      title: "Music Distribution 🏢",
      description: "We distribute music from our signees, contributors, and collaborators within the 4700 Network, ensuring each release receives a professional rollout for maximum reach and visibility. This strengthens our digital presence in the industry while expanding our community and audience engagement.",
      image: service1,
    },
    {
      title: "Music Production 🥁",
      description: "We specialize in beat production, audio recording, and engineering for artists and projects within the 4700 Enterprises Collective. Our team of producers and engineers crafts a diverse catalog of records that we leverage for releases, placements, and various opportunities.",
      image: service2,
    },
    {
      title: "Artist Development 🌱",
      description: "We assist artists in developing their brand, sound, image, and reach within the music industry. By offering innovative resources for music publishing and promotion, we establish systems and strategies to support our artists' growth with every release.",
      image: service3,
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-black text-white" id="WhatWeDo">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-300 hover:text-zinc-400 hover:scale-105"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WHAT WE DO 🎵
      </motion.h1>

      {/* Mobile: Vertical Stack */}
      <div className="flex flex-col gap-6 w-full max-w-4xl mb-8 md:hidden">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-zinc-400 shadow-lg rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            
            {/* Text Section */}
            <div className="p-4 sm:p-6 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3 transition-all duration-300 hover:text-zinc-700 hover:scale-105">
                {service.title}
              </h2>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tablet: 2 Column Grid with third item spanning full width */}
      <div className="hidden md:flex lg:hidden flex-col gap-6 w-full max-w-6xl mb-8">
        {/* First two services in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(0, 2).map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-zinc-400 shadow-lg rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              
              {/* Text Section */}
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-black mb-3 transition-all duration-300 hover:text-zinc-700 hover:scale-105">
                  {service.title}
                </h2>
                <p className="text-white text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Third service spanning full width */}
        <motion.div
          className="flex flex-row bg-zinc-400 shadow-lg rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <img
            src={services[2].image}
            alt={services[2].title}
            className="w-1/3 h-48 object-cover"
          />
          
          {/* Text Section */}
          <div className="p-6 w-2/3 flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-black mb-3 transition-all duration-300 hover:text-zinc-700 hover:scale-105">
              {services[2].title}
            </h2>
            <p className="text-white text-sm leading-relaxed">
              {services[2].description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Horizontal Layout */}
      <div className="hidden lg:flex flex-col gap-8 w-full max-w-7xl mb-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} bg-zinc-400 shadow-lg rounded-xl overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <img
              src={service.image}
              alt={service.title}
              className="w-2/5 h-64 object-cover"
            />
            
            {/* Text Section */}
            <div className="p-8 w-3/5 flex flex-col justify-center">
              <h2 className="text-2xl xl:text-3xl font-semibold text-black mb-4 transition-all duration-300 hover:text-zinc-700 hover:scale-105">
                {service.title}
              </h2>
              <p className="text-white text-base xl:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;