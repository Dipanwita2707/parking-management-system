import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import QRCodeComponent from '../components/QRCodeComponent';
import jsPDF from 'jspdf';
import '../styles/BillPage.css';

function BillPage() {
  const { state } = useLocation();

  // Helper function to format date and time in 12-hour format with AM/PM
  const formatDateTime = (date) => {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  // Function to calculate time slot based on the duration
  const calculateTimeSlot = () => {
    const now = new Date();
    let endDate;

    switch (state.timeSlot) {
      case '1 day':
        endDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Add 1 day
        break;
      case '1 week':
        endDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // Add 7 days
        break;
      case '1 month':
        endDate = new Date(now); // Create a copy of `now`
        endDate.setMonth(now.getMonth() + 1); // Add 1 month
        break;
      case '1 year':
        endDate = new Date(now); // Create a copy of `now`
        endDate.setFullYear(now.getFullYear() + 1); // Add 1 year
        break;
      default:
        endDate = now;
    }

    return `${state.timeSlot} (${formatDateTime(now)} to ${formatDateTime(endDate)})`;
  };

  const timeSlot = calculateTimeSlot();

  // Function to generate dynamic UID
  const generateUID = () => {
    return `UID-${Date.now()}-${Math.floor(Math.random() * 101)}`;
  };

  const uid = state.uid || generateUID();

  // Function to generate and download PDF
  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Parking Bill Receipt', 20, 20);
    doc.setFontSize(12);
    doc.text(`UID: ${uid}`, 20, 40);
    doc.text(`Name: ${state.userInfo.name}`, 20, 50);
    doc.text(`Phone: ${state.userInfo.phone}`, 20, 60);
    if (state.userInfo.vehicleNumber) {
      doc.text(`Vehicle Number: ${state.userInfo.vehicleNumber}`, 20, 70);
    }
    doc.text(`Time Slot: ${timeSlot}`, 20, 80);
    doc.text(`Generated On: ${formatDateTime(new Date())}`, 20, 90);

    doc.save('Parking_Receipt.pdf');
  };

  return (
    <div className="BillPage">
      <Header />
      <div className="bill-container">
        {/* Left section with details */}
        <div className="bill-details">
          <h2>Payment Successful</h2>
          <p>UID: {uid}</p>
          <p>Name: {state.userInfo.name}</p>
          <p>Phone: {state.userInfo.phone}</p>
          {state.userInfo.vehicleNumber && <p>Vehicle Number: {state.userInfo.vehicleNumber}</p>}
          <p>Time Slot: {timeSlot}</p>
          <button className="button" onClick={downloadReceipt}>
            Download Receipt
          </button>
        </div>

        {/* Right section with QR code */}
        <div className="qr-section">
          <div className="QRCodeContainer">
            <QRCodeComponent value={`UID: ${uid}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillPage;
