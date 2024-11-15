import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PageBackdrop from './components/PageBackdrop';
// import Dashboard from './components/Dashboard';
// import Appointments from './Appointments';



// Uncomment the components below as I add them to the code

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <PageBackdrop />
           {/* <Switch> */}
            {/* <Route path="/dashboard"> */}
              {/* <Dashboard /> */}
            {/* </Route> */}
            {/* <Route path="/appointments"> */}
              {/* <Appointments /> */}
            {/* </Route> */}
            {/* Add more routes here for other components */}
          {/* </Switch> */}
        {/* </PageBackdrop> */}
      </div>
    </Router>
  );
}

export default App;
