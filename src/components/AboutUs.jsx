import { motion } from 'framer-motion';
import img1 from '../assets/images/img3.jpeg';
import img3 from '../assets/images/img5.jpg';
import img7 from '../assets/images/img6.jpg';

const AboutUs = () => {
  const timelineEvents = [
    {
      year: "2020",
      description:
        "After founding a previous collective, Shekelton 'Blackmon Don' Jean and Tavares 'Suppa' Kidd founded 4700 Enterprises. Their purpose was simple. Become an established collective within the music industry. The business model at that time was to provide Music Production and Engineering services while working to put out different instrumental releases from founding signees such as Flaco Royale, Timothy Branch, and CJ Ali.",
      image: img1,
    },
    {
      year: "2021",
      description:
        "Releases such as 'You Say You Understand', 'Flacodopolis', and 'Ups and Downs' were some of the first releases on all streaming platforms from the label. The label also focused on producing for other artists within the Miami Music Scene such as LoveSK, Slicknastyslick, and Tweleven, among others. The label continued to go through multiple relaunches and reconfigurations to adapt to the changing times.",
      image: img3,
    },
    {
      year: "2023",
      description:
        "One of the first full-length Rap and R&B albums was released with 'Suppa Sunday.' This release was pivotal in the growth of the company, providing a new audience while establishing connections with artists such as Geesus Shuttlesworth, KT The Genius, among others. The label quickly started to work on adding its first artists to the company.",
      image: img7,
    },
    {
      year: "2024",
      description:
        "Baloww and Biig Geech signed to the label, becoming the first recording artists within the company. This became a new chapter for the label as it started to release more singles in anticipation of both artists' albums. In September, Baloww released singles such as 'IDGAF' and 'Run Away' while Biig Geech released 'Roll Some'. The team continues to work with artists outside of the label as they prepare for their 2025 releases.",
      image: img7,
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 px-6 bg-black text-white" id="AboutUs">
      <motion.h1
        className="text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ABOUT US
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-white p-6 shadow-lg rounded-xl items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={event.image}
              alt={`Event ${event.year}`}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-500"
              whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
            />
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-black">{event.year}</h2>
              <p className="text-black mt-4">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
