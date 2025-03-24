// src/pages/HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaUserPlus, FaUserCheck, FaUserShield } from 'react-icons/fa';  // Added FaUserShield for admin icon
import '../styles/HomePage.css';
import parkingImage from '../assets/homeimg.jpg';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      <Header />
      <h1>Welcome to the Parking System</h1>
      <img src={parkingImage} alt="Parking System" className="welcome-image" />
      <div className="user-cards">
        <div className="card new-user-card" onClick={() => navigate('/vehicle-selection')}>
          <FaUserPlus className="card-icon" />
          <h3>New User</h3>
          <p>Sign up and get started with parking.</p>
        </div>
        <div className="card existing-user-card" onClick={() => navigate('/uid-form')}>
          <FaUserCheck className="card-icon" />
          <h3>Existing User</h3>
          <p>Access your account and manage your parking.</p>
        </div>
        {/* Admin card added */}
        <div className="card admin-card" onClick={() => navigate('/admin-dashboard')}>
          <FaUserShield className="card-icon" />
          <h3>Admin</h3>
          <p>Go to the Admin Dashboard to manage users and view statistics.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
