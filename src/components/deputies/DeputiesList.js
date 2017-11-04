import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeputiesIfNeeded } from '../../actions';
import DeputiesTable from './DeputiesTable';


class DeputiesList extends Component {
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
      <DeputiesTable data={deputies}/>
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

export default connect(mapStateToProps)(DeputiesList)