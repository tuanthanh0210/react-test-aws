import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

function App() {
  const web3 = new Web3(window.ethereum);
  useEffect(() => {
    (async () => {
      const rs = await web3.eth.getAccounts();
      console.log(rs);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(1);
  return (
    <div className="App">
      <h1>Hello Sotatek</h1>
      <header className="App-header">
        <h1>Hello</h1>
        <h1>env: {process.env.REACT_APP_HELLO}</h1>
        <h1>env 2: {process.env.REACT_APP_HELLO_2}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ENV: {process.env.REACT_APP_HELLO}</h1>
        <p className="italic text-3xl">
          Edit <code>src/App.tsx</code> and save to reload.
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
