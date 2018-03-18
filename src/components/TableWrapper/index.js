import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
// import { Table } from 'semantic-ui-react';
import _ from 'lodash';
import './styles.css';

import TableRow from '../TableRow';

class TableWrapper extends Component {
  render() {
    return (
      <Table
        width={window.innerWidth}
        height={window.innerHeight - 210}
        headerHeight={20}
        rowHeight={30}
        rowCount={this.props.rows.length}
        rowGetter={({ index }) => this.props.rows[index]}
      >
      <Column
        label='Month'
        dataKey='months'
        width={window.innerWidth / 6}
      />
      <Column
        label='Interest Paid'
        cellDataGetter={({rowData}) => rowData.interestPaid.toFixed(2)}
        dataKey='interestPaid'
        width={window.innerWidth / 6}
      />
      <Column
        label='Principal Paid'
        cellDataGetter={({rowData}) => rowData.principalPaid.toFixed(2)}
        dataKey='principalPaid'
        width={window.innerWidth / 6}
      />
      <Column
        label='Total Interest Paid'
        cellDataGetter={({rowData}) => rowData.totalInterestPaid.toFixed(2)}
        dataKey='totalInterestPaid'
        width={window.innerWidth / 6}
      />
      <Column
        label='Total Principal Paid'
        cellDataGetter={({rowData}) => rowData.totalPrincipalPaid.toFixed(2)}
        dataKey='totalPrincipalPaid'
        width={window.innerWidth / 6}
      />
      <Column
        label='Remaining Principal'
        cellDataGetter={({rowData}) => rowData.remainingPrincipal.toFixed(2)}
        dataKey='remainingPrincipal'
        width={window.innerWidth / 6}
      />
      </Table>
    );
  }
}

TableWrapper.PropTypes = {
  rows: PropTypes.array.isRequired
}

export default TableWrapper;
