import React from 'react';

import logo from './logo.svg';
import './App.css';

import { ItemCard } from './components';
import Message from './Message';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactJS</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Message color="red" message="Hola chicos" />
        <Message color="red" />
        <Message message="Chau chicos" />
        <ItemCard description="Lorem impsut" title="Title 1" />
        <ItemCard description="Description of component 2" title="Title 2" />
      </div>
    );
  }
}

export default App;
