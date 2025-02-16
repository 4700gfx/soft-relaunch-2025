import React, { useEffect, useRef } from "react";
import logo from '../assets/images/logo.png';
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';

const Hero = () => {
  const imageLinks = [img1, img2, img3, img4, img5, img6, img7];
  const logoArray = new Array(40).fill(logo); // Creates an array of logos

  const topScrollRef = useRef(null);
  const middleScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);

  useEffect(() => {
    const scrollElements = [topScrollRef, middleScrollRef, bottomScrollRef];
    const scrollSpeed = 1;
    let intervalId;

    const scroll = () => {
      scrollElements.forEach((ref, index) => {
        if (ref.current) {
          if (index === 1) {
            // Middle scrolls left
            ref.current.scrollLeft -= scrollSpeed;
            if (ref.current.scrollLeft <= 0) {
              ref.current.scrollLeft = ref.current.scrollWidth;
            }
          } else {
            // Top and bottom scroll right
            ref.current.scrollLeft += scrollSpeed;
            if (ref.current.scrollLeft + ref.current.offsetWidth >= ref.current.scrollWidth) {
              ref.current.scrollLeft = 0;
            }
          }
        }
      });
    };

    intervalId = setInterval(scroll, 30); // Smoother animation using setInterval

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="bg-black text-white py-20 px-5 min-h-screen flex flex-col items-center">
      {/* Hero Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
          The New Standard in The Music Industry
        </h1>
        <p className="mt-4 text-sm md:text-base">
          At 4700 Enterprises, our mission is to revolutionize the music industry through three core competencies: expert music publishing, strategic media promotion, and innovative artist development.
        </p>
        <a href="#" className="inline-block mt-6 bg-zinc-700 text-white rounded-full px-6 py-2 font-medium">
          Send Us A Message
        </a>
      </div>

      {/* Top Logo Banner */}
      <div className="relative overflow-hidden mt-12 px-5 w-full">
        <div
          ref={topScrollRef}
          className="flex gap-5 overflow-x-auto whitespace-nowrap no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {logoArray.map((src, index) => (
            <img key={index} src={src} alt="Logo" className="h-[30px] w-auto" />
          ))}
        </div>
      </div>

      {/* Middle Image Carousel */}
      <div className="relative overflow-hidden mt-12 px-5 my-2 w-full">
        <div
          ref={middleScrollRef}
          className="flex gap-5 overflow-x-auto whitespace-nowrap no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {imageLinks.concat(imageLinks).map((src, index) => (
            <img key={index} src={src} alt="Gallery" className="h-[400px] w-auto rounded-[50px]" />
          ))}
        </div>
      </div>

      {/* Bottom Logo Banner */}
      <div className="relative overflow-hidden mt-12 px-5 w-full">
        <div
          ref={bottomScrollRef}
          className="flex gap-5 overflow-x-auto whitespace-nowrap no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {logoArray.map((src, index) => (
            <img key={index} src={src} alt="Logo" className="h-[30px] w-auto" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
