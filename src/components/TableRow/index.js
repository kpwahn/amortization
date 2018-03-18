import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class TableRow extends Component {
  render() {
    return (
      <Table.Row className="TableRow">
        <Table.Cell>
            {this.props.month}
        </Table.Cell>
        <Table.Cell>
            {this.props.principalPaid.toFixed(2)}
        </Table.Cell>
        <Table.Cell>
            {this.props.interestPaid.toFixed(2)}
        </Table.Cell>
        <Table.Cell>
            {this.props.totalInterestPaid.toFixed(2)}
        </Table.Cell>
        <Table.Cell>
            {this.props.totalPrincipalPaid.toFixed(2)}
        </Table.Cell>
        <Table.Cell>
            {this.props.remainingPrincipal.toFixed(2)}
        </Table.Cell>
      </Table.Row>
    );
  }
}

TableRow.PropTypes = {

}

export default TableRow;
