import './App.css';
import SimpleList from './components/simpleList/SimpleList';
import DwarwesLocationList from './components/dwarwesLocations/DwarwesLocationList';
import { useEffect, useState } from 'react';


function App() {

  const [dwarwes, setDwarwes] = useState( JSON.parse(localStorage.getItem('dwarwes')) ?? ['Torin', 'Dvalin', 'Balin'] );

  const [dwarfName, setDwarfName] = useState('');

  const [isListShown, setIsListShown] = useState(true);

  const toggleVisibility = () => {
    setIsListShown( prev => !prev);
  }

  const [currentDateTime, setCurrentDateTime] = useState( new Date().toLocaleString() );

  useEffect( () => {
    const timerId = setInterval( () => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(timerId);
    }
  }, []);

  const saveDwarwes = () => {
    localStorage.setItem('dwarwes', JSON.stringify(dwarwes));
  }

  return (
    <>
      <div className="App">
        <h2>Welcome, Guest!</h2>

        <p>{currentDateTime}</p>
        <button onClick={ toggleVisibility }>Hide/Show</button>
        <button onClick={saveDwarwes}>Save Dwarwes</button>
        { isListShown && <SimpleList listHeaderText="Torin's troop" listSource={dwarwes} /> }

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
