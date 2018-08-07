import * as React from 'react';
import withTableState from './withTableState'
import { BaseTableStateProps } from './models/TableState';
import TableHead from './TableHead';
import TableBody from './TableBody';

export interface TableProps<T> extends BaseTableStateProps {
  rows: T[];
  serverSide?: boolean;
  getRowKey: (row: T) => React.Key
}
 
class Table extends React.PureComponent<TableProps<any>, any> {
  static defaultProps = {
    serverSide: false
  }

  public render() {
    return (
      <table>
        <TableHead {...this.props} />
        <TableBody {...this.props} />
      </table>
    );
  }
}

export default withTableState(Table);