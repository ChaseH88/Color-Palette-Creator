import React, {Fragment} from 'react';
import "./App.css"
import { Switch, Route } from "react-router-dom";

// Components
import Palette from './components/Palette';

// Utilities
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const App = () => {

  // Grab the correct palette
  const getPalette = (id) => {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }

  // Render
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={()=> <h1>Home Page!!!</h1>} />
        <Route exact path="/palette/:id" render={routeProps => (
          <Palette palette={generatePalette(getPalette(routeProps.match.params.id))} />
        )} />
      </Switch>
    </Fragment>
  );
}

export default App;
