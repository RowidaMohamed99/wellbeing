import React from 'react';
import Therapy from '../../Components/Therapy/Therapy';
import MeetExperts from '../../Components/MeetExperts/MeetExperts';
import WellbeindDay from '../../Components/WellbeindDay/WellbeindDay';
import FAQSection from '../../Components/FAQ/FAQSection.jsx';
import WellbeingDayComponent from '../../Components/WellbeingDayComponent/WellbeingDayComponent.jsx';

export default function Home() {
  return (
    <>
      <WellbeingDayComponent />
      <WellbeindDay />
      <Therapy />
      <MeetExperts showOnlyFirstFour={true} /> {/* Pass prop to limit experts */}
      <FAQSection />
    </>
  );
}