import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { ColumnValuePipe } from './pipes/column-value.pipe';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TableComponent, ColumnValuePipe],
  imports: [CommonModule, MatTableModule, MatSortModule],
  exports: [TableComponent],
})
export class TableModule {}
