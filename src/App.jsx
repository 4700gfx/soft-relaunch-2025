import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import WordMorph from './components/WordMorph';
import MeetTheTeam from './components/MeetTheTeam';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Hero id='#Home' />
              <WordMorph />
              <WhatWeDo id='WhatWeDo' />
              <MeetTheTeam id='MeetTheTeam' />
              <AboutUs id='AboutUs' />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
