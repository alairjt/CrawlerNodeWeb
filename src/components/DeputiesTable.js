import React, { Component } from 'react';
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
export default class TableExampleComplex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: '500px'
        };
    }

    rowClick(a, b) {
        console.log('send to deputy edition');
    }

    render(a) {
        let tableData = this.props.data || [];
        return (
            <div>
                <Table height={this.state.height} onRowSelection={this.rowClick}>
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