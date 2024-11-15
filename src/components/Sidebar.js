import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item); // Updates the selectedItem state
  };

  const menuItems = [
    'Dashboard',
    'Appointments',
    'Vitals/Records',
    'Medications/Pharmacy',
    'Lab Results',
    'Radiology/Imaging',
    'SmartHealth', 
    'Health Insurance',
    'Logout'
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/Health Info Manager.png" alt="Health Info Manager" className="sidebar-logo" />
        <img src="/Caduceus.png" alt="Caduceus" className="sidebar-icon" />
      </div>
      <ul className="sidebar-nav">
        {menuItems.map((item) => (
          <li 
            key={item} 
            onClick={() => handleItemClick(item)} 
            className={selectedItem === item ? 'selected' : ''}
          >
            {selectedItem === item && (
              <img src="/Tick Box.png" alt="Selected" className="tick-icon" />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
