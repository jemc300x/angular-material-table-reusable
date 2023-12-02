import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { TableColumn } from 'src/app/modules/table/models/table-column';

interface Permission {
  id: number;
  name: string;
  isSelected?: boolean;
}

interface User {
  id: number;
  name: string;
  permissions: string[];
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  permissionsList: Permission[] = [];
  tableColumns: TableColumn[] = [];
  items: User[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setTableColumn();
    this.getPermissions();
    this.getUsers();
  }

  onRowsSelect(rows: Permission[]) {
    console.log('Permisions Selected', rows);
  }

  getUsers() {
    timer(2000).subscribe(() => {
      this.items = [
        {
          id: 0,
          name: 'User 0',
          permissions: ['Permission 1', 'Permission 2'],
        },
        {
          id: 1,
          name: 'User 1',
          permissions: ['Permission 7', 'Permission 8'],
        },
      ];
    });
  }

  getPermissions() {
    timer(2000).subscribe(() => {
      const permissions: Permission[] = [];
      for (let index = 0; index < 10; index++) {
        permissions.push({
          id: index,
          name: `Permission ${index}`,
        });
      }

      this.permissionsList = permissions;
    });
  }

  setTableColumn() {
    this.tableColumns = [
      {
        label: 'ID',
        def: 'id',
        dataKey: 'id',
      },
      {
        label: 'Permission',
        def: 'name',
        dataKey: 'name',
      },
    ];
  }

  onSelectUser(user: User) {
    console.log(user);
    this.permissionsList = this.permissionsList.map((permission) => ({
      ...permission,
      isSelected: user.permissions.some(
        (userPermission) => userPermission === permission.name
      ),
    }));
  }
}
