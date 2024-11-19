import React from 'react';
import './MedicationReminders.css';
import medHeaderImage from '../assets/med_header.png';
// import medReminderFieldImage from '../assets/med_reminder_field.png';

const time = '8:30am'; // replace with dynamic time from db when available
const name = 'Ibuprofen'; // replace with dynamic name from db when available
const dosage = '100mg'; // replace with dynamic dosage from db when available


const MedicationReminders = ({ time, name, dosage }) => {
  return (
    <div className="medication-reminders">
      <div className="medication-header">
        <img src={medHeaderImage} alt="Medications Reminders Header" />
      </div>
      <div className="medication-content">
      {/* <img src={medReminderFieldImage} alt="Medications Reminder Field" /> */}
        <div className="medication-field">
            <div className="medication-time">{time}</div>
            <div className="medication-info">
                <span className="medication-name">{name}</span>
                <span className="medication-dosage">{dosage}</span>
            </div>
        </div>
       </div>
    </div>
  );
};

export default MedicationReminders;
