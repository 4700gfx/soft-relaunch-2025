import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import WordMorph from './components/WordMorph';
import MeetTheTeam from './components/MeetTheTeam';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {

  return (
    <div className='text-white'>
      <Navbar />
      <Hero />
      <WordMorph/>
      <WhatWeDo/>
      <MeetTheTeam/>
      <AboutUs />
      {/* <ContactUs/> */}
      <Footer/>
    </div>
  );
}

export default App;