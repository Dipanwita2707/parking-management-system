// src/pages/UserManagement.js

import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { uid: 'UID12345', name: 'John Doe', vehicle: 'Bike', active: true },
    { uid: 'UID12346', name: 'Jane Smith', vehicle: 'Cycle', active: false },
    { uid: 'UID12347', name: 'Sam Green', vehicle: 'Car', active: true },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('');

  const toggleActive = (uid) => {
    setUsers(users.map(user =>
      user.uid === uid ? { ...user, active: !user.active } : user
    ));
  };

  const filteredUsers = users
    .filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortKey === 'name' ? a.name.localeCompare(b.name) :
      sortKey === 'vehicle' ? a.vehicle.localeCompare(b.vehicle) : 0
    );

  return (
    <div style={{ padding: '30px', backgroundColor: '#f9f9f9', color: '#333' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>User Management</h2>

      {/* Search and Sort Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by name or vehicle"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 20px',
            width: '70%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            backgroundColor: '#ffffff',
          }}
        />
        <select
          onChange={(e) => setSortKey(e.target.value)}
          style={{
            padding: '12px 20px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            backgroundColor: '#ffffff',
            color: '#333',
          }}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="vehicle">Vehicle</option>
        </select>
      </div>

      {/* User Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {filteredUsers.map(user => (
          <div key={user.uid} style={{
            background: '#ffffff',
            borderRadius: '10px',
            padding: '20px',
            width: '280px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid #ddd',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>{user.name}</h3>
            <p style={{ color: '#555' }}><strong>UID:</strong> {user.uid}</p>
            <p style={{ color: '#555' }}><strong>Vehicle:</strong> {user.vehicle}</p>
            <p style={{
              color: user.active ? '#28a745' : '#dc3545',
              fontWeight: 'bold',
            }}>
              {user.active ? 'Active' : 'Inactive'}
            </p>
            <button
              onClick={() => toggleActive(user.uid)}
              style={{
                backgroundColor: user.active ? '#dc3545' : '#007bff',
                color: '#fff',
                padding: '8px 15px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s ease',
                width: '100%',
                marginTop: '10px',
              }}
            >
              {user.active ? 'Deactivate' : 'Activate'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
