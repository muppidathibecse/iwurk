import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { searchIcon } from '../../../icons/admin-navigation-icons/search-icon';
import { filterIcon } from '../../../icons/filter';
import { dateIcon } from '../../../icons/date';

@Component({
  selector: 'app-admin-users',
  imports: [CommonModule, searchIcon, filterIcon, dateIcon],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css',
})
export class AdminUsers {
  usersDashboardItems = [
    { icon: 'assets/admin/users/users.svg', title: 'Total Usesr' },
    { icon: 'assets/admin/users/activeusers.png', title: 'Active Users' },
    { icon: 'assets/admin/users/inactiveusers.png', title: 'Inactive Users' },
    { icon: 'assets/admin/users/onbench.png', title: 'Onbench' },
  ];
}
