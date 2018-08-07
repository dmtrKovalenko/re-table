import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../src/Table'

const data = [{
  id: 1,
  value: 21,
  age: 44,
  name: 'Nix',
}, {
  id: 2,
  value: 124.41,
  age: 21,
  name: 'Pumb',
}]

storiesOf('Table', module)
  .add('Simple table', () => (
    <Table
      rows={data} 
      getRowKey={(row => row.id)}
      columns={[
        {
          accessor: 'name',
          Header: 'Name',
        },
        {
          accessor: 'age',
          Header: 'Age',
        },
        {
          accessor: 'value',
          Header: 'Value',
        }
      ]}
    />
  ))