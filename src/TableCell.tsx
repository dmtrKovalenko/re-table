import * as React from 'react';
import { Column } from './models/Column';

export interface TableCellProps {
  column: Column;
  row: any;
}

class TableCell extends React.PureComponent<TableCellProps> {
  static getCellValue = (column: Column, row: any) => row[column.accessor]

  shouldComponentUpdate(nextProps: TableCellProps) { 
    return (
      TableCell.getCellValue(nextProps.column, nextProps.row) !== TableCell.getCellValue(this.props.column, this.props.row)
    )
  }

  public render() {
    const { column, row } = this.props;
    
    return (
      <td>
        {TableCell.getCellValue(column, row)}
      </td>
    );
  }
}

export default TableCell