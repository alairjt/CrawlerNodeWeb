import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as deputyActions from '../../actions';
import { Card, CardTitle } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import DeputyForm from './DeputyForm';
import { GridList } from 'material-ui/GridList';

/**
 * Deputy Edit Page.
 */
class DeputyPage extends Component {
    static propTypes = {
        deputy: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    /**
     * Constructor
     * @param {*} props Properties 
     */
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            deputy: this.props.deputy,
            message: 'Deputy was saved succesfully.'
        };

        this.updateDeputyState = this.updateDeputyState.bind(this);
        this.saveDeputy = this.saveDeputy.bind(this);
    }

    /**
     * Trigger API to update deputy info.
     * @param {*} event Event
     */
    saveDeputy(event) {
        event.preventDefault();
        this.props.actions.updateDeputy(this.state.deputy);
    }

    /**
     * Update deputy state.
     * @param {*} event Event
     */
    updateDeputyState(event) {
        const field = event.target.name;
        const deputy = this.state.deputy;
        deputy[field] = event.target.value;
        return this.setState({ deputy: deputy });
    }

    /**
     * SnackBar action click, back to home.
     */
    handleActionTouchTap = () => {
        this.props.history.push('/');
    };

    /**
     * Get deputy info.
     */
    componentDidMount() {
        let id = this.props.match.params.id;

        const { dispatch } = this.props;
        dispatch(deputyActions.fetchDeputyIfNeeded(id))
    }

    /**
     * Receive properties to update state.
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        if (this.props.deputy._id !== nextProps.deputy._id) {
            this.setState({ deputy: nextProps.deputy });
        }
    }

    /**
     * Render HTML.
     */
    render() {
        let cardStyle = {
            margin: '30px',
            padding: '20px',
            height: '600px'
        };

        let subtitle = `${this.state.deputy.party} (${this.state.deputy.state})`;

        return (
            <Card style={cardStyle}>
                <CardTitle title={this.state.deputy.name} subtitle={subtitle} />
                <GridList cols={2.2}>
                    <DeputyForm
                        deputy={this.state.deputy}
                        onSave={this.saveDeputy}
                        onChange={this.updateDeputyState}
                        saving={this.state.saving} />
                    <GridList cols={1.2}>
                        <img src={this.state.deputy.urlProfileImage} />
                        <div>
                            <a target="_blank" href={this.state.deputy.urlBio}>Biography</a> <br/>
                            <a target="_blank" href={this.state.deputy.urlContact}>Contact him</a>
                        </div>
                    </GridList>
                </GridList>

                <Snackbar
                    id="snackBar"
                    open={this.props.updateSuccess}
                    message="Deputy was saved succesfully."
                    action="Back"
                    onActionTouchTap={this.handleActionTouchTap}
                />
            </Card>
        )
    }
}

/**
 * Map state to Props.
 * 
 * @param {*} state State
 * @param {*} ownProps Properties
 */
function mapStateToProps(state, ownProps) {
    const { deputiesReducer } = state;
    let deputy = {};
    let updateSuccess = false;

    if (deputiesReducer.data) {
        deputy = deputiesReducer.data.deputy || deputy;
        updateSuccess = deputiesReducer.data.updateSuccess || updateSuccess;
    }

    return { deputy: deputy, updateSuccess: updateSuccess };
}

/**
 * Dispatch to properties.
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deputyActions, dispatch),
        dispatch: dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeputyPage)
