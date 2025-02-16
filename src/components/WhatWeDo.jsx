
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';

const WhatWeDo = () => {
  const services = [
    {
      title: "Music Distribution 🏢",
      description: "We distribute music from our signees, contributors, and other collaborators within the 4700 Network. We process all releases with a professional rollout to ensure maxium reach and visibility. This continues to build our digital footprint in the industry while building a wider community",
      image: service1, // Placeholder image
    },
    {
      title: "Music Production 🥁",
      description: "We specialize beat production, audio recording and engineering for artists and projects within the 4700 Enterprises Collective. With our Team of Producers and Engineers, we continue to work to provide a catalog of records that we continue to leverage with releases, placements and other opportunities",
      image: service2, // Placeholder image
    },
    {
      title: "Artist Development 🌱",
      description: "We help artists creativitely develop their brand, sound, image and reach within the music industry. Through providing creative and innnovative resouces to publish and promote music, we continue to build systems and processes to grow our artists with each release",
      image: service3, // Placeholder image
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-6 bg-black text-white mx-auto w-11/12" id='WhatWeDo'>
      <h1 className="text-5xl font-bold text-center mb-15">WHAT WE DO 🎵</h1>
      <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-8xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-zinc-400 p-6 shadow-lg rounded-xl w-full md:w-1/2 items-center"
          >
            {/* Image Section */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/3 h-48 object-cover rounded-lg"
            />

            {/* Text Section */}
            <div className="p-6 text-center md:text-left md:w-2/3">
              <h2 className="text-3xl font-semibold text-black mb-2">{service.title}</h2>
              <p className="text-white mt-2 text-md py-2">{service.description}</p>
              <button className='bg-black text-white mt-2 px-12 py-3 rounded-full'> Learn More 📓</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
