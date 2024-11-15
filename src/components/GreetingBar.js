import React, { useEffect, useState } from 'react';

const GreetingBar = () => {
  const [firstName, setFirstName] = useState('');

  // Fetch user's first name (data fetching logic here)
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        // API/database call
        const response = await fetch('/api/getUserData'); // endpoint
        const data = await response.json();

        // Assuming the API returns an object with a 'firstName' field
        setFirstName(data.firstName || 'User');
      } catch (error) {
        console.error('Error fetching user data:', error);
        setFirstName('User'); // Fallback if there is an error
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className="greeting-bar">
      <h1>Good Morning, {firstName}!</h1>
    </div>
  );
};

export default GreetingBar;
