import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Sidebar],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
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
  Login() {
    this.submitted = true;
    console.log(this.user);
  }
}
