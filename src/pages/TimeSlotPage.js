// src/pages/TimeSlotPage.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/TimeSlotPage.css';

function TimeSlotPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleTimeSlotSelect = (slot) => {
    navigate('/user-info', { state: { ...state, timeSlot: slot } });
  };

  return (
    <div className="TimeSlotPage">
      <Header />
      <h2>Select Your Time Slot</h2>
      <div className="button-container">
        <div className="card" onClick={() => handleTimeSlotSelect('1 day')}>
          <h3>1 Day</h3>
          <p>Quick access to parking for the day</p>
          <img src="https://via.placeholder.com/150/007bff/ffffff?text=1+Day" alt="1 day" />
        </div>
        <div className="card" onClick={() => handleTimeSlotSelect('1 week')}>
          <h3>1 Week</h3>
          <p>Stay for the week</p>
          <img src="https://via.placeholder.com/150/007bff/ffffff?text=1+Week" alt="1 week" />
        </div>
        <div className="card" onClick={() => handleTimeSlotSelect('1 month')}>
          <h3>1 Month</h3>
          <p>Long-term parking solution</p>
          <img src="https://via.placeholder.com/150/007bff/ffffff?text=1+Month" alt="1 month" />
        </div>
        <div className="card" onClick={() => handleTimeSlotSelect('1 year')}>
          <h3>1 Year</h3>
          <p>Annual parking for maximum convenience</p>
          <img src="https://via.placeholder.com/150/007bff/ffffff?text=1+Year" alt="1 year" />
        </div>
      </div>
      <button className="button" onClick={() => handleTimeSlotSelect('1 day')}>Confirm</button>
    </div>
  );
}

export default TimeSlotPage;
