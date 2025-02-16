import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import LatestNews from './components/LatestNews';
import WordMorph from './components/WordMorph';

function App() {

  return (
    <div className='text-white'>
      <Navbar />
      <Hero />
      <WordMorph/>
      <WhatWeDo/>
      <AboutUs />
      <LatestNews />
    </div>
  );
}

export default App;