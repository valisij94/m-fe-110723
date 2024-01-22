import './App.css';
import SimpleList from './components/simpleList/SimpleList';
import DwarwesLocationList from './components/dwarwesLocations/DwarwesLocationList';
import { useState } from 'react';


function App() {

  return (
    <>
      <div className="App">
        <p>Hello World! {new Date().toLocaleDateString()}</p>
        <h2>Welcome, Guest!</h2>

        <SimpleList listHeaderText="Torin's troop" listSource={[]} />
      </div>
    </>
  );
}

export default App;
