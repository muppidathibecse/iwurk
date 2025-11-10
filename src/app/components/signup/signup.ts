import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';
import { CheckIcon } from '../../icons/check-icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, CheckIcon],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private router: Router) {}
  showPassword = false;
  submitted = false;
  len = false;
  lowercaseValid = false;
  uppercaseValid = false;
  specialCharValid = false;
  user = {
    name: '',
    email: '',
    password: '',
    agree: false,
  };
  userName = false;
  userEmail = false;

  toggle() {
    this.showPassword = !this.showPassword;
  }

  signup() {
    this.submitted = true;
    this.userName = /[a-zA-Z]/.test(this.user.name);
    this.userEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.email);

    console.log(this.user);
    console.log(this.userEmail);

    if (
      this.len &&
      this.lowercaseValid &&
      this.uppercaseValid &&
      this.specialCharValid &&
      this.userName &&
      this.userEmail
    ) {
      alert('All are Filled');
    }
  }

  logPassword() {
    console.log(this.user.password);
    this.len = this.user.password.length >= 8;
    this.lowercaseValid = /[a-z]/.test(this.user.password);
    this.uppercaseValid = /[A-Z]/.test(this.user.password);
    this.specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(this.user.password);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
