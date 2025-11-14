import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { searchIcon } from '../../../icons/admin-navigation-icons/search-icon';
import { filterIcon } from '../../../icons/filter';
import { dateIcon } from '../../../icons/date';
import { DateFilter } from '../date-filter/date-filter';

@Component({
  selector: 'app-admin-users',
  imports: [CommonModule, searchIcon, filterIcon, dateIcon, DateFilter],
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

  filterItems: string[] = ['All', 'Active', 'Inactive', 'Pending', 'Suspended'];
  showPopup = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
  selectedItem: string = 'Status';

  selectItem(key: string) {
    this.selectedItem = key;
    this.showPopup = false;
  }

  showDateFilter = false;

  toggleDateFilter() {
    this.showDateFilter = !this.showDateFilter;
  }

  onApply(date: Date | null) {
    console.log('Applied date:', date);
    this.showDateFilter = false;
  }

  onCancel() {
    this.showDateFilter = false;
  }

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  
}
