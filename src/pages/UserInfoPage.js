// src/pages/UserInfoPage.js

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/UserInfoPage.css';

function UserInfoPage() {
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({ name: '', phone: '', vehicleNumber: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { ...state, userInfo } });
  };

  return (
    <div className="UserInfoPage">
      <Header />
      <h2>Enter User Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          required
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />
        {state.vehicle === 'bike' && (
          <input
            type="text"
            placeholder="Bike Number"
            required
            onChange={(e) => setUserInfo({ ...userInfo, vehicleNumber: e.target.value })}
          />
        )}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default UserInfoPage;
