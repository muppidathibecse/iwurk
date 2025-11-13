import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Forgotpassword } from './components/forgotpassword/forgotpassword';
import { Resetpassword } from './components/resetpassword/resetpassword';
import { Verifyemail } from './components/verifyemail/verifyemail';
import { Module } from './components/module/module';
import { Accountsetup } from './components/accountsetup/accountsetup';
import { Choosemodule } from './components/choosemodule/choosemodule';
import { Admindashboard } from './components/admin/admindashboard/admindashboard';
import { AdminStarter } from './components/admin/admin-starter/admin-starter';
import { AdminProjects } from './components/admin/admin-projects/admin-projects';
import { AdminTeams } from './components/admin/admin-teams/admin-teams';
import { AdminUsers } from './components/admin/admin-users/admin-users';
import { AdminActivity } from './components/admin/admin-activity/admin-activity';
import { AdminReport } from './components/admin/admin-report/admin-report';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'forgotpassword', component: Forgotpassword },
  { path: 'resetpassword', component: Resetpassword },
  { path: 'verify', component: Verifyemail },
  { path: 'module', component: Module },
  { path: 'accountsetup', component: Accountsetup },
  { path: 'choosemodule', component: Choosemodule },
  {
    path: 'admin',
    component: AdminStarter,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Admindashboard },
      { path: 'projects', component: AdminProjects },
      { path: 'teams', component: AdminTeams },
      { path: 'users', component: AdminUsers },
      { path: 'activity', component: AdminActivity },
      { path: 'report', component: AdminReport },
      // add more admin child routes here
    ],
  },
];
