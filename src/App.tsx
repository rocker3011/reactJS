import React from 'react';
import logo from './logo.svg';
import './App.css';

function HelloWorld(props: any) {
  return <h1> Hello, {props.name} </h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <HelloWorld name="World" />
          <HelloWorld name="RODO" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
