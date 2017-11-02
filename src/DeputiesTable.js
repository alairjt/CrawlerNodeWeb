import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


const tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
    state = {
        height: '500px',
    };

    rowClick(a, b) {
        console.log('send to deputy edition');
    }

    render() {
        return (
            <div>
                <Table height={this.state.height} onRowSelection={this.rowClick}>
                    <TableHeader displaySelectAll={false} 
                    adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan="7" tooltip="Super Header" style={{ textAlign: 'center' }}>
                                Federal Deputies List
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Fullname">Fullname</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Birthday">Birthday</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Phone">Phone</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Party">Party</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The State">State</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {tableData.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}