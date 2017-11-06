import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeputiesIfNeeded } from '../../actions';
import DeputiesTable from './DeputiesTable';


class DeputiesList extends Component {
  static propTypes = {
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.rowClick = this.rowClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDeputiesIfNeeded())
  }

  rowClick(index) {
    let selectRow = this.props.deputies[index];
    this.props.history.push(`/edit/${selectRow._id}`);
  }

  render() {
    const { deputies } = this.props;

    return (
      <DeputiesTable data={deputies} rowClick={this.rowClick} />
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