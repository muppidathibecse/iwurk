import { Component } from '@angular/core';

import { Adminsidebar } from '../adminsidebar/adminsidebar';
import { menuIcon } from '../../../icons/admin-navigation-icons/menu-icon';
import { searchIcon } from '../../../icons/admin-navigation-icons/search-icon';
import { notificationIcon } from '../../../icons/admin-navigation-icons/notification-icon';
import { fullscreenIcon } from '../../../icons/admin-navigation-icons/fullscreen-icon';
import { downArrowIcon } from '../../../icons/down-arrow-icon';
import { layersIcon } from '../../../icons/admin-navigation-icons/layers-icon';

@Component({
  selector: 'app-admindashboard',
  imports: [
    Adminsidebar,
    menuIcon,
    searchIcon,
    notificationIcon,
    fullscreenIcon,
    downArrowIcon,
    layersIcon,
  ],
  templateUrl: './admindashboard.html',
  styleUrl: './admindashboard.css',
})
export class Admindashboard {
  dashboardDetails = [
    { svg: '', title: '', value: '', colorFrom: '', colorTo: '' }
  ];
}
