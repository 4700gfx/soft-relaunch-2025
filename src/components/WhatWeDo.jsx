import { motion } from 'framer-motion';
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';

const WhatWeDo = () => {
  const services = [
    {
      title: "Music Distribution 🏢",
      description: "We distribute music from our signees, contributors, and other collaborators within the 4700 Network. We process all releases with a professional rollout to ensure maximum reach and visibility. This continues to build our digital footprint in the industry while building a wider community and audience experience.",
      image: service1,
    },
    {
      title: "Music Production 🥁",
      description: "We specialize in beat production, audio recording, and engineering for artists and projects within the 4700 Enterprises Collective. With our team of producers and engineers, we continue to provide a catalog of records that we leverage with releases, placements, and other opportunities.",
      image: service2,
    },
    {
      title: "Artist Development 🌱",
      description: "We help artists creatively develop their brand, sound, image, and reach within the music industry. By providing creative and innovative resources to publish and promote music, we build systems and processes to grow our artists with each release.",
      image: service3,
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-6 bg-black text-white mx-auto w-11/12" id="WhatWeDo">
      <motion.h1
        className="text-5xl font-bold text-center mb-15 transition-all duration-300 hover:text-zinc-400 hover:scale-105"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WHAT WE DO 🎵
      </motion.h1>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-8xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row bg-zinc-400 p-6 shadow-lg rounded-xl w-full md:w-1/2 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/3 h-48 object-cover rounded-lg"
            />

            {/* Text Section */}
            <div className="p-6 text-center md:text-left md:w-2/3">
              <h2 className="text-3xl font-semibold text-black mb-2 transition-all duration-300 hover:text-zinc-700 hover:scale-105">
                {service.title}
              </h2>
              <p className="text-white mt-2 text-md py-2">{service.description}</p>
              
              <motion.button
                className="bg-black text-white mt-2 px-12 py-3 rounded-full transition-colors duration-300 hover:bg-white hover:text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More 📓
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
