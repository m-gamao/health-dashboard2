// This component wraps around every page in the app, so the props are passed down as children to it.
import React from 'react';
import Sidebar from './Sidebar'; 
import './Layout.css'; 
import PageBackdrop from './PageBackdrop';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <PageBackdrop />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
