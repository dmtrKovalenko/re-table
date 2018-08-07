export interface Column {
  accessor: string;
  Header: string | React.ReactElement<{}>;
  Cell?: React.ComponentType<any>;
  filterable?: boolean;
  sortable?: boolean;
}