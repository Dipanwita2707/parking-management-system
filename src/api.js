// client/src/apiService.js

// Function to create a new user
export const createUser = async (userData) => {
    const response = await fetch('/api/users/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  };
  
  // Function to handle payment and UID generation
  export const confirmPayment = async (phone) => {
    const response = await fetch('/api/users/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    const data = await response.json();
    return data;
  };
  