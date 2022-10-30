import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { ColumnValuePipe } from './pipes/column-value.pipe';

@NgModule({
  declarations: [TableComponent, ColumnValuePipe],
  imports: [CommonModule, MatTableModule],
  exports: [TableComponent],
})
export class TableModule {}
