import './App.css';
import { SimpleParagraph } from './components/SimpleParagraph';
import LoginForm from './components/LoginForm';
import SimpleList from './components/simpleList/SimpleList';


function App() {

  const currentSeason = 'winter';

  const paragraphClickHandler = () => {
    console.log('Simple click handler')
  }

  return (
    <>
      <div className="App">
        <p>Hello World! {new Date().toLocaleDateString()}</p>
        <h2>Welcome, Guest!</h2>
        <div>
          <button>Enter</button>
          <button>Register</button>
        </div>
        <p>Now is: {currentSeason}</p>
      </div>

      <SimpleParagraph
        textContent='Hello World!'
        clickHandler={paragraphClickHandler}
      />

      <LoginForm />

      <SimpleList
        listHeaderText='MiddleEarth nations'
        listSource={['Dwarwes', 'Elves', 'Orcs']}
      />
    </>
  );
}

export default App;
