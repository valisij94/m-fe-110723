import './App.css';
import { SimpleParagraph } from './components/simpleParagraph/SimpleParagraph';
import LoginForm from './components/LoginForm';
import SimpleList from './components/simpleList/SimpleList';


function App() {


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
          textContent='Hello World!'
        />

        <LoginForm />

        <SimpleList
          listHeaderText='MiddleEarth nations'
          listSource={['Dwarwes', 'Elves', 'Orcs']}
        />
      </div>
    </>
  );
}

export default App;
