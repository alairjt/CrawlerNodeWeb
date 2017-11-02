import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchDeputiesIfNeeded } from '../actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContent from '../components/AppContent';
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


class App extends Component {
  static propTypes = {
    deputies: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDeputiesIfNeeded())
  }

  render() {
    const { deputies } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppContent data={deputies} />
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  const { deputiesReducer } = state;

  const {
    isFetching,
    lastUpdated,
    items: deputies
  } = deputiesReducer.data || {
      isFetching: true,
      items: []
    };

  return {
    deputies,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)