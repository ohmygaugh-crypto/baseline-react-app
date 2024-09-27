import logo from './logo.svg';
import './App.css';

function App() {
  // Define handleClick function
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick}>Click me too</button>
        <button onClick={handleClick}>Click me three</button>
      </header>
    </div>
  );
}

export default App;
