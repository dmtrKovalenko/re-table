import * as React from 'react';
import { Column } from './models/Column';
import TableCell from './TableCell';

export interface TableRowProps<T> {
  row: T;
  columns: Column[];
}

class TableRow extends React.PureComponent<TableRowProps<any>> {
  shouldComponentUpdate(nextProps: TableRowProps<any>) {
    return (
      this.props.row !== nextProps.row ||
      this.props.columns !== nextProps.columns
    )
  }

  public render() {
    const { columns, row } = this.props;

    return (
      <tr> 
        {
          columns.map(column => (
            <TableCell row={row} column={column} />
          ))
        }
      </tr>
    );
  }
}

export default TableRow