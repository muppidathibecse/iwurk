import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verified',
  imports: [],
  templateUrl: './verified.html',
  styleUrl: './verified.css',
})
export class Verified {
  constructor(private router: Router) {}
  BacktoLogin() {
    this.router.navigate(['/login']);
  }
}
