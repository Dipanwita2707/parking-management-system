// src/pages/PaymentPage.js

import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,   // Register the Point element
  Title,
  Tooltip,
  Legend,
  ArcElement,     // Register the Arc element (for pie charts)
} from 'chart.js';

// Register the necessary elements for chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,   // Point element needed for Line charts
  Title,
  Tooltip,
  Legend,
  ArcElement      // Arc element needed for Pie charts
);

const PaymentPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [incomeToday, setIncomeToday] = useState(0);
  const [incomeLastMonth, setIncomeLastMonth] = useState(0);
  
  const incomeData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Income in ₹',
        data: [500, 700, 900, 1100, 800, 950, 1200], // Example data
        fill: true,
        backgroundColor: '#00b4d8',
        borderColor: '#00b4d8',
        tension: 0.1,
      },
    ],
  };

  const paymentMethodData = {
    labels: ['Cash', 'UPI', 'Card'],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ['#48cae4', '#023e8a', '#f1faee'],
      },
    ],
  };

  useEffect(() => {
    // Fetch the transaction and income data (mocked for now)
    const fetchedTransactions = [
      { uid: 'UID12345', name: 'John Doe', amount: 500, method: 'Cash', status: 'Completed', date: '2024-11-17' },
      { uid: 'UID12346', name: 'Jane Smith', amount: 200, method: 'UPI', status: 'Pending', date: '2024-11-17' },
      { uid: 'UID12347', name: 'Sam Green', amount: 300, method: 'Card', status: 'Completed', date: '2024-11-16' },
    ];
    
    setTransactions(fetchedTransactions);
    setIncomeToday(1000); // Example income
    setIncomeLastMonth(20000); // Example income
  }, []);

  const togglePaymentStatus = (uid) => {
    setTransactions((prev) =>
      prev.map((txn) =>
        txn.uid === uid ? { ...txn, status: txn.status === 'Completed' ? 'Pending' : 'Completed' } : txn
      )
    );
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setTransactions((prev) =>
      prev.filter((txn) =>
        txn.name.toLowerCase().includes(query) || txn.uid.toLowerCase().includes(query)
      )
    );
  };

  const tableRowStyle = {
    padding: '10px',
    borderBottom: '1px solid #f1faee',
  };

  const chartStyle = {
    width: '100%',
    maxWidth: '600px',
  };

  return (
    <div style={{ padding: '20px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: '#e2e8f0' }}>
      <h2 style={{ textAlign: 'center' }}>Payment Management</h2>
      
      {/* Summary Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div style={{ width: '48%', background: '#023e8a', borderRadius: '10px', padding: '20px' }}>
          <h4>Today's Income</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>₹{incomeToday}</p>
        </div>
        <div style={{ width: '48%', background: '#023e8a', borderRadius: '10px', padding: '20px' }}>
          <h4>Last Month's Income</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>₹{incomeLastMonth}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div style={{ width: '48%' }}>
          <h4>Income Trend</h4>
          <Line data={incomeData} options={{ maintainAspectRatio: true }} />
        </div>
        <div style={{ width: '48%' }}>
          <h4>Payment Method Breakdown</h4>
          <Pie data={paymentMethodData} options={{ maintainAspectRatio: true }} />
        </div>
      </div>

      {/* Transaction Search and Table */}
      <div style={{ background: '#023e8a', borderRadius: '10px', padding: '20px' }}>
        <input
          type="text"
          placeholder="Search by UID or Name..."
          onChange={handleSearch}
          style={{ padding: '10px', width: '100%', marginBottom: '20px', borderRadius: '8px' }}
        />

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#023e8a', color: '#f1faee' }}>
              <th style={tableRowStyle}>UID</th>
              <th style={tableRowStyle}>Name</th>
              <th style={tableRowStyle}>Amount (₹)</th>
              <th style={tableRowStyle}>Payment Method</th>
              <th style={tableRowStyle}>Status</th>
              <th style={tableRowStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.uid}>
                <td style={tableRowStyle}>{txn.uid}</td>
                <td style={tableRowStyle}>{txn.name}</td>
                <td style={tableRowStyle}>{txn.amount}</td>
                <td style={tableRowStyle}>{txn.method}</td>
                <td style={tableRowStyle}>{txn.status}</td>
                <td style={tableRowStyle}>
                  <button
                    onClick={() => togglePaymentStatus(txn.uid)}
                    style={{
                      backgroundColor: '#00b4d8',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentPage;
