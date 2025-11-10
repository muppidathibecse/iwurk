import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgotpassword',
  imports: [FormsModule, CommonModule, Sidebar],
  templateUrl: './forgotpassword.html',
})
export class Forgotpassword {
  submitted = false;
  userEmail = false;
  email: string = '';

  verify() {
    this.submitted = true;
    this.userEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);

    if (this.userEmail) {
      alert('Verification link sent to your email');
    }
  }
}
