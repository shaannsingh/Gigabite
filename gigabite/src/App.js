import React from 'react';
import './App.css';
import Recipes from './components/Recipes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Gigabite</h1>
      <Recipes />
    </div>
  );
}

export default App;