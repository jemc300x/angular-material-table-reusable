import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column.model';

const PRODUCTS_DATA_MOCK = [
  {
    name: 'Laptop',
    category: { id: 0, code: 'COM', name: 'COMPUTADORA' },
    description: 'computadora portatil',
  },
  {
    name: 'Mouse',
    category: { id: 1, code: 'PER', name: 'PERIFERICO' },
    description: 'perifericos',
  },
  {
    name: 'Monitor',
    category: { id: 1, code: 'PER', name: 'PERIFERICO' },
    description: 'computadora portatil',
  },
  {
    name: 'PC',
    category: { id: 0, code: 'COM', name: 'COMPUTER' },
    description: 'computadora de escritorio',
  },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsList = PRODUCTS_DATA_MOCK;
  tableColumns: TableColumn[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setTableColumns();
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'Name', def: 'name', dataKey: 'name' },
      {
        label: 'Category',
        def: 'category',
        dataKey: 'category.name',
        dataType: 'object',
      },
      { label: 'Description', def: 'description', dataKey: 'description' },
    ];
  }
}
