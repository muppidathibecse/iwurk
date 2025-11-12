import { Component } from '@angular/core';
import { Verified } from '../verified/verified';
import { Notverified } from '../notverified/notverified';

@Component({
  selector: 'app-verifyemail',
  standalone: true,
  imports: [Notverified],
  templateUrl: './verifyemail.html',
  styleUrl: './verifyemail.css',
})
export class Verifyemail {}
