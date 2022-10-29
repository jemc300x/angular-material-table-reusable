import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrls: ['./table-customers.component.scss'],
})
export class TableCustomersComponent implements OnInit {
  dataSource: any = [];
  tableDisplayColumns: string[] = ['name', 'lastname', 'birthdate', 'country'];

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  constructor() {}

  ngOnInit(): void {}
}
