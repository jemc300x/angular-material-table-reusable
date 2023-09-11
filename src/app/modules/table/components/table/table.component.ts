import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TABLE_ACTION } from '../../enums/table-action.enum';
import { TableAction } from '../../models/table-action.model';
import { TableColumn } from '../../models/table-column.model';
import { TableConfig } from '../../models/table-config.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Array<any>> = new MatTableDataSource();
  tableDisplayColumns: string[] = [];
  tableColumns: TableColumn[] = [];
  selection = new SelectionModel<any>(true, []);
  tableConfig: TableConfig | undefined;
  isEditMode = false;
  currentRowIndex: number | undefined;
  formGroup: FormGroup = new FormGroup({});

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() set data(data: Array<any>) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  @Input() set columns(columns: TableColumn[]) {
    this.tableColumns = columns;
    this.tableDisplayColumns = this.tableColumns.map((col) => col.def);
  }

  @Input() set config(config: TableConfig) {
    this.setConfig(config);
  }

  @Input() createNewFormGroup!: (item: any) => FormGroup;
  @Input() isLoading = false;

  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() action: EventEmitter<TableAction> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSelect() {
    this.select.emit(this.selection.selected);
  }

  setConfig(config: TableConfig) {
    this.tableConfig = config;

    if (this.tableConfig.isSelectable) {
      this.tableDisplayColumns.unshift('select');
    }

    if (this.tableConfig.showActions) {
      this.tableDisplayColumns.push('actions');
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.onSelect();
      return;
    }

    this.selection.select(...this.dataSource.data);
    this.onSelect();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  onEdit(row: any, index: number) {
    this.isEditMode = true;
    this.currentRowIndex = index;
    this.formGroup = this.createNewFormGroup(row);

    this.action.emit({ action: TABLE_ACTION.EDIT, row });
  }

  onCancel() {
    this.isEditMode = false;
    this.currentRowIndex = undefined;
  }

  onSave() {
    const newRow = this.formGroup.value;
    console.log('NewRow', newRow);

    this.action.emit({ action: TABLE_ACTION.SAVE, row: newRow });
    this.isEditMode = false;
    this.currentRowIndex = undefined;
  }

  onDelete(row: any) {
    this.action.emit({ action: TABLE_ACTION.DELETE, row });
  }
}
