import { Component } from '@angular/core';
import { Verified } from '../verified/verified';
import { Notverified } from '../notverified/notverified';

@Component({
  selector: 'app-verifyemail',
  imports: [Verified],
  templateUrl: './verifyemail.html',
  styleUrl: './verifyemail.css',
})
export class Verifyemail {}
