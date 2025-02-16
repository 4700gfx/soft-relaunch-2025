import img1 from '../assets/images/img3.jpeg';
import img3 from '../assets/images/img5.jpg';
import img7 from '../assets/images/img6.jpg';

const AboutUs = () => {
  const timelineEvents = [
    {
      year: "2020",
      description:
        "After being more of a Project Label from 2017, Shekelton 'Blackmon Don' Jean and Tavares 'Suppa' Kidd founded 4700 Enterprises. The goal was to mainly focus on Music Production and Music Publishing via Instrumental Albums. Four producers signed as some of the first signees of the label, helping to establish a presence in the music industry.",
      image: img1,
    },
    {
      year: "2021",
      description:
        "Releases such as 'You Say You Understand', 'Flacodopolis', and 'Ups and Downs' were some of the first releases on all streaming platforms. The label also focused on producing for other artists within the area such as LoveSK, Slicknastyslick, and Tweleven, among others.",
      image: img3,
    },
    {
      year: "2023",
      description:
        "One of the first full-length Rap and R&B albums was released with 'Suppa Sunday.' This release was pivotal in the growth of the company, providing a new audience while establishing connections with artists such as Geesus Shuttlesworth, KT The Genius, among others.",
      image: img7,
    },
    {
      year: "2024",
      description:
        "Baloww and Biig Geech signed to the label, becoming the first recording artists within the company. Singles from both artists were released and they continue to work with the label until today, At this time they are working to have more projects out",
      image: img7,
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 px-6 bg-black text-white">
      <h1 className="text-5xl font-bold text-center mb-10">ABOUT US</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {timelineEvents.map((event, index) => (
          <div key={index} className="flex flex-col bg-white p-6 shadow-lg rounded-xl items-center">
            <img
              src={event.image}
              alt={`Event ${event.year}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-black">{event.year}</h2>
              <p className="text-black mt-4">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
