import React from 'react';// eslint-disable-next-line
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'// eslint-disable-next-line
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
