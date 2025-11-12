import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { downArrowIcon } from '../../../icons/down-arrow-icon';
import { dashboardIcon } from '../../../icons/admin-navigation-icons/dashboard-icon';
import { projectsIcon } from '../../../icons/admin-navigation-icons/projects-icon';
import { teamsIcon } from '../../../icons/admin-navigation-icons/teams-icon';
import { usersIcon } from '../../../icons/admin-navigation-icons/users-icon';
import { activityIcon } from '../../../icons/admin-navigation-icons/activity-icon';
import { reportIcon } from '../../../icons/admin-navigation-icons/report-icon';
import { logoutIcon } from '../../../icons/admin-navigation-icons/logout-icon';
import { downloadIcon } from '../../../icons/admin-navigation-icons/download-icon';

@Component({
  selector: 'app-adminsidebar',
  imports: [
    CommonModule,
    downArrowIcon,
    dashboardIcon,
    projectsIcon,
    teamsIcon,
    usersIcon,
    activityIcon,
    reportIcon,
    logoutIcon,
    downloadIcon
  ],
  templateUrl: './adminsidebar.html',
  styleUrl: './adminsidebar.css',
})
export class Adminsidebar {
  adminSidebarItems = [
    { icon: 'app-dashboard-icon', label: 'Dashboard', route: '/admin/dashboard' },
    { icon: 'app-projects-icon', label: 'Projects', route: '/admin/projects' },
    { icon: 'app-teams-icon', label: 'Teams', route: '/admin/dashboard' },
    { icon: 'app-users-icon', label: 'Users', route: '/admin/projects' },
    { icon: 'app-activity-icon', label: 'Activity', route: '/admin/dashboard' },
    { icon: 'app-report-icon', label: 'Report', route: '/admin/projects' },
  ];
  adminSidebarSettingsItems = [
    { icon: 'app-dashboard-icon', label: 'Settings', route: '/admin/dashboard' },
    { icon: 'app-download-icon', label: 'Download', route: '/admin/projects' },
  ];
}
