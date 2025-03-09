import { motion } from 'framer-motion';
import img1 from '../assets/images/img3.jpeg';
import img3 from '../assets/images/img5.jpg';
import img7 from '../assets/images/img6.jpg';

const AboutUs = () => {
  const timelineEvents = [
    {
      year: "2017 - 2020",
      description:
        "After founding a previous collective, Shekelton 'Blackmon Don' Jean and Tavares 'Suppa' Kidd established 4700 Enterprises with a clear vision—to build a recognized and influential collective within the music industry. Their initial business model focused on providing high-quality Music Production and Engineering services while simultaneously developing and releasing instrumental projects. Early signees, including Flaco Royale, Timothy Branch, and CJ Ali, played a pivotal role in shaping the sound and identity of 4700 Enterprises, laying the foundation for what would become a thriving creative powerhouse.",
      image: img1,
    },
    {
      year: "2021 - 2022",
      description:
        "Early releases like You Say You Understand, Flacodopolis, and Ups and Downs marked the label’s debut across all major streaming platforms, establishing its presence in the industry. Beyond its own catalog, the label played a key role in producing and collaborating with artists from the Miami music scene, including LoveSK, Slicknastyslick, and Tweleven, among others. Over the years, the label has undergone multiple relaunches and strategic reconfigurations, continuously evolving to adapt to shifts in the industry, emerging trends, and the ever-changing landscape of independent music.",
      image: img3,
    },
    {
      year: "2023",
      description:
        "One of the label’s first full-length Rap and R&B albums, Suppa Sunday, marked a significant milestone in its growth. This release not only expanded the label’s audience but also helped forge key connections with artists such as Geesus Shuttlesworth and KT The Genius, among others. Building on this momentum, the label swiftly shifted its focus toward developing its roster, working to bring its first official artists into the fold and further solidify its presence in the industry.",
      image: img7,
    },
    {
      year: "2024 - Present",
      description:
        "Baloww and Biig Geech became the first official recording artists to sign with the label, marking the beginning of a new chapter in the company's evolution. With their addition to the roster, the label ramped up its efforts to release more singles in anticipation of both artists' highly anticipated albums. In September, Baloww dropped impactful singles like IDGAF and Run Away, while Biig Geech released Roll Some, showcasing the label's growing influence. As the team prepares for their 2025 releases, they continue to collaborate with talented artists outside the label, further expanding their reach and strengthening their creative network.",
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
      
      <div className="relative w-full max-w-7xl">
        <div className="absolute inset-0 border-l-2 border-dashed border-gray-400"></div>
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row justify-start items-center md:items-start py-12 md:py-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Larger and consistent images with adjusted width and height */}
            <div className="md:w-96 md:h-72 w-80 h-60 bg-white rounded-lg flex justify-center items-center shadow-xl mb-6 md:mb-0">
              <motion.img
                src={event.image}
                alt={`Event ${event.year}`}
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
              />
            </div>
            <div className="md:ml-8 bg-white text-black rounded-lg p-6 shadow-xl">
              <h2 className="text-3xl font-semibold">{event.year}</h2>
              <p className="text-black mt-6 md:mt-4">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
