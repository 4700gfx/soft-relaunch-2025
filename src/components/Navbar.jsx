import logo from '../assets/images/logo.png';

const Navbar = () => {
  const navButtons = {
    home: 'Home',
    aboutUs: 'About Us',
    latestNews: 'Latest News',
    meetTheTeam: 'Meet The Team',
    contactUs: 'Contact Us'
  };

  return (
    <nav className="text-white py-4 px-8 mx-auto mt-8">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left: Company Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Company Logo" className="h-12" />
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex flex-1 justify-center space-x-8 bg-zinc-700 rounded-full px-12 py-3 mx-22">
          {Object.keys(navButtons).map((key) => (
            <li 
              key={key} 
              className="hover:bg-black hover:text-gray-300 text-lg font-bold px-4 py-2 rounded-full cursor-pointer transition duration-300"
            >
              {navButtons[key]}
            </li>
          ))}
        </ul>

        {/* Right: Search Bar */}
        <div className="flex-shrink-0">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-zinc-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
