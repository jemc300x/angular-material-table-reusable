import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { TableColumn } from '../../models/table-column';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnValuePipe } from '../../pipes/column-value.pipe';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([]);
  tableDisplayColumns: string[] = [];
  tableColumns: TableColumn[] = [];
  expandedElement: any;

  @Input() isExpandable = false;

  @Input() deteilTemplate: TemplateRef<any> | null = null;

  @Input() set data(data: any) {
    this.dataSource.data = data;
  }

  @Input() set columns(columns: TableColumn[]) {
    this.tableColumns = columns;
    this.tableDisplayColumns = this.tableColumns.map((col) => col.def);
  }

  @ViewChild(MatSort) matSort!: MatSort;

  private getColumnValue: ColumnValuePipe = new ColumnValuePipe();

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.matSort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      return this.getValue(data, sortHeaderId);
    };
  }

  ngOnInit(): void {
    if (this.isExpandable) {
      this.tableDisplayColumns.unshift('expand');
    }
  }

  getValue(row: any, columnName: string) {
    const column = this.tableColumns.find(
      (col) => col.dataKey === columnName
    ) as TableColumn;

    return this.getColumnValue.transform(row, column);
  }
}
