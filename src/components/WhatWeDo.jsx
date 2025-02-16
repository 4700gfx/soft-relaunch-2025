
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';

const WhatWeDo = () => {
  const services = [
    {
      title: "Music Distribution",
      description: "We distribute music for our signees and other contributors within the label. We process all releases with a professional rollout to ensure maxium reach. This allows for more a white glove effect",
      image: service1, // Placeholder image
    },
    {
      title: "Music Production",
      description: "We handle beat production, recording, and mixing for artists and projects. With our Team of producers, we continue to work to provide a catalog of records that we leverage with syncs and other opportunities",
      image: service2, // Placeholder image
    },
    {
      title: "Artist Development",
      description: "We help artists grow their brand, sound, and reach in the music industry. Through providing resouces to publish and promote music, we provide a plan to grow our artists within each release",
      image: service3, // Placeholder image
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-6 bg-black text-white mx-auto w-11/12">
      <h1 className="text-5xl font-bold text-center mb-15">WHAT WE DO</h1>
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
              <button className='bg-black text-white mt-2 px-12 py-3 rounded-full'> Learn More </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
