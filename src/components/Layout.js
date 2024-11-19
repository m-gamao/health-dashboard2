// This component wraps around every page in the app, so the props are passed down as children to it.
import React from 'react';
import Sidebar from './Sidebar'; 
import './Layout.css'; 


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
