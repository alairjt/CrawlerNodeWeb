import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeputyIfNeeded } from '../../actions';
import TextField from 'material-ui/TextField';
import { Card, CardTitle } from 'material-ui/Card';


class DeputiesForm extends Component {
    static propTypes = {
        deputy: PropTypes.object.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = { name: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue, c) {
        event.persist();
        this.setState((state) => state[event.target.name] = newValue);

    }

    componentDidMount() {
        let id = this.props.match.params.id;

        const { dispatch } = this.props
        dispatch(fetchDeputyIfNeeded(id))
    }

    render() {
        let cardStyle = {
            margin: '30px',
            padding: '20px'
        };

        let subtitle = '{0} ({1})'.replace('{0}', this.props.deputy.party)
            .replace('{1}', this.props.deputy.state);

        return (
            <Card style={cardStyle}>
                <CardTitle title={this.state.name} subtitle={subtitle} />
                <TextField
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    floatingLabelText="Name"
                /> <br />
                <TextField
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    floatingLabelText="Full Name"
                /> <br />
                <TextField
                    value={this.state.party}
                    onChange={this.handleChange}
                    floatingLabelText="Party"
                /> <br />
                <TextField
                    value={this.state.postalCode}
                    onChange={this.handleChange}
                    floatingLabelText="Postal Code"
                /> <br />
                <TextField
                    value={this.state.phone}
                    onChange={this.handleChange}
                    floatingLabelText="Phone"
                /> <br />
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const { deputiesReducer } = state;
    const {
    isFetching,
        lastUpdated,
        deputy: deputy
  } = deputiesReducer.data || {
            isFetching: true,
            deputy: {}
        };

    return {
        deputy,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(DeputiesForm)