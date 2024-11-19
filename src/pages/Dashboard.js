import React from 'react';
import GreetingBar from '../components/GreetingBar';
import MedicationReminders from '../components/MedicationReminders';

const Dashboard = () => {
    return (
      <div className="dashboard">
        <GreetingBar />
        <MedicationReminders />
      </div>
    );
  };

export default Dashboard;