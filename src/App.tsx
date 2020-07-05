import React from 'react';
import logo from './logo.svg';
import {Button} from 'reacy-ui';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className=""
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <Button href="https://reactjs.org"
                className="App-link"
                onClick={() => void 0}
                mods={['inline']}
        >Learn React</Button>
      </header>
    </div>
  );
}

export default App;
