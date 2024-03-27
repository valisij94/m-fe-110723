import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

import CommonPage from './components/callbacksExample/CommonPage.jsx';
import SimpleComponent from './components/mui-components/SimpleComponent.jsx';

function App() {

  return (
    <div className="App">
      <h2>Welcome, Stranger! Torin the OakShield invites you to join his voyage to Lonely Mountain! Please, fill this form ASAP!</h2>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/feed'>Feed</Link></li>
        </ul>
      </nav>
      <Outlet />

      <CommonPage />

      <SimpleComponent />
    </div>
  );
}

export default App;
