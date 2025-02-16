import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import WordMorph from './components/WordMorph';
import MeetTheTeam from './components/MeetTheTeam';
import Footer from './components/Footer';

function App() {

  return (
    <div className='text-white'>
      <Navbar />
      <Hero id="#Home"/>
      <WordMorph/>
      <WhatWeDo id="WhatWeDo"/>
      <MeetTheTeam id="MeetTheTeam"/>
      <AboutUs id="AboutUs" />
      {/* <ContactUs/> */}
      <Footer/>
    </div>
  );
}

export default App;