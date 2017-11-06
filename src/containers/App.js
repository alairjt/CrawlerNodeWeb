import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange500, orange800 } from 'material-ui/styles/colors';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: orange800,
  },
  appBar: {
    color: orange500,
    height: 60,
  },
});

/**
 * Main container.
 */
class App extends Component {
  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Home />
      </MuiThemeProvider>
    )
  }
}

export default App