import * as React from 'react';
import { TableProps } from './Table';
import { TableState } from './models/TableState';
import { Omit } from './models/helpers';

interface TableStateProps extends Omit<TableProps<any>, 'state' | 'onStateChange'> {
  defaultState?: Partial<TableState>
}

export default (TableComponent: React.ComponentType<TableProps<any>>) => (
  class TableStateHoc extends React.PureComponent<TableStateProps, TableState> {
    state = {
      sorting: [],
      filtering: {},
      ...this.props.defaultState
    }

    handleStateChange = (updater: Pick<TableState, keyof TableState>) => {
      this.setState(updater)
    }

    render() {
      return <TableComponent state={this.state} onStateChange={this.handleStateChange} {...this.props} />
    }
  }
)
