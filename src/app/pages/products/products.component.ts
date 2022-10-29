import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
