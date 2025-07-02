import { useState } from "react";
import marcus from "../assets/images/2k.jpeg";
import baloww from "../assets/images/baloww.png"; //New Baloww File
import black from "../assets/images/black.jpg";
import cjAli from "../assets/images/cjali.jpg";
import flaco from "../assets/images/flaco.jpg";
import geechie from "../assets/images/geechie.jpeg";
import suppa from "../assets/images/suppa.jpeg";
import tim from "../assets/images/tim.png";

const artists = [
  { name: "2k", image: marcus, role: "Executive/Producer/Engineer", bio: "2K is a multi-talented producer, engineer, and musician hailing from Miami, Florida. With a deep-rooted passion for music and an extensive background in audio production, he has developed a versatile catalog that spans across various styles and subgenres of Rap, Hip-Hop, and R&B. His keen ear for sound, technical expertise, and ability to adapt to the evolving music landscape make him a valuable asset to the industry. Bringing years of hands-on experience, 2K plays a pivotal role within the company, contributing not only as a creative force but also as a strategic team player. His dedication, strong work ethic, and tactful approach to music production have been instrumental in the company's continuous growth. Whether fine-tuning the perfect mix, crafting innovative beats, or collaborating with artists to bring their visions to life, 2K remains committed to pushing boundaries and elevating the sound of modern music.", appleMusicEmbed: "https://embed.music.apple.com/us/album/bernard-arnault/1794464099?i=1794464100", spotifyEmbed: "https://open.spotify.com/embed/track/7H9R8VRwI6nrpapohqrBrk?utm_source=generator" },

  { name: "Baloww", image: baloww, role: "Recording Artist", bio: "Baloww Hetoww is a dynamic recording artist from North Miami, Florida, known for his electrifying energy and genre-blending style. As a versatile performer, he seamlessly balances his ability to rap and sing, crafting infectious records that resonate with a wide audience. His unique approach to music allows him to experiment with different sounds, ensuring that each track carries a fresh and captivating vibe. Baloww's artistry shines through his ability to approach a record from multiple angles, making his music both innovative and accessible. His last album, Test Drive, released last year, showcased his range and cemented his presence in the industry. With a steady stream of new singles dropping this quarter, Baloww is gearing up for his next major release, Baloww Pendergrass, a project that promises to further elevate his artistry and solidify his place in the music scene.'", appleMusicEmbed: "https://embed.music.apple.com/us/album/right-on-brother/1789133585?i=1789133586", spotifyEmbed: "https://open.spotify.com/embed/track/131LoK3jtpilvTkIfecGXT?utm_source=generator" },

  { name: "Blackmon Don", image: black, role: "Co-Founder/Producer/Engineer", bio: "Blackmon Don is a seasoned producer, engineer, and founder from North Miami, Florida, with over a decade of experience in music production. His journey in the industry has been defined by relentless creativity, technical expertise, and a deep passion for sound. Throughout his career, he has collaborated with a diverse range of artists, released instrumental albums, and continuously expanded his ever-growing catalog within the Miami music scene. As both a visionary and a hands-on creator, Blackmon Don has played a key role in shaping the sound of numerous projects, earning respect for his ability to craft compelling instrumentals and engineer high-quality productions. His commitment to pushing boundaries keeps him at the forefront of the industry, and he shows no signs of slowing down. Currently, he is focused on his highly anticipated debut album, Natural Selection, a project that promises to showcase his signature style and evolution as an artist.", appleMusicEmbed: "https://embed.music.apple.com/us/album/hard-on-a-hoe-feat-allahmon-solomon-ripxl/1775487187?i=1775487188", spotifyEmbed: "https://open.spotify.com/embed/track/0adPJUrtcImagNn7ZYgew2?utm_source=generator" },

  { name: "CJ Ali", image: cjAli, role: "Producer/Musician", bio: "CJ Ali is a gifted producer and musician from Coral Springs, Florida, known for his ability to craft mesmerizing records and innovative instrumentals. His deep musical expertise and keen ear for sound have allowed him to create some of the most astonishing compositions while collaborating with established local artists. With a passion for blending different influences and pushing sonic boundaries, CJ Ali consistently delivers fresh and dynamic productions. As he continues to evolve in his craft, CJ Ali remains dedicated to refining his artistry and expanding his reach in the industry. With his debut executively produced album on the horizon, he is set to make a significant impact, showcasing his vision and skill on a larger scale.", appleMusicEmbed: "https://embed.music.apple.com/us/album/one-you-love/1745947472?i=1745947473", spotifyEmbed: "https://open.spotify.com/embed/track/21bDVDFPc2KsKAvZztyCWk?utm_source=generator" },

  { name: "Flaco", image: flaco, role: "Producer", bio: "Flaco Royale is a veteran producer from Miami, Florida, whose expertise and deep appreciation for both traditional and progressive boom bap have solidified his reputation as a specialist in the industry. With a keen ear for sampling and an innovative approach to beat-making, Flaco has mastered the art of blending classic sounds with modern elements, creating some of the most mysterious and infectious beats in today's music scene. His ability to take samples and reimagine them with a unique twist sets him apart, making his productions both nostalgic and forward-thinking. Whether crafting raw underground anthems or smooth, soulful instrumentals, Flaco Royale continues to push the boundaries of hip-hop production. His latest executively produced album, Royal Decree, showcases his signature sound and serves as a testament to his craftsmanship and influence in the game.", appleMusicEmbed: "https://embed.music.apple.com/us/album/naranja-feat-flaco-royale/1793069416?i=1793069749", spotifyEmbed: "https://open.spotify.com/embed/track/29fUAVRhgHpZzkfGcLqRmd?utm_source=generator" },

  { name: "Biig Geech", image: geechie, role: "Recording Artist", bio: "Biig Geech is a dynamic recording artist from North Miami, Florida, known for his versatility and ability to deliver a wide range of flows. His adaptability and unique style make him a refreshing presence in the music industry, effortlessly blending different influences to create a sound that stands out. Whether delivering hard-hitting bars or smooth, melodic cadences, Biig Geech brings energy and authenticity to every track. With an unwavering dedication to his craft, he is gearing up for a series of exciting releases this year, kicking things off with Geech Laboratory, a project that promises to showcase his growth, creativity, and signature style. As he continues to carve his path in the industry, Biig Geech remains focused on pushing boundaries and connecting with listeners through his music.", appleMusicEmbed: "https://embed.music.apple.com/us/album/slime-feat-suppa/1791306046?i=1791306047", spotifyEmbed: "https://open.spotify.com/embed/track/1nlW8Ym3oGLJ7m9u3W6dve?utm_source=generator" },

  { name: "Suppa", image: suppa, role: "Co-Founder/Producer", bio: "Suppa is the visionary producer behind many hits from the 4700 Collective, known for his signature approach to crafting melodies while maintaining a distinct Southern feel. His production style seamlessly blends rich harmonies with hard-hitting rhythms, creating a unique fusion of elements that resonates with diverse audiences. Suppa's ability to balance soulful textures with raw energy makes him a standout force in the industry. With a deep understanding of sound and a passion for pushing creative boundaries, Suppa continues to shape the sonic landscape of modern music. His next executively produced album, Geech Laboratory, is set to drop soon, promising a fresh collection of tracks that showcase his innovative production and musical versatility.", appleMusicEmbed: "https://embed.music.apple.com/us/album/babe-feat-suppa/1796344963?i=1796344964", spotifyEmbed: "https://open.spotify.com/embed/track/2THSMzROxUYcC7BNYjMsJt?utm_source=generator" },

  { name: "Timothy Branch", image: tim, role: "Musician/Producer/Engineer", bio: "Hailing from Miami, Florida, Timothy Branch is a dynamic producer, skilled engineer, and accomplished musician specializing in Math Rock and Alternative Rock. Known for his mastery of intricate rhythms, unconventional time signatures, and atmospheric textures, Branch has carved out a distinct sonic identity that fuses technical precision with raw emotion. With a deep passion for pushing musical boundaries, Branch has honed his craft through years of experimentation and collaboration, developing a sound that is both complex and immersive. His ability to blend intricate guitar work with layered production creates compositions that captivate listeners and challenge traditional rock structures. Whether engineering cutting-edge recordings, producing innovative projects, or crafting his own forward-thinking soundscapes, Timothy Branch continues to make an impact in the rock and alternative music scenes. His dedication to artistry and sonic exploration ensures that his work remains both thought-provoking and emotionally resonant.", appleMusicEmbed: "https://embed.music.apple.com/us/album/ysyu-you-say-you-understand/1575587011?i=1575587013", spotifyEmbed: "https://open.spotify.com/embed/track/3im0wQm6ortZ4o5copBm7j?utm_source=generator" },
];

const MeetTheTeam = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <div className="text-center py-12 md:py-16 px-4 md:px-6" id="MeetTheTeam">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 md:my-6">Meet The Team</h1>
      
      <p className="text-center text-sm md:text-base font-italic mb-8 md:mb-12 mx-auto px-4 md:px-8 lg:px-24 max-w-5xl leading-relaxed">
        4700 Enterprises is a dynamic and thriving company brimming with exceptional talent. From our visionary artists who push creative boundaries to our groundbreaking producers who redefine sound, we are a collective of innovators. Each member of our team brings something unique to the table, and we believe their stories and craft are worth getting to know. Explore our roster below to discover the profiles of the talented individuals who make 4700 Enterprises a true force in the industry.
      </p>
      
      {/* Artist Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="relative cursor-pointer group flex flex-col items-center"
            onClick={() => setSelectedArtist(artist)}
          >
            <div className="relative">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border border-gray-300 transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center px-2">
                  {artist.name}
                </span>
              </div>
            </div>
            
            {/* Artist name below image for better mobile UX */}
            <div className="mt-2 text-center">
              <h3 className="text-sm md:text-base font-semibold">{artist.name}</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">{artist.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4" onClick={() => setSelectedArtist(null)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800 z-10 w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedArtist(null)}
            >
              &times;
            </button>
            
            {/* Modal Content */}
            <div className="p-4 md:p-6">
              {/* Desktop Layout */}
              <div className="hidden md:flex items-start gap-6">
                <img
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  className="w-48 h-48 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 text-left">
                  <h2 className="text-2xl lg:text-3xl font-bold">{selectedArtist.name}</h2>
                  <h3 className="text-lg lg:text-xl text-gray-500 mb-4">{selectedArtist.role}</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{selectedArtist.bio}</p>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col items-center text-center">
                <img
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold">{selectedArtist.name}</h2>
                <h3 className="text-base sm:text-lg text-gray-500 mb-4">{selectedArtist.role}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-left">{selectedArtist.bio}</p>
              </div>

              {/* Music Players */}
              <div className="mt-6 space-y-4">
                {selectedArtist.appleMusicEmbed && (
                  <div className="w-full">
                    <iframe
                      allow="autoplay *; encrypted-media *;"
                      frameBorder="0"
                      className="w-full h-20 md:h-24"
                      style={{
                        background: 'transparent',
                        overflow: 'hidden'
                      }}
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                      src={selectedArtist.appleMusicEmbed}
                    />
                  </div>
                )}
                {selectedArtist.spotifyEmbed && (
                  <div className="w-full">
                    <iframe
                      src={selectedArtist.spotifyEmbed}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="encrypted-media"
                      className="w-full"
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 text-sm md:text-base">
                  Follow
                </button>
                <button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm md:text-base">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetTheTeam;