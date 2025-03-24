import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import WellbeingDayComponent from '../../Components/WellbeingDayComponent/WellbeingDayComponent.jsx';

// Import images (same as before)
import anxietyImage from '../../pic/anxiety.jpg';
import depressionImage from '../../pic/depression.jpg';
import phobiaImage from '../../pic/phobia.png';
import ocdImage from '../../pic/ocd.jpg';
import sexualDisorderImage from '../../pic/sexualDisorder.jpg';
import eatingDisorderImage from '../../pic/eatingDisorder.jpg';
import personalityDisorderImage from '../../pic/personalityDisorder.webp';
import addictionImage from '../../pic/addiction.jpg';
import traumaImage from '../../pic/trauma.jpg';
import psychologicalDisordersImage from '../../pic/psychologicalDisorders.jpg';
import therapeuticProgramsImage from '../../pic/therapeuticPrograms.jpg';
import groupTherapyImage from '../../pic/groupTherapy.jpg';
import childrenDisordersImage from '../../pic/childrenDisorders.jpg';
import problemSolvingImage from '../../pic/problemSolving.jpg';
import counselingGuidanceImage from '../../pic/counselingGuidance.jpg';
import preventionFollowUpImage from '../../pic/preventionFollowUp.jpg';
import rehabilitationSupportImage from '../../pic/rehabilitationSupport.jpg';
import dietPlanImage from '../../pic/dietPlan.jpg';
import fitnessPlanImage from '../../pic/fitnessPlan.jpg';
import regularCheckupsImage from '../../pic/regularCheckups.jpg';
import healthcareImage from '../../pic/healthcare.jpg';
import relaxationImage from '../../pic/relaxation.jpg';
import stressToleranceImage from '../../pic/stressTolerance.jpg';
import emotionalRegulationImage from '../../pic/emotionalRegulation.jpg';
import problemSolvingSkillsImage from '../../pic/problemSolvingSkills.jpg';
import achievingBalanceImage from '../../pic/achievingBalance.jpg';
import confidenceBuildingImage from '../../pic/confidenceBuilding.jpg';
import goalAchievementImage from '../../pic/goalAchievement.jpg';
import successAchievementImage from '../../pic/successAchievement.jpg';

const Services = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [activeTab, setActiveTab] = useState('mentalHealth');

  // Tabs
  const tabs = [
    { key: 'mentalHealth', label: t('services2.tabs.mentalHealth') },
    { key: 'physicalHealth', label: t('services2.tabs.physicalHealth') },
    { key: 'developSkills', label: t('services2.tabs.developSkills') },
    { key: 'psychologicalDisorders', label: t('services2.tabs.psychologicalDisorders') },
    { key: 'magazine', label: t('services2.tabs.magazine') },
  ];

  // Specialties data with translations
  const specialties = {
    mentalHealth: [
      { title: t('services2.mentalHealth.psychologicalDisorders'), desc: 'Support for managing mental health challenges.', image: psychologicalDisordersImage },
      { title: t('services2.mentalHealth.therapeuticPrograms'), desc: 'Structured programs to improve mental well-being.', image: therapeuticProgramsImage },
      { title: t('services2.mentalHealth.groupTherapy'), desc: 'Collaborative therapy sessions for shared growth.', image: groupTherapyImage },
      { title: t('services2.mentalHealth.childrenDisorders'), desc: 'Specialized care for children\'s mental health.', image: childrenDisordersImage },
      { title: t('services2.mentalHealth.problemSolving'), desc: 'Guidance to resolve personal and interpersonal issues.', image: problemSolvingImage },
      { title: t('services2.mentalHealth.counselingGuidance'), desc: 'Expert advice for emotional and psychological support.', image: counselingGuidanceImage },
      { title: t('services2.mentalHealth.preventionFollowUp'), desc: 'Proactive strategies to maintain mental health.', image: preventionFollowUpImage },
      { title: t('services2.mentalHealth.rehabilitationSupport'), desc: 'Recovery-focused programs for mental wellness.', image: rehabilitationSupportImage },
    ],
    physicalHealth: [
      { title: t('services2.physicalHealth.dietPlan'), desc: 'Personalized nutrition plans for better health.', image: dietPlanImage },
      { title: t('services2.physicalHealth.fitnessPlan'), desc: 'Customized exercise routines for fitness goals.', image: fitnessPlanImage },
      { title: t('services2.physicalHealth.regularCheckups'), desc: 'Routine health assessments to monitor well-being.', image: regularCheckupsImage },
      { title: t('services2.physicalHealth.healthcare'), desc: 'Comprehensive care for physical health needs.', image: healthcareImage },
    ],
    skillsDevelopment: [
      { title: t('services2.skillsDevelopment.relaxation'), desc: 'Techniques to reduce stress and promote calmness.', image: relaxationImage },
      { title: t('services2.skillsDevelopment.stressTolerance'), desc: 'Building resilience to handle life\'s pressures.', image: stressToleranceImage },
      { title: t('services2.skillsDevelopment.emotionalRegulation'), desc: 'Skills to manage emotions effectively.', image: emotionalRegulationImage },
      { title: t('services2.skillsDevelopment.problemSolvingStrategies'), desc: 'Tools to address challenges creatively.', image: problemSolvingSkillsImage },
      { title: t('services2.skillsDevelopment.achievingBalance'), desc: 'Strategies to balance work, life, and self-care.', image: achievingBalanceImage },
      { title: t('services2.skillsDevelopment.confidenceBuilding'), desc: 'Boosting self-esteem and belief in oneself.', image: confidenceBuildingImage },
      { title: t('services2.skillsDevelopment.goalAchievement'), desc: 'Steps to set and accomplish personal goals.', image: goalAchievementImage },
      { title: t('services2.skillsDevelopment.successAchievement'), desc: 'Pathways to achieve professional and personal success.', image: successAchievementImage },
    ],
    psychologicalDisorders: [
      { title: t('services2.psychologicalDisorders.anxiety'), desc: 'Support for managing anxiety disorders.', image: anxietyImage },
      { title: t('services2.psychologicalDisorders.depression'), desc: 'Help for overcoming depressive symptoms.', image: depressionImage },
      { title: t('services2.psychologicalDisorders.phobia'), desc: 'Therapy for managing phobias.', image: phobiaImage },
      { title: t('services2.psychologicalDisorders.ocd'), desc: 'Treatment for OCD.', image: ocdImage },
      { title: t('services2.psychologicalDisorders.sexualDisorder'), desc: 'Support for sexual health issues.', image: sexualDisorderImage },
      { title: t('services2.psychologicalDisorders.eatingDisorder'), desc: 'Help for eating-related challenges.', image: eatingDisorderImage },
      { title: t('services2.psychologicalDisorders.personalityDisorder'), desc: 'Therapy for personality disorders.', image: personalityDisorderImage },
      { title: t('services2.psychologicalDisorders.addiction'), desc: 'Recovery programs for addiction.', image: addictionImage },
      { title: t('services2.psychologicalDisorders.trauma'), desc: 'Support for trauma-related issues.', image: traumaImage },
    ],
  };

  // Cards mapping
  const cards = {
    mentalHealth: specialties.mentalHealth,
    physicalHealth: specialties.physicalHealth,
    developSkills: specialties.skillsDevelopment,
    psychologicalDisorders: specialties.psychologicalDisorders,
    magazine: [], // Empty array for Magazine tab
  };

  return (
    <div>
      {/*<WellbeingDayComponent />*/}

      <div className="p-8">
        {/* Navbar Links */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`text-lg cursor-pointer ${activeTab === tab.key ? 'text-[#19649E] font-bold' : 'text-gray-500'} whitespace-nowrap`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'magazine' ? (
            <motion.div
              key="comingSoon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <p className="text-2xl text-gray-500 font-bold">{t('services.comingSoon')}</p>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6"
            >
              {cards[activeTab].map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative p-4"
                >
                  <img src={card.image} alt={card.title} className="w-full h-64 rounded-[20px] object-cover" />
                  <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
                    <h2 className="font-bold text-lg leading-[100%] text-[#19649E]">{card.title}</h2>
                    <p className="font-medium text-sm leading-[100%] text-[#616161] mt-2">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;