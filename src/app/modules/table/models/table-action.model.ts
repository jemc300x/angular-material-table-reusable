import { TABLE_ACTION } from '../enums/table-action.enum';

export interface TableAction<T = any> {
  action: TABLE_ACTION;
  row: T;
}
