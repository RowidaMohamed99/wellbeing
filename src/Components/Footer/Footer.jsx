import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaEnvelope, // For Gmail
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link if using React Router
import { useTranslation } from "react-i18next"; // Import useTranslation
import Logo from "../../assets/images/logo.png"; // Update this with your actual logo path
import googlePlay from "../../assets/images/google.png";
import appStore from "../../assets/images/app.png";

const FooterComponent = () => {
  const { t } = useTranslation(); // Use the translation hook

  // Social Media Links
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
      icon: <FaEnvelope key="gmail" />, // Gmail Icon
      url: "mailto:wellbeingallday@gmail.com", // Replace with your Gmail address
    },
    {
      icon: (
        <svg
          key="outlook"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Custom Outlook Icon */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      ),
      url: "mailto:wellbeingallday@outlook.com", 
    },
  ];

  return (
    <footer className="w-full bg-white text-[#19649E] border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        {/* Left Side - Logo and Description */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <img src={Logo} alt="Wellbeing Day Logo" className="h-16" />
          <p className="text-sm max-w-xs">{t("footerDescription")}</p>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-extrabold mb-3">{t("menu")}</h2>
          <ul className="space-y-2 text-gray-500 font-medium">
            <li>
              <Link to="/" className="hover:text-[#19649E] transition duration-300">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#19649E] transition duration-300">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#19649E] transition duration-300">
                {t("services")}
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-[#19649E] transition duration-300">
                {t("team")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Account & Policies */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold mb-3">{t("accountAndPolicies")}</h2>
          <ul className="space-y-2 text-gray-500 font-medium">
            <li>{t("privacyPolicy")}</li>
            <li>{t("refundPolicy")}</li>
          </ul>
        </div>

        {/* App Download Links & Social Media Icons */}
        <div className="space-y-4 flex flex-col items-center">
          <h2 className="font-bold">{t("downloadApp")}</h2>
          <div className="flex gap-4 justify-center">
            <img src={googlePlay} alt="Google Play" className="h-10 cursor-pointer" />
            <img src={appStore} alt="App Store" className="h-10 cursor-pointer" />
          </div>
          <div className="flex gap-6 justify-center items-center text-2xl mt-4">
            {socialMediaLinks.map(({ icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#19649E] transition duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-6 border-t border-gray-300">
        {t("copyright")}
      </div>
    </footer>
  );
};

export default FooterComponent;