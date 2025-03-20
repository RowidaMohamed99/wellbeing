import React, { useState } from "react";
import { FaSnapchat, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import Logo from "../../assets/images/logo.png"; // Update this with your actual logo path

const HeaderComponent = () => {
  const [language, setLanguage] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Track active link, default to "/"

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (linkPath) => {
    setActiveLink(linkPath); // Set active link based on the path
    if (isMobileMenuOpen) {
      toggleMobileMenu(); // Close mobile menu after selection
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full bg-[#19649E] text-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Left Side - Social Icons */}
          <div className="flex items-center gap-4">
            {[
              <FaSnapchat key="snapchat" />,
              <FaInstagram key="instagram" />,
              <FaFacebook key="facebook" />,
            ].map((Icon, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white p-2 rounded-full text-[#19649E] hover:bg-gray-200 transition duration-300"
              >
                {Icon}
              </div>
            ))}
          </div>

          {/* Right Side - Language Switcher */}
          <div>
            <select
              className="border border-white text-white rounded p-1 bg-transparent focus:outline-none hover:bg-gray-700 transition duration-300"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center px-4 py-4">
          {/* Left Side - Logo */}
          <div className="flex items-center gap-4">
            <img src={Logo} alt="Wellbeing Day Logo" className="h-16 w-20" />
            {/* You can add a brand name here if needed */}
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex items-center gap-8">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Team", path: "/team" },
              ].map(({ name, path }) => (
                <li key={name}>
                    <Link
                        to={path}
                        className={`text-lg font-bold transition duration-300 ${
                        activeLink === path ? "text-[#19649E]" : "text-gray-400 hover:text-gray-500"
                        }`}
                        onClick={() => handleNavLinkClick(path)}
                    >
                        {name}
                    </Link>
                </li>

              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              className="text-[#19649E] focus:outline-none hover:text-gray-500 transition duration-300"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col items-center gap-4 py-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Team", path: "/team" },
              ].map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`text-lg text-[#19649E] hover:text-gray-500 transition duration-300 ${
                      activeLink === path ? "text-[#19649E] font-bold" : ""
                    }`}
                    onClick={() => handleNavLinkClick(path)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderComponent;