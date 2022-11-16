import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColumnValuePipe } from './pipes/column-value.pipe';

@NgModule({
  declarations: [TableComponent, ColumnValuePipe],
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
  exports: [TableComponent],
})
export class TableModule {}
