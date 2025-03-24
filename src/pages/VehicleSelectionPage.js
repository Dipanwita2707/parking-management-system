// src/pages/VehicleSelectionPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaBicycle, FaMotorcycle } from 'react-icons/fa';
import '../styles/VehicleSelectionPage.css';

function VehicleSelectionPage() {
  const navigate = useNavigate();

  // Fallback handler in case images fail to load
  const handleImageError = (e) => {
    e.target.style.display = 'none';  // Hide the image if it fails to load
  };

  return (
    <div className="VehicleSelectionPage">
      <Header />
      <h2>Select Your Ride</h2>
      <div className="vehicle-card-container">
        <div
          className="vehicle-card bike-card"
          onClick={() => navigate('/time-slot', { state: { vehicle: 'bike' } })}
        >
          <FaMotorcycle className="vehicle-icon" />
          <h3>Bike</h3>
          <p>Park your bike easily and securely</p>
          <img
            src="https://cdn.pixabay.com/photo/2015/01/19/13/51/motorcycle-604282_960_720.jpg"
            alt="Bike"
            className="vehicle-image"
            onError={handleImageError} // Hides image if there's an error
          />
        </div>
        <div
          className="vehicle-card cycle-card"
          onClick={() => navigate('/time-slot', { state: { vehicle: 'cycle' } })}
        >
          <FaBicycle className="vehicle-icon" />
          <h3>Cycle</h3>
          <p>Find a convenient spot for your cycle</p>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/02/06/00/bicycle-2116479_960_720.jpg"
            alt="Cycle"
            className="vehicle-image"
            onError={handleImageError} // Hides image if there's an error
          />
        </div>
      </div>
    </div>
  );
}

export default VehicleSelectionPage;
