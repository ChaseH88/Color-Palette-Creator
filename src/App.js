import React from 'react';
import "./App.css"

// Components
import Palette from './components/Palette';

// Utilities
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const App = () => {
  console.log(generatePalette(seedColors[4]))
  return (
    <div className="App">
      <Palette {...seedColors[0]} />
    </div>
  );
}

export default App;
