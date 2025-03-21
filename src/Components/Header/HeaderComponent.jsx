import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Logo from "../../assets/images/logo.png";

const HeaderComponent = () => {
  const { t, i18n } = useTranslation(); // Use the translation hook
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage); // Change the language
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (linkPath) => {
    setActiveLink(linkPath);
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full bg-[#19649E] text-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Left Side - Social Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {[
              <FaYoutube key="youtube" />,
              <FaTwitter key="twitter" />,
              <FaInstagram key="instagram" />,
              <FaFacebook key="facebook" />,
            ].map((Icon, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white p-1 sm:p-2 rounded-full text-[#19649E] hover:bg-gray-200 transition duration-300"
              >
                {Icon}
              </div>
            ))}
          </div>

          {/* Right Side - Language Switcher */}
          <div>
            <select
              className="border border-white text-white rounded p-1 bg-transparent focus:outline-none hover:bg-gray-700 transition duration-300"
              value={i18n.language} // Use current language
              onChange={handleLanguageChange}
            >
              <option value="en">{t("english")}</option>
              <option value="ar">{t("arabic")}</option>
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
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex items-center gap-8">
              {[
                { name: t("home"), path: "/" },
                { name: t("about"), path: "/about" },
                { name: t("services"), path: "/services" },
                { name: t("team"), path: "/team" },
              ].map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`text-lg font-bold transition duration-300 ${
                      activeLink === path
                        ? "text-[#19649E]"
                        : "text-gray-400 hover:text-gray-500"
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
                { name: t("home"), path: "/" },
                { name: t("about"), path: "/about" },
                { name: t("services"), path: "/services" },
                { name: t("team"), path: "/team" },
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