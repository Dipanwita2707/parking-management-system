// src/pages/UIDFormPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/UIDFormPage.css';

function UIDFormPage() {
  const [uid, setUid] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uid) {
      navigate('/time-slot', { state: { uid } });
    } else {
      alert('Please enter a valid UID');
    }
  };

  return (
    <div className="UIDFormPage">
      <Header />
      <h2>Enter UID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          placeholder="Enter your UID"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UIDFormPage;

