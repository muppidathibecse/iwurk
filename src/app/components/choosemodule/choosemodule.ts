import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choosemodule',
  imports: [CommonModule],
  templateUrl: './choosemodule.html',
  styleUrl: './choosemodule.css',
})
export class Choosemodule {
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
    {
      name: 'Manufacturer',
      blackImgSrc: '/assets/blackmanufacturermodule.png',
      colorImgSrc: '/assets/colormanufacturermodule.png',
    },
  ];

  selected: string = '';
  Select(selected: string) {
    this.selected = selected;
    console.log(this.selected);
  }
}
