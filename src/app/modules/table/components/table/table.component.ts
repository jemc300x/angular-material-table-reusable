import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { TableColumn } from '../../models/table-column';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ColumnValuePipe } from '../../pipes/column-value.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  // dataSource: any[] = []; // Option 1 con array
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([]);
  tableDisplayColumns: string[] = [];
  tableColumns: TableColumn[] = [];

  @Input() set data(data: any) {
    // this.dataSource = data; // Option 1 con array
    this.dataSource.data = data;
  }

  @Input() set columns(columns: TableColumn[]) {
    this.tableColumns = columns;
    this.tableDisplayColumns = this.tableColumns.map((col) => col.def);
  }

  // @ViewChild(MatTable) matTable!: MatTable<any>; // Option 1 con array
  @ViewChild(MatSort) matSort!: MatSort;

  private getColumnValue: ColumnValuePipe = new ColumnValuePipe();

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.matSort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      return this.getValue(data, sortHeaderId);
    };
  }

  ngOnInit(): void {}

  // onSort(event: Sort) { // Option 1 con array
  //   console.log(event);

  //   let newArray = [...this.dataSource].sort((rowA, rowB) => {
  //     console.log('RowA', rowA, 'RowB', rowB);

  //     const columnName = event.active;

  //     const valueA = this.getValue(rowA, columnName);
  //     const valueB = this.getValue(rowB, columnName);

  //     if (valueA < valueB) {
  //       return -1;
  //     }

  //     if (valueA > valueB) {
  //       return 1;
  //     }

  //     return 0;
  //   });

  //   if (event.direction === '') {
  //     newArray = [...this.dataSource];
  //   }

  //   if (event.direction === 'desc') {
  //     newArray = newArray.reverse();
  //   }

  //   this.matTable.dataSource = newArray;
  //   this.matTable.renderRows();
  // }

  getValue(row: any, columnName: string) {
    const column = this.tableColumns.find(
      (col) => col.dataKey === columnName
    ) as TableColumn;

    return this.getColumnValue.transform(row, column);
  }
}
