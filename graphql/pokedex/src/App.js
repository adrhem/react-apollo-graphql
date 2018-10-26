import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <main className="container-fluid">
        <header className="bg-black row py-2">
          <h1 className="mx-auto color-white">Pokedex GraphQL</h1>
        </header>
        <Pokedex />
      </main>
    );
  }
}

export default App;
