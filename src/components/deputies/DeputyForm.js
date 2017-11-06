import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


/**
 * Deputy form component.
 */
class DeputyForm extends Component {
    static propTypes = {
        deputy: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        saving: PropTypes.bool
    }

    /**
     * Render form.
     */
    render() {
        const style = {
            margin: 12,
        };

        return (
            <div>
                <form>
                    <TextField
                        name="name"
                        value={this.props.deputy.name}
                        onChange={this.props.onChange}
                        floatingLabelText="Name"
                    /> <br />
                    <TextField
                        name="fullName"
                        value={this.props.deputy.fullName}
                        onChange={this.props.onChange}
                        floatingLabelText="Full Name"
                    /> <br />
                    <TextField
                        name="party"
                        value={this.props.deputy.party}
                        onChange={this.props.onChange}
                        floatingLabelText="Party"
                    /> <br />
                    <TextField
                        name="postalCode"
                        value={this.props.deputy.postalCode}
                        onChange={this.props.onChange}
                        floatingLabelText="Postal Code"
                    /> <br />
                    <TextField
                        name="phone"
                        value={this.props.deputy.phone}
                        onChange={this.props.onChange}
                        floatingLabelText="Phone"
                    /> <br />
                    <RaisedButton
                        label={this.props.saving ? 'Saving...' : 'Save'}
                        primary={true}
                        style={style}
                        onClick={this.props.onSave} />
                </form>
            </div>
        );
    }
}

export default DeputyForm;