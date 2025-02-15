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
    <nav className=" text-white p-4 mx-18 my-6">
      <div className=" container mx-auto flex items-center justify-between">
        
        {/* Left: Company Logo */}
        <div>
          <img src={logo} alt="Company Logo" className="h-15" />
        </div>

        {/* Center: Navigation Links */}
        <ul className="bg-zinc-700 rounded-full flex space-x-6 flex-grow justify-center mx-15">
          {Object.keys(navButtons).map((key) => (
            <li key={key} className="hover:text-gray-400 text-lg text-bold m-6 cursor-pointer">
              {navButtons[key]}
            </li>
          ))}
        </ul>

        {/* Right: Search Bar */}
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-zinc-700 rounded-full px-12 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
