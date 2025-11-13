import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Adminsmallsidebar } from '../adminsmallsidebar/adminsmallsidebar';
import { Adminsidebar } from '../adminsidebar/adminsidebar';
import { menuIcon } from '../../../icons/admin-navigation-icons/menu-icon';
import { searchIcon } from '../../../icons/admin-navigation-icons/search-icon';
import { notificationIcon } from '../../../icons/admin-navigation-icons/notification-icon';
import { fullscreenIcon } from '../../../icons/admin-navigation-icons/fullscreen-icon';
import { downArrowIcon } from '../../../icons/down-arrow-icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-starter',
  imports: [
    CommonModule,
    Adminsmallsidebar,
    Adminsidebar,
    menuIcon,
    searchIcon,
    notificationIcon,
    fullscreenIcon,
    downArrowIcon,
    RouterOutlet,
  ],
  templateUrl: './admin-starter.html',
  styleUrl: './admin-starter.css',
})
export class AdminStarter {
  dashboardDetails = [
    {
      svg: 'assets/admin/layyers.svg',
      title: 'Overall Projects',
      value: '124',
      colorFrom: '#8B5CF6',
      colorTo: '#6366F1',
    },
    {
      svg: 'assets/admin/layyers.svg',
      title: 'Total Tracker Hour',
      value: '10,528',
      colorFrom: '#22C55E',
      colorTo: '#10B981',
    },
    {
      svg: 'assets/admin/layyers.svg',
      title: 'Active Users',
      value: '187',
      colorFrom: '#3B82F6',
      colorTo: '#0EA5E9',
    },
  ];
  fullNavbar: boolean = true;

  changeNavbar() {
    this.fullNavbar = !this.fullNavbar;
    console.log(this.fullNavbar);
  }
}
