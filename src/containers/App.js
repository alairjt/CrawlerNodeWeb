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
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedReddit } = this.props
    dispatch(fetchDeputiesIfNeeded(selectedReddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchDeputiesIfNeeded(selectedReddit))
    }
  }

  render() {
    const { posts } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppContent data={posts} />
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  const { selectedReddit, postsByReddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
      isFetching: true,
      items: []
    }

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)