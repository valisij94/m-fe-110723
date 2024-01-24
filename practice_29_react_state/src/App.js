import './App.css';
import SimpleList from './components/simpleList/SimpleList';
import DwarwesLocationList from './components/dwarwesLocations/DwarwesLocationList';
import { useState } from 'react';


function App() {

  let [count, setCount] = useState(0);

  const [dwarwes, setDwarwes] = useState( ['Torin', 'Dvalin', 'Balin'] );

  const [dwarfName, setDwarfName] = useState('');

  const increaseHandler = () => {
    setCount( previous => previous + 1 );
  }

  const decreaseHandler = () => {
    setCount( previous => previous - 1 );
  }

  return (
    <>
      <div className="App">
        <p>Hello World! {new Date().toLocaleDateString()}</p>
        <h2>Welcome, Guest!</h2>

        <SimpleList listHeaderText="Torin's troop" listSource={dwarwes} />
        {/* <p>{`Counter value: ${count}`}</p>
        <button onClick={increaseHandler}>Inc</button>
        <button onClick={decreaseHandler}>Dec</button> */}

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
