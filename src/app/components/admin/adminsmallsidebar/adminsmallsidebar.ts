import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adminsmallsidebar',
  imports: [CommonModule],
  templateUrl: './adminsmallsidebar.html',
  styleUrl: './adminsmallsidebar.css',
})
export class Adminsmallsidebar {
  adminDashboardSvg = [
    { name: 'Dashboard', svg: 'assets/admin/icons/dashboard.svg' },
    { name: 'Projects', svg: 'assets/admin/icons/projects.svg' },
    { name: 'Teams', svg: 'assets/admin/icons/teams.svg' },
    { name: 'Users', svg: 'assets/admin/icons/users.svg' },
    { name: 'Activity', svg: 'assets/admin/icons/activity.svg' },
    { name: 'Report', svg: 'assets/admin/icons/report.svg' },
  ];
}
