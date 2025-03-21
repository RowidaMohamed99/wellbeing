import React from 'react';
import WellbeingDayComponent from '../../Components/WellbeingDayComponent/WellbeingDayComponent.jsx';
import WellbeindDay from '../../Components/WellbeindDay/WellbeindDay';
import AboutInfo from '../../Components/AboutInfo/AboutInfo'

const About = () => {
  return (
    <>
      <WellbeingDayComponent />
      <AboutInfo/>
      <WellbeindDay showHeader={false} />
    </>
  );
};

export default About;