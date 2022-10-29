import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss'],
})
export class TableProductsComponent implements OnInit {
  dataSource: any = [];
  tableDisplayColumns: string[] = ['name', 'category', 'description'];

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  constructor() {}

  ngOnInit(): void {}
}
