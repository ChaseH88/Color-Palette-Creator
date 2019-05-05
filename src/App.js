import React, {Fragment} from 'react';
import "./App.css"
import { Switch, Route } from "react-router-dom";

// Component
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColor from './components/SingleColorPalette';

// Utilities
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const App = () => {

  // Grab the correct palette
  const getPalette = (id) => {
    console.log(id)
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }

  // Render
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={(routeProps)=> <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route exact path="/palette/:id" render={routeProps => (
          <Palette palette={generatePalette(getPalette(routeProps.match.params.id))} />
        )} />
        <Route exact path="/palette/:id/:colorid" render={routeProps => (
          <SingleColor colorId={routeProps.match.params.colorid} palette={generatePalette(
            getPalette(routeProps.match.params.id)
          )} />
        )} />
      </Switch>
    </Fragment>
  );
}

export default App;
