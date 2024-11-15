import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
// import Dashboard from './components/Dashboard';
// import Appointments from './Appointments';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/appointments" element={<Appointments />} /> */}
          {/* <Route path="/medications" element={<Medications />} /> */}
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
