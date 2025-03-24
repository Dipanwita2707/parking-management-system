// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VehicleSelectionPage from './pages/VehicleSelectionPage';
import UIDFormPage from './pages/UIDFormPage';
import TimeSlotPage from './pages/TimeSlotPage';
import UserInfoPage from './pages/UserInfoPage';
import PaymentPage from './pages/PaymentPage';
import BillPage from './pages/BillPage';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/usermanagement'; // Import UserManagement page
import PaymentManagement from './pages/PaymentManagement'; // Import PaymentManagement page
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicle-selection" element={<VehicleSelectionPage />} />
        <Route path="/uid-form" element={<UIDFormPage />} />
        <Route path="/time-slot" element={<TimeSlotPage />} />
        <Route path="/user-info" element={<UserInfoPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/bill" element={<BillPage />} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-users" element={<UserManagement />} /> {/* User Management route */}
        <Route path="/admin-payments" element={<PaymentManagement />} /> {/* Payment Management route */}
      </Routes>
    </Router>
  );
}

export default App;
