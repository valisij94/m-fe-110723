import './App.css';
import { SimpleParagraph } from './components/simpleParagraph/SimpleParagraph';
import LoginForm from './components/LoginForm';
import SimpleList from './components/simpleList/SimpleList';


function App() {


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
