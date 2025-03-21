import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import backgroundImage from '../../assets/images/faq.png';
import topImage from '../../assets/images/doctor.png';

const FAQSection = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open question

  // Translated questions and answers
  const questions = [
    t("faqQuestion1"),
    t("faqQuestion2"),
    t("faqQuestion3"),
    t("faqQuestion4"),
    t("faqQuestion5"),
    t("faqQuestion6"),
  ];

  const answers = [
    t("faqAnswer1"),
    t("faqAnswer2"),
    t("faqAnswer3"),
    t("faqAnswer4"),
    t("faqAnswer5"),
    t("faqAnswer6"),
  ];

  const handleToggle = (index) => {
    // Close the currently open question or open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative">
      {/* Top Image */}
      <div className="relative z-10 mb-8 mt-8">
        <img src={topImage} alt="Top Image" className="w-full h-auto object-cover" />
      </div>

      {/* Background Image */}
      <div 
        className="relative z-0 bg-black/60"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Transparent Layer */}
        <div className="bg-black/60 w-full h-full absolute inset-0"></div>

        {/* FAQ Content */}
        <div className="relative z-10 py-8 px-4">
          <div className="text-white p-8 rounded-lg">
            <h2 className="text-3xl text-center mb-6">{t("faqTitle")}</h2> {/* Translated title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions.map((question, index) => (
                <div key={index} className="bg-transparent text-white rounded-lg overflow-hidden border border-white/30">
                  <button
                    className="w-full text-left px-4 py-3 text-lg font-medium hover:bg-white/10 flex justify-between items-center"
                    onClick={() => handleToggle(index)}
                  >
                    {question}
                    <span>{openIndex === index ? '-' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-white/10 text-white">{answers[index]}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;