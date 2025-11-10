import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-module',
  imports: [CommonModule],
  templateUrl: './module.html',
})
export class Module {
  selected: string = '';
  Select(selected: string) {
    this.selected = selected;
    console.log(this.selected);
  }
}
