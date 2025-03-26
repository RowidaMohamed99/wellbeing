import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logo.png";

const HeaderComponent = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get current language from URL or i18n
  const currentLang = location.pathname.split('/')[1] === 'privacy-policy' 
    ? location.pathname.split('/')[2] 
    : i18n.language.split('-')[0] || 'en';

  const handleLanguageChange = async (newLang) => {
    try {
      await i18n.changeLanguage(newLang);
      
      // Update URL if on privacy policy page
      if (location.pathname.includes('/privacy-policy')) {
        navigate(`/privacy-policy/${newLang}`);
      }
    } catch (err) {
      console.error('Error changing language:', err);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("services"), path: "/services" },
    { name: t("team"), path: "/team" },
  ];

  const socialMediaLinks = [
    {
      icon: <FaFacebook key="facebook" />,
      url: "https://www.facebook.com/share/1Ajitu1uMz/",
    },
    {
      icon: <FaYoutube key="youtube" />,
      url: "https://youtube.com/@wellbeing.day.therapy?si=D3dSNiXHGMi8hbbx",
    },
    {
      icon: <FaInstagram key="instagram" />,
      url: "https://www.instagram.com/wellbeingallday?igsh=YWQxOGoyZXc5NWhz",
    },
    {
      icon: <FaEnvelope key="gmail" />,
      url: "mailto:wellbeingallday@gmail.com"
    },
  ];

  return (
    <div dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Top Navbar */}
      <div className="w-full bg-[#19649E] text-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {socialMediaLinks.map(({ icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer justify-center items-center bg-white p-1 sm:p-2 rounded-full text-[#19649E] hover:bg-gray-200 transition duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

          <div>
            <select
              className="border border-white text-white rounded p-1 bg-transparent focus:outline-none hover:bg-gray-700 transition duration-300"
              value={currentLang}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="en">{t("english")}</option>
              <option value="ar">{t("arabic")}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo on the Left */}
        <div className="flex items-center">
          <img src={Logo} alt={t('wellbeingDayTitle2')} className="h-16 w-20" />
        </div>

        {/* Navigation Links in the Center */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`text-lg font-bold transition duration-300 ${
                    location.pathname === path
                      ? "text-[#19649E]"
                      : "text-gray-400 hover:text-gray-500"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button on the Right */}
        <div className="md:hidden">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`text-lg text-[#19649E] hover:text-gray-500 transition duration-300 ${
                    location.pathname === path ? "font-bold" : ""
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>

    </div>
  );
};

export default HeaderComponent;