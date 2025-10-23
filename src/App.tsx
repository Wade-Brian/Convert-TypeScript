import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>TypeScript Conversion Checkpoint</h1>
      <Greeting name="Brian" />
      <Counter />
    </div>
  );
}

export default App;

