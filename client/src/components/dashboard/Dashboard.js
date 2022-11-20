import React, { useEffect, useContext, useState } from 'react';
import LocationContext from '../../context/location_context';
import DotsMobileStepper from '../stepper/Stepper';
import LocationCard from '../card/LocationCard';

const Dashboard = ({ details }) => {
  const context = useContext(LocationContext);
  const [activeStep, setActiveStep] = useState(0);

  // const temp = {
  //   name: "Amit Chakma Engineering Building (ACEB)",
  //   address: "Medway, 1151 Richmond St, London, ON N6A 3K7",
  //   lat: "43.0039237",
  //   lon: "-81.2763313",
  //   picture: "https://perkinswill.com/wp-content/uploads/2020/04/AmitChakma_I_LisaLogan_M23.jpg",

  //   parts: [
  //     {
  //       id: 1,
  //       name: "Second Floor",
  //       capacity: 70,
  //       picture: null,
  //       description: "Second Floor study area",
  //       counter: {
  //         count: 60,
  //         update: "2022-11-18  7:17:19 AM"
  //       },
  //       tags: [
  //         {
  //           title: "Loud",
  //           icon: "Campaign",
  //           color: "#9c27b0"
  //         },
  //         {
  //           title: "Study",
  //           icon: "LibraryBooks",
  //           color: "#f44336"
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       name: "Third Floor",
  //       capacity: 50,
  //       picture: null,
  //       description: "Third Floor study area",
  //       tags: [
  //         {
  //           title: "Whispers",
  //           icon: "VolumeUp",
  //           color: "#673ab7"
  //         },
  //         {
  //           title: "Study",
  //           icon: "LibraryBooks",
  //           color: "#f44336"
  //         }
  //       ]
  //     }
  //   ]
  // }
  if (context.lat == null) {
    return (
      <div>
        <h1>Please Select A Building</h1>
      </div>
    );
  }

  return (
    <>
      <h1>{details.name}</h1>
      <h1>{details.address}</h1>
      <LocationCard cardDetails={details.parts[activeStep]} />
      <DotsMobileStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        size={details.parts ? details.parts.length : 0}
      />
    </>
  );
};

export default Dashboard;
