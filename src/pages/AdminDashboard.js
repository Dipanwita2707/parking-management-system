// src/pages/AdminDashboard.js

import React, { useState } from 'react';
import Header from '../components/Header'; // Reusable Header Component
import Sidebar from '../components/Sidebar'; // Reusable Sidebar Component
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const AdminDashboard = () => {
  const [activeUsers, setActiveUsers] = useState(25);
  const [totalIncome, setTotalIncome] = useState(10500);
  const [availableSlots, setAvailableSlots] = useState(10);
  const [userList, setUserList] = useState([
    { uid: 'UID12345', name: 'Sourav', vehicle: 'Bike', payment: 'Cash', status: 'Active' },
    { uid: 'UID12346', name: 'Dipanwita', vehicle: 'Cycle', payment: 'UPI', status: 'Inactive' },
    { uid: 'UID12347', name: 'Chirag', vehicle: 'Car', payment: 'Cash', status: 'Active' },
  ]);
  const [paymentHistory, setPaymentHistory] = useState([
    { uid: 'UID12345', name: 'Sourav', amount: 50, paymentMethod: 'Cash' },
    { uid: 'UID12346', name: 'Chirag', amount: 200, paymentMethod: 'UPI' },
  ]);

  const incomeTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Income in ₹',
        data: [5000, 7000, 8500, 6000, 10500],
        backgroundColor: '#00b4d8',
        borderRadius: 5,
      },
    ],
  };

  const vehicleTypeData = {
    labels: ['Bike', 'Cycle', 'Car'],
    datasets: [
      {
        data: [10, 5, 5],
        backgroundColor: ['#48cae4', '#023e8a', '#f1faee'],
      },
    ],
  };

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      height: '100vh',
      background: 'linear-gradient(135deg, #1e293b, #0f172a)',
      color: '#e2e8f0',
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      gap: '20px',
      overflowY: 'auto',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '20px',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    tableContainer: {
      overflowX: 'auto',
      width: '100%',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#023e8a',
      color: '#f1faee',
      textAlign: 'left',
      padding: '12px',
      borderBottom: '2px solid #00b4d8',
    },
    tableRow: {
      padding: '10px',
      borderBottom: '1px solid #f1faee',
    },
    chart: {
      width: '100%',
      maxWidth: '600px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        <div style={styles.content}>
          {/* Summary Cards */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'  }}>
            {[{ label: 'Total Income', value: `₹${totalIncome}` },
              { label: 'Active Users', value: activeUsers },
              { label: 'Available Slots', value: availableSlots },
            ].map((item, index) => (
              <div
                key={index}
                style={styles.card}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <h4>{item.label}</h4>
                <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color:'white'}}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Analytics Section */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={styles.card}>
              <h3>Income Trend</h3>
              <div style={styles.chart}>
                <Bar data={incomeTrendData} options={{ maintainAspectRatio: true }} />
              </div>
            </div>
            <div style={styles.card}>
              <h3>Vehicle Type Breakdown</h3>
              <div style={styles.chart}>
                <Pie data={vehicleTypeData} options={{ maintainAspectRatio: true }} />
              </div>
            </div>
          </div>

          {/* User List */}
          <div style={{ ...styles.card, width: '100%', maxWidth: '800px' }}>
            <h3>User List</h3>
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>UID</th>
                    <th style={styles.tableHeader}>Name</th>
                    <th style={styles.tableHeader}>Vehicle Type</th>
                    <th style={styles.tableHeader}>Payment Method</th>
                    <th style={styles.tableHeader}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {userList.map((user, index) => (
                    <tr key={index}>
                      <td style={styles.tableRow}>{user.uid}</td>
                      <td style={styles.tableRow}>{user.name}</td>
                      <td style={styles.tableRow}>{user.vehicle}</td>
                      <td style={styles.tableRow}>{user.payment}</td>
                      <td style={styles.tableRow}>{user.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment History */}
          <div style={{ ...styles.card, width: '100%', maxWidth: '800px' }}>
            <h3>Payment History</h3>
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>UID</th>
                    <th style={styles.tableHeader}>Name</th>
                    <th style={styles.tableHeader}>Amount (₹)</th>
                    <th style={styles.tableHeader}>Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment, index) => (
                    <tr key={index}>
                      <td style={styles.tableRow}>{payment.uid}</td>
                      <td style={styles.tableRow}>{payment.name}</td>
                      <td style={styles.tableRow}>{payment.amount}</td>
                      <td style={styles.tableRow}>{payment.paymentMethod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
