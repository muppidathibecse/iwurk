import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Forgotpassword } from './components/forgotpassword/forgotpassword';
import { Resetpassword } from './components/resetpassword/resetpassword';
import { Verifyemail } from './components/verifyemail/verifyemail';
import { Module } from './components/module/module';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'forgotpassword', component: Forgotpassword },
  { path: 'resetpassword', component: Resetpassword },
  { path: 'verify', component: Verifyemail },
  { path: 'module', component: Module },
];
