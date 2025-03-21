import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export default function Therapy() {
  const { t } = useTranslation();

  return (
    <>
      {/* third section */}
      <div className='w-full max-w-screen-xl mx-auto mt-5'>
        <div className='cointainer md:h-[349px] rounded-[20px] bg-[#19649E]'>
          <h2 className='text-center font-bold text-[35px] leading-[100%] text-white p-5'>{t('therapyTitle')}</h2>
          <h5 className='text-center text-white font-medium text-[20px] leading-[100%]'>{t('therapySubtitle')}</h5>
          <div className='md:h-[198px] left-[116px] gap-[92px]'>
            <div className='grid md:grid-cols-3 text-center mt-8 mx-auto text-white'>
              {/* first div */}
              <div className='md:border-r-[4px] border-0 border-[#FFFFFF] p-6 flex flex-col items-center text-center'>
                <FaMagnifyingGlass className='w-[60px] h-[60px] mb-4' />
                <h2 className='font-bold text-[20px] leading-[100%] tracking-[0%] text-center mb-4'>{t('therapyStep1Title')}</h2>
                <p className='font-bold text-[20px] leading-[100%] tracking-[0%] text-center'>{t('therapyStep1Description')}</p>
              </div>
              {/* second div */}
              <div className='md:border-r-[4px] border-0 border-[#FFFFFF] p-6 flex flex-col items-center text-center'>
                <IoBagCheckOutline className='w-[60px] h-[60px] mb-4' />
                <h2 className='font-bold text-[20px] leading-[100%] tracking-[0%] text-center mb-4'>{t('therapyStep2Title')}</h2>
                <p className='font-bold text-[20px] leading-[100%] tracking-[0%] text-center'>{t('therapyStep2Description')}</p>
              </div>
              {/* third div */}
              <div className='p-6 flex flex-col items-center text-center'>
                <FaUser className='w-[60px] h-[60px] mb-4' />
                <h2 className='font-bold text-[20px] leading-[100%] tracking-[0%] text-center mb-4'>{t('therapyStep3Title')}</h2>
                <p className='font-bold text-[20px] leading-[100%] tracking-[0%] text-center'>{t('therapyStep3Description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}