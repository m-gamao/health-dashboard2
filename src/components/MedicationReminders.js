import React from 'react';
import './MedicationReminders.css';
import medHeaderImage from '../assets/med_reminder_header.png';

const MedicationReminders = () => {
  return (
    <div className="medication-reminders">
      <div className="medication-header">
        {/* <img src="/public/med_reminder_header.png" alt="Medication Reminders Header" /> */}
        <img src={medHeaderImage} alt="Medications Reminders Header" />
      </div>
      <div className="medication-content">
        <p>You have no new reminders for today!</p>
      </div>
    </div>
  );
};

export default MedicationReminders;
