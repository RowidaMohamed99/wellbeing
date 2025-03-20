import React, { useState } from 'react';
import WellbeingDayComponent from '../../Components/WellbeingDayComponent/WellbeingDayComponent.jsx';
import mypic from '../../pic/pic.jpg'; // Update this path to your image

const Services = () => {
  const [activeTab, setActiveTab] = useState('Mental Health');

  // Tabs in English
  const tabs = ['Mental Health', 'Physical Health', 'Develop Skills', 'Magazine'];

  // Specialties data in English with small descriptions
  const specialties = {
    mentalHealth: [
      { title: 'Psychological Disorders', desc: 'Support for managing mental health challenges.' },
      { title: 'Therapeutic Programs', desc: 'Structured programs to improve mental well-being.' },
      { title: 'Group Therapy', desc: 'Collaborative therapy sessions for shared growth.' },
      { title: 'Children\'s Disorders', desc: 'Specialized care for children\'s mental health.' },
      { title: 'Problem Solving', desc: 'Guidance to resolve personal and interpersonal issues.' },
      { title: 'Counseling and Guidance', desc: 'Expert advice for emotional and psychological support.' },
      { title: 'Prevention and Follow-Up', desc: 'Proactive strategies to maintain mental health.' },
      { title: 'Rehabilitation and Support', desc: 'Recovery-focused programs for mental wellness.' },
    ],
    physicalHealth: [
      { title: 'Diet Plan', desc: 'Personalized nutrition plans for better health.' },
      { title: 'Fitness Plan', desc: 'Customized exercise routines for fitness goals.' },
      { title: 'Regular Checkups', desc: 'Routine health assessments to monitor well-being.' },
      { title: 'Healthcare', desc: 'Comprehensive care for physical health needs.' },
    ],
    skillsDevelopment: [
      { title: 'Relaxation', desc: 'Techniques to reduce stress and promote calmness.' },
      { title: 'Stress Tolerance', desc: 'Building resilience to handle life\'s pressures.' },
      { title: 'Emotional Regulation', desc: 'Skills to manage emotions effectively.' },
      { title: 'Problem-Solving Strategies', desc: 'Tools to address challenges creatively.' },
      { title: 'Achieving Balance', desc: 'Strategies to balance work, life, and self-care.' },
      { title: 'Confidence Building', desc: 'Boosting self-esteem and belief in oneself.' },
      { title: 'Goal Achievement', desc: 'Steps to set and accomplish personal goals.' },
      { title: 'Success Achievement', desc: 'Pathways to achieve professional and personal success.' },
      { title: 'Trauma Disorder', desc: 'Support for overcoming trauma-related challenges.' },
    ],
  };

  // Cards mapping
  const cards = {
    'Mental Health': specialties.mentalHealth,
    'Physical Health': specialties.physicalHealth,
    'Develop Skills': specialties.skillsDevelopment,
    'Magazine': [
      { title: 'Health Articles', desc: 'Latest insights on health and wellness topics.' },
      { title: 'Expert Interviews', desc: 'Conversations with specialists in health and well-being.' },
    ],
  };

  return (
    <div>
      <WellbeingDayComponent />

      <div className="p-8">
        {/* Navbar Links */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-lg ${activeTab === tab ? 'text-[#19649E] font-bold' : 'text-gray-500'} whitespace-nowrap`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid (Responsive Layout with Row Spacing) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
          {cards[activeTab].map((card, index) => (
            <div key={index} className="relative p-4">
              {/* Image */}
              <img src={mypic} alt="" className='w-full h-64 rounded-[20px] object-cover' />

              {/* Text Box */}
              <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
                <h2 className='font-bold text-lg leading-[100%] text-[#19649E]'>{card.title}</h2>
                <p className='font-medium text-sm leading-[100%] text-[#616161] mt-2'>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;