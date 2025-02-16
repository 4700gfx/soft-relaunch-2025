import { useState } from "react";
import marcus from "../assets/images/2k.jpeg";
import baloww from "../assets/images/baloww.jpg";
import black from "../assets/images/black.jpg";
import cjAli from "../assets/images/cjali.jpg";
import flaco from "../assets/images/flaco.jpg";
import geechie from "../assets/images/geechie.jpeg";
import suppa from "../assets/images/suppa.jpeg";
import tim from "../assets/images/tim.png";

const artists = [
  { name: "2k", image: marcus, role: "Executive/Producer/Engineer", bio: "2k is a Producer, Engineer and Musician from Miami, Florida. His catalog spans from various styles and subgenres of Rap, Hip Hop and R&B. His experience in the Music Industry allows me to be a pivot part of the company. Through his work ethic and tactfulness the company continues to grow with this contributions.", appleMusicEmbed: "https://embed.music.apple.com/us/album/bernard-arnault/1794464099?i=1794464100" },
  { name: "Baloww", image: baloww, role: "Recording Artist", bio: "Baloww Hetoww is a Recording Artist from North Miami, Florida. Baloww brings unique energy to every track. As an Artist he balances his ability to rap and sing to create infectious records. His ability to approach a record from every direction allows for him to create a wide audience in the industry. With his last albium 'Test Drive' releasing last year and new singles within this Quarter. Baloww looks to continue with his upcoming release 'Baloww Pendergrass'", appleMusicEmbed: "https://embed.music.apple.com/us/album/right-on-brother/1789133585?i=1789133586" },
  { name: "Blackmon Don", image: black, role: "Co-Founder/Producer/Engineer", bio: "Blackmon Don is a Producer, Engineer and Founder from North Miami, Flordia. His experience within Music Production spans over 10 years in collabortions, instrumental albums and more. Within his carrerm, he has been able to release an ever growing catalog within the Miami Music Scene. He continue to keep this going as he works on his debut album 'Natural Selction'.", appleMusicEmbed: "https://embed.music.apple.com/us/album/hard-on-a-hoe-feat-allahmon-solomon-ripxl/1775487187?i=1775487188" },
  { name: "CJ Ali", image: cjAli, role: "Producer/Musician", bio: "CJ Ali is a Producer and Musician from Coral Springs, Florida. His experience as a Musician has enabled him to make some of the most astonishing records and insturmentals while still working with established local acts. He continues to work as his debut Executively Produced album looms soon", appleMusicEmbed: "https://embed.music.apple.com/us/album/one-you-love/1745947472?i=1745947473" },
  { name: "Flaco", image: flaco, role: "Producer", bio: "Flaco Royale is a Producer from Miami, Florida. His veteran experience and appeal to traditional and progressive boom bap has made him a specialist in the industry. His ability to sample records while providing a different twist allows Flaco to make some of the most mysterious and infection beats out now. Check out his recent Executively Produced Album 'Royal Decree'", appleMusicEmbed: "https://embed.music.apple.com/us/album/naranja-feat-flaco-royale/1793069416?i=1793069749" },
  { name: "Biig Geech", image: geechie, role: "Recording Artist", bio: "Biig Geech is a Recording Artist from North Miami, Florida. His ability to rap with many different flows allows him to be a refreshing part of the music industry. He is currently working on a set of releases this year with the first one being Geech Labatory.", appleMusicEmbed: "https://embed.music.apple.com/us/album/slime-feat-suppa/1791306046?i=1791306047" },
  { name: "Suppa", image: suppa, role: "Co-Founder/Producer", bio: "Suppa is the mastermind producer behind many hits on the 4700 COllective. His approach to Melodies while still providing a Southern Feel allows for a different fusion of elements that different audiences can enjoy. His next Executively Produced Album Geech Labortory is dropping soon.", appleMusicEmbed: "https://embed.music.apple.com/us/album/babe-feat-suppa/1796344963?i=1796344964" },
  { name: "Timothy Branch", image: tim, role: "Musician/Producer/Engineer", bio: "Hailing from Miami, Florida, Timothy Branch is a dynamic producer, skilled engineer, and accomplished musician specializing in Math Rock and Alternative Rock. With a keen ear for intricate rhythms, unconventional time signatures, and atmospheric textures, Branch has carved out a distinct sound that blends technical precision with raw emotion.", appleMusicEmbed: "https://embed.music.apple.com/us/album/ysyu-you-say-you-understand/1575587011?i=1575587013" },
];

const MeetTheTeam = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-10">Meet The Team</h1>
      <div className="flex justify-center gap-8 flex-wrap">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => setSelectedArtist(artist)}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border border-gray-300 transition-transform transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-500"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
              <span className="text-white text-lg font-bold">{artist.name}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedArtist && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50" onClick={() => setSelectedArtist(null)}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative flex items-center flex-col" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-3 text-xl font-bold"
              onClick={() => setSelectedArtist(null)}
            >
              &times;
            </button>
            <img
              src={selectedArtist.image}
              alt={selectedArtist.name}
              className="w-48 h-48 rounded-full object-cover mx-4"
            />
            <div className="text-left">
              <h2 className="text-2xl font-bold">{selectedArtist.name}</h2>
              <h3 className="text-lg text-gray-500">{selectedArtist.role}</h3>
              <p className="mt-2 text-gray-600">{selectedArtist.bio}</p>
              <div className="mt-6 w-full">
                {selectedArtist.appleMusicEmbed && (
                  <iframe
                    allow="autoplay *; encrypted-media *;"
                    frameBorder="0"
                    style={{
                      width: '100%',
                      height: 'auto',  // Let the iframe height adjust dynamically
                      maxWidth: '660px',
                      background: 'transparent',
                      overflow: 'hidden'
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src={selectedArtist.appleMusicEmbed}
                  />
                )}
              </div>
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Follow</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">More Info</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetTheTeam;
