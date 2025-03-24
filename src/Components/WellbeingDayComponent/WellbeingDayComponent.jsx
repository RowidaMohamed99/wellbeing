import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import bg from "../../assets/images/dr.png"; // Ensure this path is correct
import { FaLock, FaUserMd, FaDollarSign } from 'react-icons/fa'; // Import icons

const WellbeingDayComponent = ({ hideHero = false }) => {
  const { t } = useTranslation(); // Use the translation hook
  const [activeDot, setActiveDot] = useState(0);

  // Hardcoded dot texts
  const dotTexts = [
    t("wellbeingDayDescription1"),
    t("wellbeingDayDescription2"),
    t("wellbeingDayDescription3"),
    t("wellbeingDayDescription4"),
  ];

  // Auto-transition logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prevDot) => (prevDot + 1) % dotTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [dotTexts.length]);

  return (
    <div className="w-full h-auto pb-10">
      {/* Conditionally render the Hero Section */}
      {!hideHero && (
        <div
          className="relative flex items-center h-[77vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-60" style={{ zIndex: 0 }}></div>

          {/* Content */}
          <div
            className="relative z-10 p-4 sm:p-6 max-w-lg mx-auto text-center md:text-left md:mx-0 md:ml-10"
          >
            {/* Description */}
            <p className="text-gray-600 font-medium text-base sm:text-xl mb-6 animate-slide-in">
              {dotTexts[activeDot]} {/* Translated description */}
            </p>

            {/* Slider Dots */}
            <div className="flex space-x-2 mb-6 justify-center md:justify-start">
              {dotTexts.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    activeDot === index ? 'bg-[#19649E] scale-125' : 'bg-gray-400'
                  } hover:bg-white`}
                  onClick={() => setActiveDot(index)}
                ></div>
              ))}
            </div>

            {/* Button */}
            <Link to="/about">
              <button className="bg-[#19649E] cursor-pointer text-white px-4 sm:px-6 py-2 rounded transition-all duration-300 hover:bg-[#4e738f] hover:scale-105 animate-bounce-in">
                {t("readMore")} {/* Translated button text */}
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Always render the Wellbeing Day Content section */}
      <div className="bg-gradient-to-br from-[#d1e6fa] to-[#e6f7ff] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#19649E] text-center mb-12">
            {t("discoverPower")} {/* Translated title */}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Confidentiality and Privacy */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#19649E]/10">
              <div className="flex justify-center mb-6">
                <FaLock className="text-4xl text-[#19649E]" />
              </div>
              <h3 className="text-xl font-semibold text-[#19649E] mb-4 text-center">
                {t("confidentialityTitle")} {/* Translated title */}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {t("confidentialityDescription")} {/* Translated description */}
              </p>
            </div>

            {/* Distinguished Specialists */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#19649E]/10">
              <div className="flex justify-center mb-6">
                <FaUserMd className="text-4xl text-[#19649E]" />
              </div>
              <h3 className="text-xl font-semibold text-[#19649E] mb-4 text-center">
                {t("specialistsTitle")} {/* Translated title */}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {t("specialistsDescription")} {/* Translated description */}
              </p>
            </div>

            {/* Lowest Cost for the Best Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#19649E]/10">
              <div className="flex justify-center mb-6">
                <FaDollarSign className="text-4xl text-[#19649E]" />
              </div>
              <h3 className="text-xl font-semibold text-[#19649E] mb-4 text-center">
                {t("lowestCostTitle")} {/* Translated title */}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {t("lowestCostDescription")} {/* Translated description */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellbeingDayComponent;