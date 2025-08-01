import { motion } from 'framer-motion';
import img1 from '../assets/images/img3.jpeg';
import img3 from '../assets/images/img5.jpg';
import img7 from '../assets/images/img6.jpg';

const AboutUs = () => {
  const timelineEvents = [
    {
      year: "2017 - 2020",
      description:
        "4700 Enterprises was founded by Shekelton 'Blackmon Don' Jean and Tavares 'Suppa' Kidd with a goal to build a creative, independent collective. Early signees like Flaco Royale and Timothy Branch helped shape the label's identity.",
      image: img1,
    },
    {
      year: "2021 - 2022",
      description:
        "The label expanded with releases like 'Flacodopolis' and 'Ups and Downs,' securing a presence on major platforms. Collaborations with Miami artists and key reconfigurations helped the label stay ahead of industry shifts and underground trends.",
      image: img3,
    },
    {
      year: "2023",
      description:
        "'Suppa Sunday,' a full-length album by co-founder Tavares 'Suppa' Kidd, marked a major milestone. The project brought fresh collaborations and refined the label's sound, setting a blueprint for roster growth and future releases.",
      image: img7,
    },
    {
      year: "2024 - Present",
      description:
        "Adding Baloww and Biig Geech introduced the label's first official recording artists. With new singles and partnerships, 4700 Enterprises is gearing up an ambitious 2025 as the label released 2 albums in 'Baloww Pendergrass' & Geechie's Labortory.",
      image: img7,
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 md:py-20 px-4 md:px-6 bg-black text-white" id="AboutUs">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ABOUT US
      </motion.h1>
      
      <p className="text-sm md:text-base text-gray-300 mb-8 md:mb-10 max-w-2xl text-center px-2">
        4700 Enterprises is a creative collective founded in 2017 by Shekelton 'Blackmon Don' Jean and Tavares 'Suppa' Kidd. With a focus on independent artistry, the label has grown to include a diverse roster of artists and producers, shaping a unique sound that blends various genres and influences.
      </p>

      {/* Desktop Timeline (horizontal) */}
      <div className="hidden lg:block relative w-full max-w-7xl overflow-x-auto">
        {/* Timeline Line */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-1 bg-gray-600 z-0"></div>
        
        {/* Event Cards */}
        <div className="flex flex-nowrap justify-between items-start gap-6 xl:gap-10 z-10 relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="relative bg-white text-black rounded-2xl shadow-lg w-80 xl:w-96 flex flex-col items-center p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Dot */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-gray-600 rounded-full z-20"></div>
              
              {/* Image */}
              <motion.img
                src={event.image}
                alt={`Event ${event.year}`}
                className="w-full h-48 xl:h-52 object-cover rounded-xl mb-5"
                whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
              />
              
              {/* Year */}
              <h2 className="text-xl font-semibold mb-3 text-center">{event.year}</h2>
              
              {/* Description */}
              <p className="text-gray-800 text-sm text-justify leading-snug">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Timeline (vertical) */}
      <div className="lg:hidden w-full max-w-4xl">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gray-600"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-8 md:mb-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-6 w-5 h-5 bg-white border-4 border-gray-600 rounded-full z-10"></div>
              
              {/* Content Card */}
              <div className="ml-12 md:ml-20 bg-white text-black rounded-2xl shadow-lg p-4 md:p-6 w-full">
                {/* Image */}
                <motion.img
                  src={event.image}
                  alt={`Event ${event.year}`}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl mb-4"
                  whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
                />
                
                {/* Year */}
                <h2 className="text-lg md:text-xl font-semibold mb-3">{event.year}</h2>
                
                {/* Description */}
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;