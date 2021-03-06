import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class DeputiesTable extends React.Component {

    /**
     * @constructor
     * @param {*} props Properties 
     */
    constructor(props) {
        super(props);

        this.state = {
            height: '500px'
        };
    }

    /**
     * Render table.
     */
    render() {
        let tableData = Array.isArray(this.props.data) ? this.props.data : [];
        return (
            <div>
                <Table height={this.state.height} onRowSelection={this.props.rowClick}>
                    <TableHeader displaySelectAll={false}
                        adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan="6" style={{ textAlign: 'center' }}>
                                Federal Deputies List
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Birthday">Birthday</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Phone">Phone</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Party">Party</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The State">State</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {tableData.map(row => (
                            <TableRow key={row._id}>
                                <TableRowColumn tooltip={row.id}>{row.id}</TableRowColumn>
                                <TableRowColumn tooltip={row.name}>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.birthday}</TableRowColumn>
                                <TableRowColumn>{row.phone}</TableRowColumn>
                                <TableRowColumn>{row.postalCode}</TableRowColumn>
                                <TableRowColumn>{row.state}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}