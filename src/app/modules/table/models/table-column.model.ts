export interface TableColumn {
  label: string;
  def: string;
  dataKey: string;
  formatt?: string;
  dataType?: 'date' | 'object';
  controlType?: 'check' | 'date' | 'radio' | 'select';
  data?: any[];
}
