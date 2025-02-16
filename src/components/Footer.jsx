const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-white py-10 px-6 mx-15 mt-15 mb-4 rounded-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        
        <div>
          <h4 className="text-[#C0C0AF] text-lg font-semibold mb-3">Main Website</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:bg-[#C0C0AF] rounded-full px-3 py-1 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#C0C0AF] rounded-full px-3 py-1 transition">
                What We Do
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#C0C0AF] rounded-full px-3 py-1 transition">
                Meet The Team
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C0C0AF] text-lg font-semibold mb-3">Shop</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:bg-[#C0C0AF] rounded-full px-3 py-1 transition">
                Artist Merch
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#C0C0AF] rounded-full px-3 py-1 transition">
                4700 Merch
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#C0C0AF] rounded-full px-3 py-1 transition">
                4700 + Ravenous
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C0C0AF] text-lg font-semibold mb-3">More From 4700</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:bg-[#C0C0AF] rounded-full px-3 py-1 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#C0C0AF] rounded-full px-3 py-1 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#C0C0AF] rounded-full px-3 py-1 transition">
                More Information
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C0C0AF] text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:bg-[#C0C0AF] rounded-full p-2 transition">
              <img src="images/instagram.png" alt="Instagram" className="h-6" />
            </a>
            <a href="#" className="hover:bg-[#C0C0AF] rounded-full p-2 transition">
              <img src="images/twitter-icon.png" alt="Twitter" className="h-6" />
            </a>
            <a href="#" className="hover:bg-[#C0C0AF] rounded-full p-2 transition">
              <img src="images/linkedin.png" alt="LinkedIn" className="h-6" />
            </a>
            <a href="#" className="hover:bg-[#C0C0AF] rounded-full p-2 transition">
              <img src="images/facebook.png" alt="Facebook" className="h-6" />
            </a>
          </div>
        </div>

      </div>
      <p className="text-center text-sm mt-10 text-white">&copy; {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
