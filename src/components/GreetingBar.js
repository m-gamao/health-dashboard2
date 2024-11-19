import React, { useState, useEffect } from 'react';
import './GreetingBar.css';

const GreetingBar = () => {
  const [greeting, setGreeting] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');
  const userName = 'Lana'; // Replace with dynamic fetching from the database

  useEffect(() => {
    // Determine greeting based on the time of day
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };

    // Update date and time dynamically
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      const formattedDate = now.toLocaleDateString('en-US', options);
      const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      setCurrentDateTime(`Today is ${formattedDate}, ${formattedTime}`);
    };

    updateGreeting();
    updateDateTime();

    const interval = setInterval(updateDateTime, 1000); // Update the time every second
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="greeting-bar">
      <h1>{`${greeting}, ${userName}!`}</h1>
      <p className="date-time">{currentDateTime}</p>
    </div>
  );
};

export default GreetingBar;
