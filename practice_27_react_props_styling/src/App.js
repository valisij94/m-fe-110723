import logo from './logo.svg';
import './App.css';
import { SimpleParagraph } from './components/SimpleParagraph';
import LoginForm from './components/LoginForm';
import SimpleList from './components/SimpleList';


function App() {

  const currentSeason = 'winter';

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

      <SimpleParagraph />

      <LoginForm />

      <SimpleList />
    </>
  );
}

export default App;
