import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './context/themeContext';
import { DwarfContext } from './context/dwarfContext';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme( oldTheme => oldTheme === 'light' ? 'dark' : 'light');
  }

  const [participants, setParticipants] = useState([]);
  const addParticipant = (participantData) => {
    setParticipants( old => [...participants, participantData] );
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      <DwarfContext.Provider value={{
        participants,
        addParticipant
      }}>
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
        </div>
      </DwarfContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
