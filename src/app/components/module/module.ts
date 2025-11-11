import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-module',
  imports: [CommonModule],
  templateUrl: './module.html',
})
export class Module {
  modules = [
    {
      name: 'IT',
      blackImgSrc: '/assets/blackitmodule.png',
      colorImgSrc: '/assets/coloritmodule.png',
    },
    {
      name: 'Onsite',
      blackImgSrc: '/assets/blackonsitemodule.png',
      colorImgSrc: '/assets/coloronsitemodule.png',
    },
  ];

  selected: string = '';
  Select(selected: string) {
    this.selected = selected;
    console.log(this.selected);
  }
}
