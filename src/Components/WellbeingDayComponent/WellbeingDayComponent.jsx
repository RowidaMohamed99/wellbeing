import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bg from "../../assets/images/dr.png"; // Ensure this path is correct

const WellbeingDayComponent = () => {
  const [activeDot, setActiveDot] = useState(0);

  // Dot texts relative to the first dot text
  const dotTexts = [
    "This platform and this application are a true achievement, as we have made the most of technology to serve humanity. We have transferred the clinic's work as it is to the application, with its components and more.",
    "Our virtual consultations allow you to connect with licensed professionals anytime, anywhere, ensuring accessibility and convenience.",
    "Through personalized wellness plans, we empower you to take control of your mental health journey with tailored support.",
    "Join our community of users who are actively improving their wellbeing through innovative digital solutions."
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
    {/* Hero Section */}
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
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-bold text-[#19649E] mb-4 animate-fade-in">
            Wellbeing Day
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-medium text-base sm:text-xl mb-6 animate-slide-in">
            {dotTexts[activeDot]}
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
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WellbeingDayComponent;