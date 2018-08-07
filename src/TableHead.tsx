import * as React from 'react';
import { BaseTableStateProps } from './models/TableState';

interface TableHeadProps extends BaseTableStateProps {
}

const TableHead: React.SFC<TableHeadProps> = ({
  columns,
}) => {
  const isFilterable = columns.some(column => Boolean(column.filterable))

  return (
    <thead>
      <tr>
        {
          columns.map(({ Header }) => (
            <td> {Header} </td>
          ))
        }
      </tr>
    </thead>
  )
};

export default TableHead;