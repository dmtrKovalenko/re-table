import * as React from 'react';
import { BaseTableStateProps } from './models/TableState';
import TableRow from './TableRow';

interface TableBodyProps<T> extends BaseTableStateProps {
  rows: T[],
  getRowKey: (row: T) => React.Key;
}

const TableBody: React.SFC<TableBodyProps<any>> = ({
  rows,
  columns,
  getRowKey,
}) => {
  return (
    <tbody>
      {
        rows.map(row => (
          <TableRow key={getRowKey(row)} row={row} columns={columns} />
        ))
      }
    </tbody>
  )
};

export default TableBody;