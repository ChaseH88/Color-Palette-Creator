import React from 'react';
import "./App.css"

// Components
import Palette from './components/Palette';

// Utilities
import seedColors from "./seedColors";

const App = () => {
  return (
    <div className="App">
      <Palette {...seedColors[3]} />
    </div>
  );
}

export default App;
