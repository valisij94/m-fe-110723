import './App.css';
import SimpleList from './components/simpleList/SimpleList';
import DwarwesLocationList from './components/dwarwesLocations/DwarwesLocationList';
import { useState } from 'react';


function App() {

  const [dwarwes, setDwarwes] = useState( ['Torin', 'Dvalin', 'Balin'] );

  const [dwarfName, setDwarfName] = useState('');

  return (
    <>
      <div className="App">
        <h2>Welcome, Guest!</h2>

        <SimpleList listHeaderText="Torin's troop" listSource={dwarwes} />

        <input id="dwarfName" value={dwarfName} onChange={(event)=>{
          setDwarfName(event.target.value)
        }} />
        <button onClick={() => {
          setDwarwes( prev => ([...prev, dwarfName]));
          setDwarfName('');
        }}>Hire Dwarf</button>

        <button onClick={ () => {
          setDwarwes( prev => prev.slice(0, -1) );
        } }>Fire dwarf</button>
      </div>
    </>
  );
}

export default App;
