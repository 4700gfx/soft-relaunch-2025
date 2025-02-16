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
  { 
    name: "2k", 
    image: marcus, 
    role: "Executive/Producer/Engineer", 
    bio: "2k is a Producer, Engineer and Musician from Miami, Florida...",
    spotifyEmbed: "https://open.spotify.com/embed/track/YOUR_SPOTIFY_TRACK_ID",
    appleMusicEmbed: "https://embed.music.apple.com/us/album/YOUR_APPLE_MUSIC_TRACK_ID"
  },
  { 
    name: "Baloww", 
    image: baloww, 
    role: "Recording Artist", 
    bio: "Baloww Hetoww is a Recording Artist from North Miami, Florida...",
    spotifyEmbed: "https://open.spotify.com/embed/track/YOUR_SPOTIFY_TRACK_ID",
    appleMusicEmbed: "https://embed.music.apple.com/us/album/YOUR_APPLE_MUSIC_TRACK_ID"
  },
  { 
    name: "Blackmon Don", 
    image: black, 
    role: "Co-Founder/Producer/Engineer", 
    bio: "Blackmon Don is a Producer, Engineer and Founder from North Miami...",
    spotifyEmbed: "",
    appleMusicEmbed: ""
  },
  { 
    name: "CJ Ali", 
    image: cjAli, 
    role: "Producer/Musician", 
    bio: "CJ Ali is a Producer and Musician from Coral Springs, Florida...",
    spotifyEmbed: "https://open.spotify.com/embed/track/YOUR_SPOTIFY_TRACK_ID",
    appleMusicEmbed: "https://embed.music.apple.com/us/album/YOUR_APPLE_MUSIC_TRACK_ID"
  },
  { 
    name: "Flaco", 
    image: flaco, 
    role: "Producer", 
    bio: "Flaco Royale is a Producer from Miami, Florida...",
    spotifyEmbed: "",
    appleMusicEmbed: ""
  },
  { 
    name: "Biig Geech", 
    image: geechie, 
    role: "Recording Artist", 
    bio: "Biig Geech is a Recording Artist from North Miami, Florida...",
    spotifyEmbed: "https://open.spotify.com/embed/track/YOUR_SPOTIFY_TRACK_ID",
    appleMusicEmbed: "https://embed.music.apple.com/us/album/YOUR_APPLE_MUSIC_TRACK_ID"
  },
  { 
    name: "Suppa", 
    image: suppa, 
    role: "Co-Founder/Producer", 
    bio: "Suppa is the mastermind producer behind many hits...",
    spotifyEmbed: "",
    appleMusicEmbed: ""
  },
  { 
    name: "Timothy Branch", 
    image: tim, 
    role: "Artist", 
    bio: "Tim is a multi-talented artist with a fresh perspective.",
    spotifyEmbed: "",
    appleMusicEmbed: ""
  }
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
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full flex items-center relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-3 text-xl font-bold"
              onClick={() => setSelectedArtist(null)}
            >
              &times;
            </button>

            {/* Horizontal Layout */}
            <div className="flex flex-row items-center w-full">
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="w-48 h-48 rounded-full object-cover mr-6"
              />
              <div className="text-left w-full">
                <h2 className="text-2xl font-bold">{selectedArtist.name}</h2>
                <h3 className="text-lg text-gray-500">{selectedArtist.role}</h3>
                <p className="mt-2 text-gray-600">{selectedArtist.bio}</p>

                {/* Spotify and Apple Music Embeds */}
                <div className="mt-4 flex flex-col gap-4 w-full">
                  {selectedArtist.spotifyEmbed && (
                    <iframe 
                      src={selectedArtist.spotifyEmbed} 
                      width="100%" 
                      height="152" 
                      allow="encrypted-media"
                      className="rounded-lg"
                    ></iframe>
                  )}
                  {selectedArtist.appleMusicEmbed && (
                    <iframe 
                      src={selectedArtist.appleMusicEmbed} 
                      width="100%" 
                      height="150" 
                      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                      className="rounded-lg"
                    ></iframe>
                  )}
                </div>

                <div className="mt-4 flex gap-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Follow</button>
                  <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">More Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetTheTeam;
