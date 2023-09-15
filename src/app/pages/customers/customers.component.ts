import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column';

const CUSTOMERS_DATA_MOCK = [
  {
    name: 'Pedro',
    lastName: 'Pérez',
    birthdate: new Date(2000, 0, 1),
    country: 'España',
    detail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veritatis, excepturi natus voluptates praesentium inventore culpa ipsum dolorum, adipisci totam molestias porro laborum eius aliquam optio aperiam corporis odit. Placeat.',
  },
  {
    name: 'Maria',
    lastName: 'Lopez',
    birthdate: new Date(2001, 2, 1),
    country: 'Grecia',
    detail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veritatis, excepturi natus voluptates praesentium inventore culpa ipsum dolorum, adipisci totam molestias porro laborum eius aliquam optio aperiam corporis odit. Placeat.',
  },
  {
    name: 'Alejandro',
    lastName: 'Pinzon',
    birthdate: new Date(1999, 5, 10),
    country: 'Colombia',
    detail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veritatis, excepturi natus voluptates praesentium inventore culpa ipsum dolorum, adipisci totam molestias porro laborum eius aliquam optio aperiam corporis odit. Placeat.',
  },
  {
    name: 'Jessica',
    lastName: 'Chastain',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    detail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veritatis, excepturi natus voluptates praesentium inventore culpa ipsum dolorum, adipisci totam molestias porro laborum eius aliquam optio aperiam corporis odit. Placeat.',
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
    ];
  }
}
