// src/pages/PaymentPage.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import QRCodeComponent from '../components/QRCodeComponent';
import '../styles/PaymentPage.css';

function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handlePaymentConfirmation = () => {
    navigate('/bill', { state });
  };

  const paymentAmount = state.timeSlot === '1 day' ? 50 : state.timeSlot === '1 week' ? 200 : state.timeSlot === '1 month' ? 500 : 1500;

  return (
    <div className="PaymentPage">
      <Header />
      <h2>Payment</h2>
      <p>Amount to pay: ₹{paymentAmount}</p>
      <QRCodeComponent value={`upi://pay?pa=9531597719@ybl&am=${paymentAmount}&cu=INR`} />
      <button onClick={handlePaymentConfirmation}>Confirm Payment</button>
    </div>
  );
}

export default PaymentPage;
