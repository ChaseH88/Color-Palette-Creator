import React from 'react';
import "./App.css"

// Components
import Palette from './components/Palette';

// Utilities
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const App = () => {
  console.log()
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
