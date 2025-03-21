import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { useTranslation } from 'react-i18next'; // Import useTranslation
import mentalHealthImg from '../../pic/mentalHealthImg.png'; // Replace with actual image paths
import physicalHealthImg from '../../pic/physicalHealthImg.jpg';
import skillsDevelopmentImg from '../../pic/skillsDevelopmentImg.jpg';
import magazineImg from '../../pic/magazine.jpg';
import psychologicalDisordersImg from '../../pic/psychologicalDisorders.jpg'; // Import image for Psychological Disorders

const WellbeingDay = ({ showHeader = true }) => {
  const { t } = useTranslation(); // Use the translation hook

  // Animation variants for the header
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-5 px-4 sm:px-6"> {/* Added horizontal padding for small screens */}
      {/* Conditional Header */}
      {showHeader && (
        <motion.header
          className="mx-auto text-center max-w-[750px] p-4"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="font-bold text-2xl sm:text-3xl mb-4 md:text-4xl leading-[100%] tracking-[0%] text-[#19649E]">
            {t("wellbeingDayTitle")} {/* Translated title */}
          </h2>
          <p className="font-medium text-base sm:text-lg md:text-xl leading-[100%] tracking-[0%] text-[#616161] mt-4">
            {t("wellbeingDayDescription")} {/* Translated description */}
          </p>
        </motion.header>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 sm:gap-6 p-4 sm:p-6 mb-12">
        {/* Mental Health Card */}
        <motion.div
          className="relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }} // Add hover effect
        >
          <img src={mentalHealthImg} alt="Mental Health" className="w-full h-48 sm:h-64 rounded-[20px] object-cover" />
          <div className="absolute bottom-[-20px] sm:bottom-[-30px] left-2 sm:left-4 right-2 sm:right-4 text-center bg-white p-2 sm:p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
            <h2 className="font-bold text-base sm:text-lg mb-4 leading-[100%] text-[#19649E]">
              {t("mentalHealthTitle")} {/* Translated title */}
            </h2>
            <p className="font-medium text-xs sm:text-sm leading-[100%] text-[#616161]">
              {t("mentalHealthDescription")} {/* Translated description */}
            </p>
          </div>
        </motion.div>

        {/* Physical Health Card */}
        <motion.div
          className="relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }} // Add hover effect
        >
          <img src={physicalHealthImg} alt="Physical Health" className="w-full h-48 sm:h-64 rounded-[20px] object-cover" />
          <div className="absolute bottom-[-20px] sm:bottom-[-30px] left-2 sm:left-4 right-2 sm:right-4 text-center bg-white p-2 sm:p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
            <h2 className="font-bold text-base sm:text-lg mb-4 leading-[100%] text-[#19649E]">
              {t("physicalHealthTitle")} {/* Translated title */}
            </h2>
            <p className="font-medium text-xs sm:text-sm leading-[100%] text-[#616161]">
              {t("physicalHealthDescription")} {/* Translated description */}
            </p>
          </div>
        </motion.div>

        {/* Skills Development Card */}
        <motion.div
          className="relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }} // Add hover effect
        >
          <img src={skillsDevelopmentImg} alt="Skills Development" className="w-full h-48 sm:h-64 rounded-[20px] object-cover" />
          <div className="absolute bottom-[-20px] sm:bottom-[-30px] left-2 sm:left-4 right-2 sm:right-4 text-center bg-white p-2 sm:p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
            <h2 className="font-bold text-base sm:text-lg mb-4 leading-[100%] text-[#19649E]">
              {t("skillsDevelopmentTitle")} {/* Translated title */}
            </h2>
            <p className="font-medium text-xs sm:text-sm leading-[100%] text-[#616161]">
              {t("skillsDevelopmentDescription")} {/* Translated description */}
            </p>
          </div>
        </motion.div>

        {/* Psychological Disorders Card */}
        <motion.div
          className="relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }} // Add hover effect
        >
          <img src={psychologicalDisordersImg} alt="Psychological Disorders" className="w-full h-48 sm:h-64 rounded-[20px] object-cover" />
          <div className="absolute bottom-[-20px] sm:bottom-[-30px] left-2 sm:left-4 right-2 sm:right-4 text-center bg-white p-2 sm:p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
            <h2 className="font-bold text-base sm:text-lg mb-4 leading-[100%] text-[#19649E]">
              {t("psychologicalDisordersTitle")} {/* Translated title */}
            </h2>
            <p className="font-medium text-xs sm:text-sm leading-[100%] text-[#616161]">
              {t("psychologicalDisordersDescription")} {/* Translated description */}
            </p>
          </div>
        </motion.div>

        {/* Magazine Card */}
        <motion.div
          className="relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }} // Add hover effect
        >
          <img src={magazineImg} alt="Magazine" className="w-full h-48 sm:h-64 rounded-[20px] object-cover" />
          <div className="absolute bottom-[-20px] sm:bottom-[-30px] left-2 sm:left-4 right-2 sm:right-4 text-center bg-white p-2 sm:p-3 rounded-[10px] border-[0.6px] border-[#19649E] shadow-sm">
            <h2 className="font-bold text-base sm:text-lg leading-[100%] mb-4 text-[#19649E]">
              {t("magazineTitle")} {/* Translated title */}
            </h2>
            <p className="font-medium text-xs sm:text-sm leading-[100%] text-[#616161]">
              {t("magazineDescription")} {/* Translated description */}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WellbeingDay;