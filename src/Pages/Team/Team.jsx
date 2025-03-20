import React from 'react';
import WellbeingDayComponent from '../../Components/WellbeingDayComponent/WellbeingDayComponent.jsx'
import MeetExperts from '../../Components/MeetExperts/MeetExperts';


const Team = () => {
    return (
        <>
          <WellbeingDayComponent />
          <MeetExperts showOnlyFirstFour={false} /> 
          
        </>
      );};

export default Team;