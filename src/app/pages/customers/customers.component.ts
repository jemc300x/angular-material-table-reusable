import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column';
import { TableConfig } from 'src/app/modules/table/models/table-config';

const CUSTOMERS_DATA_MOCK = [
  {
    name: 'Pedro',
    lastName: 'Pérez',
    birthdate: new Date(2000, 0, 1),
    country: 'España',
    chips: ['chip1', 'chip2'],
    chips2: ['chip11', 'chip22'],
  },
  {
    name: 'Maria',
    lastName: 'Lopez',
    birthdate: new Date(2001, 2, 1),
    country: 'Grecia',
    chips: ['chip3', 'chip4'],
    chips2: ['chip33', 'chip44'],
  },
  {
    name: 'Alejandro',
    lastName: 'Pinzon',
    birthdate: new Date(1999, 5, 10),
    country: 'Colombia',
    chips: ['chip5', 'chip6'],
    chips2: ['chip55', 'chip66'],
  },
  {
    name: 'Jessica',
    lastName: 'Chastain',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    chips: ['chip7', 'chip8'],
    chips2: ['chip77', 'chip88'],
  },
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customersList = CUSTOMERS_DATA_MOCK;
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    isSelectable: true,
  };

  @ViewChild('colChip', { static: true }) colChip: TemplateRef<any> | undefined;

  constructor() {}

  ngOnInit(): void {
    this.setTableColumns();
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'Name', def: 'name', dataKey: 'name' },
      { label: 'Last Name', def: 'lastName', dataKey: 'lastName' },
      {
        label: 'Birthdate',
        def: 'birthdate',
        dataKey: 'birthdate',
        dataType: 'date',
        formatt: 'dd MMM yyyy',
      },
      { label: 'Country', def: 'country', dataKey: 'country' },
      {
        label: 'Chips',
        def: 'chips',
        dataKey: 'chips',
        template: this.colChip,
      },
      {
        label: 'Chips2',
        def: 'chips2',
        dataKey: 'chips2',
        template: this.colChip,
      },
    ];
  }

  onSelect(data: any) {
    console.log(data);
  }
}
