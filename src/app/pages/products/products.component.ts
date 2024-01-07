import { Component, OnInit } from '@angular/core';
import { ColumnsToFilter } from 'src/app/modules/table/components/table/table.component';
import { TableColumn } from 'src/app/modules/table/models/table-column.model';

const PRODUCTS_DATA_MOCK = [
  {
    name: 'Laptop',
    category: { id: 0, code: 'COM', name: 'COMPUTADORA' },
    description: 'computadora portatil',
    description2: 'computadora portatil',
  },
  {
    name: 'Mouse',
    category: { id: 1, code: 'PER', name: 'PERIFERICO' },
    description: 'perifericos',
    description2: 'perifericos',
  },
  {
    name: 'Monitor',
    category: { id: 1, code: 'PER', name: 'PERIFERICO' },
    description: 'computadora portatil',
    description2: 'computadora portatil',
  },
  {
    name: 'PC',
    category: { id: 0, code: 'COM', name: 'COMPUTADORA' },
    description: 'computadora de escritorio',
    description2: 'computadora de escritorio',
  },
  {
    name: 'Mouse-rgb',
    category: { id: 1, code: 'PER', name: 'PERIFERICO' },
    description: 'Mouse con rgb',
    description2: 'Mouse con rgb',
  },
  {
    name: 'Mouse-rgb',
    category: { id: 2, code: 'INH', name: 'INHALAMBRICO' },
    description: 'Mouse inhalambrico con rgb',
    description2: 'Mouse inhalambrico con rgb',
  },
  {
    name: 'Teclado-rgb',
    category: { id: 2, code: 'INH', name: 'INHALAMBRICO' },
    description: 'Teclado inhalambrico con rgb',
    description2: 'Teclado inhalambrico con rgb',
  },
  {
    name: 'Mouse',
    category: { id: 2, code: 'INH', name: 'INHALAMBRICO' },
    description: 'Mouse inhalambrico',
    description2: 'Mouse inhalambrico',
  },
  {
    name: 'Teclado',
    category: { id: 2, code: 'INH', name: 'INHALAMBRICO' },
    description: 'Teclado inhalambrico',
    description2: 'Teclado inhalambrico',
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
  columnsToFilter: ColumnsToFilter[] = [
    {
      placeholder: 'Filter by Category',
      column: 'category.name',
      options: ['COMPUTADORA', 'PERIFERICO', 'INHALAMBRICO'],
    },
  ];

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
      { label: 'Description 2', def: 'description2', dataKey: 'description2' },
    ];
  }

  getCustomFilterPredicate() {
    return (data: any, filter: string) => {
      const filterToJSON = JSON.parse(filter);

      let isMatch = [];

      for (const key in filterToJSON) {
        const currentFilterValue = filterToJSON[key];
        const keyList = key.split('.');

        let currentValue;

        if (key === 'ALL') {
          currentValue = '';
          for (const key in data) {
            currentValue = `${currentValue}❣${data[key]}`;
          }
        } else {
          for (const k of keyList) {
            if (currentValue === undefined) {
              currentValue = data[k];
            } else {
              currentValue = currentValue[k];
            }
          }
        }

        isMatch.push(currentValue.toLowerCase().includes(currentFilterValue));
      }

      return isMatch.every((m) => m);
    };
  }
}
