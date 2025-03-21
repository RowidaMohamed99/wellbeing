import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import pic2 from '../../pic/pic2.jpg';

export default function About() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <>
      <div className="about my-6">
        <div className="container mx-auto max-w-screen-lg p-4 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
            {/* Image Section */}
            <div className="img pt-4">
              <img src={pic2} alt="" />
            </div>

            {/* Info Section */}
            <div className="info mt-8 sm:mt-6 text-center md:text-left">
              <h2 className="font-bold text-[36px] leading-[100%] tracking-normal text-[#19649E] py-3">
                {t("aboutTitle")} {/* Translated title */}
              </h2>
              <p className="font-bold text-[17px] md:text-xl leading-[100%] tracking-normal text-[#7a7979]">
                {t("aboutDescription")} {/* Translated description */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}