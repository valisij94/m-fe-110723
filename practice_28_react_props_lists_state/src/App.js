import './App.css';
import { SimpleParagraph } from './components/simpleParagraph/SimpleParagraph';
import LoginForm from './components/LoginForm';
import SimpleList from './components/simpleList/SimpleList';
import DwarwesLocationList from './components/dwarwesLocations/DwarwesLocationList';
import { useState } from 'react';


function App() {

  const appTheme = 'dark';

  const [state, setState] = useState('Hello from simple state!');

  const dwarwesLocations = [
    {
      locationName: 'Iron Hills',
      population: 30000,
      king: 'Dain Ironfoot',
    },
    {
      locationName: 'Erebor',
      population: 30000,
      king: 'Train',
    },
    {
      locationName: 'Moria',
      population: 30000,
      king: 'Durin'
    }
  ];

  return (
    <>
      <div className="App">
        <p>Hello World! {new Date().toLocaleDateString()}</p>
        <h2>Welcome, Guest!</h2>

        <SimpleParagraph
          textContent={state}
          currentTheme={appTheme}
        />

        <LoginForm />

        <SimpleList
          listHeaderText='MiddleEarth nations'
          listSource={['Dwarwes', 'Elves', 'Orcs']}
          themeValue={appTheme}
        />

        <DwarwesLocationList locations={dwarwesLocations} />

      </div>
    </>
  );
}

export default App;
