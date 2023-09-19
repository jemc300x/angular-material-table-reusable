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
      { label: 'Name', def: 'name', dataKey: 'name', isSticky: true },
      {
        label: 'Last Name',
        def: 'lastName',
        dataKey: 'lastName',
        isSticky: true,
      },
      {
        label: 'Birthdate',
        def: 'birthdate',
        dataKey: 'birthdate',
        dataType: 'date',
        formatt: 'dd MMM yyyy',
        isSticky: true,
      },
      {
        label: 'Country1',
        def: 'country1',
        dataKey: 'country',
        isSticky: true,
      },
      {
        label: 'Country2',
        def: 'country2',
        dataKey: 'country',
        isSticky: true,
      },
      { label: 'Country3', def: 'country3', dataKey: 'country' },
      { label: 'Country4', def: 'country4', dataKey: 'country' },
      { label: 'Country5', def: 'country5', dataKey: 'country' },
      { label: 'Country6', def: 'country6', dataKey: 'country' },
      { label: 'Country7', def: 'country7', dataKey: 'country' },
      { label: 'Country8', def: 'country8', dataKey: 'country' },
      { label: 'Country9', def: 'country9', dataKey: 'country' },
      { label: 'Country10', def: 'country10', dataKey: 'country' },
      { label: 'Country11', def: 'country11', dataKey: 'country' },
      { label: 'Country12', def: 'country12', dataKey: 'country' },
      { label: 'Country13', def: 'country13', dataKey: 'country' },
      { label: 'Country14', def: 'country14', dataKey: 'country' },
      { label: 'Country15', def: 'country15', dataKey: 'country' },
      { label: 'Country16', def: 'country16', dataKey: 'country' },
      { label: 'Country17', def: 'country17', dataKey: 'country' },
      { label: 'Country18', def: 'country18', dataKey: 'country' },
      { label: 'Country19', def: 'country19', dataKey: 'country' },
      {
        label: 'Country20',
        def: 'country20',
        dataKey: 'country',
        isSticky: true,
      },
      { label: 'Country21', def: 'country21', dataKey: 'country' },
      { label: 'Country22', def: 'country22', dataKey: 'country' },
      { label: 'Country23', def: 'country23', dataKey: 'country' },
      { label: 'Country24', def: 'country24', dataKey: 'country' },
      { label: 'Country25', def: 'country25', dataKey: 'country' },
      { label: 'Country26', def: 'country26', dataKey: 'country' },
      { label: 'Country27', def: 'country27', dataKey: 'country' },
      { label: 'Country28', def: 'country28', dataKey: 'country' },
      { label: 'Country29', def: 'country29', dataKey: 'country' },
      { label: 'Country30', def: 'country30', dataKey: 'country' },
      { label: 'Country31', def: 'country31', dataKey: 'country' },
      { label: 'Country32', def: 'country32', dataKey: 'country' },
      { label: 'Country33', def: 'country33', dataKey: 'country' },
      { label: 'Country34', def: 'country34', dataKey: 'country' },
      { label: 'Country35', def: 'country35', dataKey: 'country' },
      { label: 'Country36', def: 'country36', dataKey: 'country' },
      { label: 'Country37', def: 'country37', dataKey: 'country' },
      { label: 'Country38', def: 'country38', dataKey: 'country' },
      { label: 'Country39', def: 'country39', dataKey: 'country' },
      { label: 'Country40', def: 'country40', dataKey: 'country' },
      { label: 'Country41', def: 'country41', dataKey: 'country' },
      { label: 'Country42', def: 'country42', dataKey: 'country' },
      { label: 'Country43', def: 'country43', dataKey: 'country' },
      { label: 'Country44', def: 'country44', dataKey: 'country' },
      { label: 'Country45', def: 'country45', dataKey: 'country' },
      { label: 'Country46', def: 'country46', dataKey: 'country' },
      { label: 'Country47', def: 'country47', dataKey: 'country' },
      { label: 'Country48', def: 'country48', dataKey: 'country' },
      { label: 'Country49', def: 'country49', dataKey: 'country' },
      {
        label: 'Country50',
        def: 'country50',
        dataKey: 'country',
        isStickyEnd: true,
      },
    ];
  }
}
