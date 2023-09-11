import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { timer } from 'rxjs';
import { Customer } from 'src/app/models/customer.mode';
import { TABLE_ACTION } from 'src/app/modules/table/enums/table-action.enum';
import { TableAction } from 'src/app/modules/table/models/table-action.model';
import { TableColumn } from 'src/app/modules/table/models/table-column.model';
import { TableConfig } from 'src/app/modules/table/models/table-config.model';

const CUSTOMERS_DATA_MOCK = [
  {
    id: 1,
    name: 'Pedro',
    lastName: 'Pérez',
    birthdate: new Date(2000, 0, 1),
    country: 'España',
    active: false,
    radio: 'option1',
  },
  {
    id: 2,
    name: 'Maria',
    lastName: 'Lopez',
    birthdate: new Date(2001, 2, 1),
    country: 'Grecia',
    active: true,
    radio: 'option2',
  },
  {
    id: 3,
    name: 'Alejandro',
    lastName: 'Pinzon',
    birthdate: new Date(1999, 5, 10),
    country: 'Colombia',
    active: false,
    radio: 'option1',
  },
  {
    id: 4,
    name: 'Jessica',
    lastName: 'Chastain',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    active: false,
    radio: 'option1',
  },
  {
    id: 5,
    name: 'Jessica2',
    lastName: 'Chastain',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    active: false,
    radio: 'option1',
  },
  {
    id: 6,
    name: 'Jessica3',
    lastName: 'Chastain',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    active: false,
    radio: 'option1',
  },
  {
    id: 7,
    name: 'Jessica4',
    lastName: 'Chastain',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    active: false,
    radio: 'option1',
  },
  {
    id: 8,
    name: 'Jessica5',
    lastName: 'Chastain',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
    active: false,
    radio: 'option1',
  },
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customersList: Array<Customer> = [];
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    isSelectable: true,
    isPaginable: true,
    showActions: true,
  };

  isLoadingTable: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.setTableColumns();
    // Ejemplo para simular asincronismo
    setTimeout(() => {
      this.customersList = CUSTOMERS_DATA_MOCK;
      this.isLoadingTable = false;
    }, 5000);
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
        controlType: 'date',
      },
      {
        label: 'Country',
        def: 'country',
        dataKey: 'country',
        controlType: 'select',
        data: ['España', 'Colombia', 'China', 'Mexico', 'Perú', 'Grecia'],
      },
      {
        label: 'Active',
        def: 'active',
        dataKey: 'active',
        controlType: 'check',
      },
      {
        label: 'Radio',
        def: 'radio',
        dataKey: 'radio',
        controlType: 'radio',
        data: ['option1', 'option2'],
      },
    ];
  }

  onSelect(data: any) {
    console.log(data);
  }

  onTableAction(tableAction: TableAction) {
    switch (tableAction.action) {
      case TABLE_ACTION.EDIT:
        this.onEdit(tableAction.row);
        break;

      case TABLE_ACTION.DELETE:
        this.onDelete(tableAction.row);
        break;

      case TABLE_ACTION.SAVE:
        this.onSave(tableAction.row);
        break;

      default:
        break;
    }
  }

  onSave(newRow: Customer) {
    this.isLoadingTable = true;
    timer(3000).subscribe(() => {
      this.isLoadingTable = false;
      this.customersList = this.customersList.map((currentCustomer) =>
        currentCustomer.id === newRow.id ? newRow : currentCustomer
      );
    });
  }

  onEdit(customer: Customer) {
    console.log('Edit', customer);
  }
  onDelete(customer: Customer) {
    console.log('Delete', customer);
  }

  onCreateNewFormGroup(row: Customer): FormGroup {
    return new FormGroup({
      id: new FormControl(row.id),
      name: new FormControl(row.name),
      lastName: new FormControl(row.lastName),
      birthdate: new FormControl(row.birthdate),
      country: new FormControl(row.country),
      active: new FormControl(row.active),
      radio: new FormControl(row.radio),
    });
  }
}
