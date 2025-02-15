import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import LatestNews from './components/LatestNews';

function App() {

  return (
    <div className='text-white'>
      <Navbar />
      <Hero />
      <AboutUs />
      <LatestNews />
    </div>
  );
}

export default App;