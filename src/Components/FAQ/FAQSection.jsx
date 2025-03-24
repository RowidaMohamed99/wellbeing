import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../assets/images/faq.png';
import topImage from '../../assets/images/doctor.png';
import appStoreImage from '../../assets/images/app.png';
import googlePlayImage from '../../assets/images/google.png';

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <div className="relative z-10 mb-8 mt-8">
        <img src={topImage} alt="Top Image" className="w-full h-auto object-cover" />
        <div className="absolute bottom-4 right-3 sm:bottom-20 sm:right-28 flex space-x-1 sm:space-x-4">
          <a href="#">
            <img src={googlePlayImage} alt="Google Play" className="w-8 sm:w-28 h-auto" />
          </a>
          <a href="#">
            <img src={appStoreImage} alt="App Store" className="w-7.5 sm:w-28 h-auto" />
          </a>
        </div>
      </div>

      <div 
        className="relative z-0 bg-black/60"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black/60 w-full h-full absolute inset-0"></div>

        <div className="relative z-10 py-8 px-4">
          <div className="text-white p-4 sm:p-8 rounded-lg">
            <h2 className="text-2xl sm:text-3xl text-center mb-6">{t("faqTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions.map((question, index) => (
                <div key={index} className="bg-transparent text-white rounded-lg overflow-hidden border border-white/30">
                  <button
                    className="w-full text-left px-4 py-3 text-base sm:text-lg font-medium hover:bg-white/10 flex justify-between items-center"
                    onClick={() => handleToggle(index)}
                  >
                    {question}
                    <span>{openIndex === index ? '-' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-white/10 text-white text-sm sm:text-base">{answers[index]}</div>
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
