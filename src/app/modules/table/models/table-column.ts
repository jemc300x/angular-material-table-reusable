import { TemplateRef } from '@angular/core';

export interface TableColumn {
  label: string;
  def: string;
  dataKey: string;
  formatt?: string;
  dataType?: 'date' | 'object';
  template?: TemplateRef<any>;
}
