import React from 'react';
import WellbeingDayComponent from '../../Components/WellbeingDayComponent/WellbeingDayComponent.jsx';
import WellbeindDay from '../../Components/WellbeindDay/WellbeindDay';

const About = () => {
  return (
    <>
      <WellbeingDayComponent />
      <WellbeindDay showHeader={false} />
    </>
  );
};

export default About;