export interface ITableInfo {
  name?: string; // TODO

  columns: IColumnInfo[];

  rows: IRowData[];
}

export interface IColumnInfo {
  id: number;

  name: string;

  width: number;

  description?: string;
}

export interface IRowData {
  columns: IData[];
}

export interface IData {
  value: string;

  columnId: number;

  width?: number;
}
