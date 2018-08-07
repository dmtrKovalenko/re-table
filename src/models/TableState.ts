import { Column } from "./Column";

export interface TableState {
  sorting: Sorting[];
  filtering: { [key: string]: any };
}

export interface Sorting {
  name: string;
  direction: 'asc' | 'dsc';
}

export interface BaseTableStateProps {
  state: TableState;
  columns: Column[];
  onStateChange: (updater: Pick<TableState, keyof TableState>) => void;
}