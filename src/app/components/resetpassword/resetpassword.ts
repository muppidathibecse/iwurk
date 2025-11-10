import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  imports: [CommonModule, FormsModule],
  templateUrl: './resetpassword.html',
})
export class Resetpassword {
  showPassword = false;
  userPassword: string = '';
  confirmPassword: string = '';
  fill = false;
  toggle() {
    this.showPassword = !this.showPassword;
  }
  reset() {
    console.log(this.userPassword, '', this.confirmPassword);
    if (this.userPassword === '' || this.confirmPassword === '') {
      this.fill = true;
    } else if (
      this.checkPassword(this.userPassword) &&
      this.userPassword === this.confirmPassword
    ) {
      alert('Password reset successful!');
    }
  }
  checkPassword(password: string) {
    const minLength = 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password.length >= minLength && hasLowercase && hasUppercase && hasSpecialChar) {
      return true;
    } else {
      return false;
    }
  }
}
