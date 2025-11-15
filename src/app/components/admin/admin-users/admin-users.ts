import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { searchIcon } from '../../../icons/admin-navigation-icons/search-icon';
import { filterIcon } from '../../../icons/filter';
import { dateIcon } from '../../../icons/date';
import { DateFilter } from '../date-filter/date-filter';
import { EditUser } from '../edit-user/edit-user';

@Component({
  selector: 'app-admin-users',
  imports: [CommonModule, EditUser, searchIcon, filterIcon, dateIcon, DateFilter],
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

  selectedItem: string = 'Status';

  selectItem(key: string) {
    this.selectedItem = key;
    this.showPopup = false;
  }

  showDateFilter = false;
  showPopup = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
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

  toggleMenu(menuName: string) {
    if (menuName === 'Date') {
      this.showPopup = false;
      this.showDateFilter = !this.showDateFilter;
    } else {
      this.showPopup = !this.showPopup;
      this.showDateFilter = false;
    }
  }
  profilePopupOpen = false;

  openProfilePopup() {
    this.profilePopupOpen = true;
  }

  closeProfilePopup() {
    this.profilePopupOpen = false;
  }
}
