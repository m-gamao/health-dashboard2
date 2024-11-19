import React from 'react';
import './MedicationReminders.css';

const MedicationReminders = () => {
  return (
    <div className="medication-reminders">
      <div className="medication-header">
        <img src="/public/med reminder header.png" alt="Medication Reminders Header" />
      </div>
      <div className="medication-content">
        <p>You have no new reminders for today!</p>
      </div>
    </div>
  );
};

export default MedicationReminders;
