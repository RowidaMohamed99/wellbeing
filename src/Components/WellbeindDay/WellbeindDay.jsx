import React from 'react';
import mentalHealthImg from '../../pic/pic.jpg'; // Replace with actual image paths
import physicalHealthImg from '../../pic/pic.jpg';
import skillsDevelopmentImg from '../../pic/pic.jpg';
import magazineImg from '../../pic/pic.jpg';

const WellbeingDay = ({ showHeader = true }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-5">
      {/* Conditional Header */}
      {showHeader && (
        <header className="text-center">
          <h2 className="font-bold text-[36px] leading-[100%] tracking-[0%] text-[#19649E]">
            Why Wellbeing Day?
          </h2>
          <p className="font-medium p-4 text-[20px] leading-[100%] tracking-[0%] text-[#616161]">
            This platform and this application are a true achievement, as we have made the most of technology to serve humanity. We have transferred the clinic's work as it is to the application, with its components and conditions.
          </p>
        </header>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[20px] md:gap-[20px] p-6">
        {/* Mental Health Card */}
        <div className="img relative p-4">
          <img src={mentalHealthImg} alt="Mental Health" className="w-full h-64 rounded-[20px] object-cover" />
          <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
            <h2 className="font-bold text-lg mb-3 leading-[100%] text-[#19649E]">Mental Health</h2>
            <p className="font-medium text-sm leading-[100%] text-[#616161]">
              Support for managing mental health challenges, including therapy, counseling, and rehabilitation programs.
            </p>
          </div>
        </div>

        {/* Physical Health Card */}
        <div className="img relative p-4">
          <img src={physicalHealthImg} alt="Physical Health" className="w-full h-64 rounded-[20px] object-cover" />
          <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
            <h2 className="font-bold text-lg mb-3 leading-[100%] text-[#19649E]">Physical Health</h2>
            <p className="font-medium text-sm leading-[100%] text-[#616161]">
              Programs for improving physical well-being, including fitness plans, diet guidance, and regular checkups.
            </p>
          </div>
        </div>

        {/* Skills Development Card */}
        <div className="img relative p-4">
          <img src={skillsDevelopmentImg} alt="Skills Development" className="w-full h-64 rounded-[20px] object-cover" />
          <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
            <h2 className="font-bold text-lg mb-3 leading-[100%] text-[#19649E]">Skills Development</h2>
            <p className="font-medium text-sm leading-[100%] text-[#616161]">
              Tools and strategies for personal growth, including stress management, emotional regulation, and goal achievement.
            </p>
          </div>
        </div>

        {/* Magazine Card */}
        <div className="img relative p-4">
          <img src={magazineImg} alt="Magazine" className="w-full h-64 rounded-[20px] object-cover" />
          <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
            <h2 className="font-bold text-lg mb-3 leading-[100%] text-[#19649E]">Magazine</h2>
            <p className="font-medium text-sm leading-[100%] text-[#616161]">
              Access articles, expert interviews, and the latest insights on health and wellness topics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellbeingDay;