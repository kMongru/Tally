import React, { useEffect, useContext, useState } from 'react';
import LocationContext from '../../context/location_context';
import DotsMobileStepper from '../stepper/Stepper';
import LocationCard from '../card/LocationCard';
import axios from 'axios';

import './dashboard.css';

const base_url = 'http://localhost:3001';

const Dashboard = () => {
  const { lat, lng } = useContext(LocationContext);
  const [activeStep, setActiveStep] = useState(0);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (lat != null) {
      console.log(lat + ',' + lng);
      axios
        .get(`${base_url}/search`, {
          params: { lat: lat, lon: lng },
        })
        .then((data) => {
          console.log(data);
          setDetails(data?.data);
          setLoading(false);
        });
    }
  }, [lat]);

  if (lat == null) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <h2>
          Welcome to <strong>Tally!</strong> <br /> Please select a building to
          view availability
        </h2>
      </div>
    );
  }

  return (
    <>
      {!loading ? (
        <>
          <h1 className='location-title'>{details.name}</h1>
          <h2 className='address'>{details.addr}</h2>
          <div className='card_container'>
            <LocationCard cardDetails={details.parts[activeStep]} />
            <DotsMobileStepper
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              size={details.parts ? details.parts.length : 0}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Dashboard;
