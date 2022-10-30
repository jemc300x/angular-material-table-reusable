import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from '../../models/table-column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dataSource: any = [];
  tableDisplayColumns: string[] = [];
  tableColumns: TableColumn[] = [];

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  @Input() set columns(columns: TableColumn[]) {
    this.tableColumns = columns;
    this.tableDisplayColumns = this.tableColumns.map((col) => col.def);
  }

  constructor() {}

  ngOnInit(): void {}
}
