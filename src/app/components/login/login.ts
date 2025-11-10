import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Sidebar],
  templateUrl: './login.html',
})
export class Login {
  constructor(private router: Router) {}
  showPassword = false;
  submitted = false;

  user = {
    email: '',
    password: '',
    remember: false,
  };

  toggle() {
    this.showPassword = !this.showPassword;
  }
  login() {
    this.submitted = true;
    console.log(this.user);
  }
  goToSignUP() {
    this.router.navigate(['/signup']);
  }

  goToFP(){
    this.router.navigate(['/forgotpassword']);
  }
}
