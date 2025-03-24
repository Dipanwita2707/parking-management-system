// src/components/Sidebar.js

import React from 'react';

function Sidebar() {
  const sidebarStyle = {
    width: '250px',
    height: '100vh',
    backgroundColor: '#1e293b',
    padding: '20px',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
  };

  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    padding: '10px 15px',
    borderRadius: '8px',
    transition: 'background 0.3s ease',
    display: 'block',
  };

  const linkHoverStyle = {
    backgroundColor: '#00b4d8',
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={{ marginBottom: '20px', fontSize: '20px', textAlign: 'center' }}>Admin Panel</h2>
      <ul style={ulStyle}>
        <li>
          <a
            href="/admin-dashboard"
            style={linkStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/admin-users"
            style={linkStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Users
          </a>
        </li>
        <li>
          <a
            href="/admin-payments"
            style={linkStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Payments
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
