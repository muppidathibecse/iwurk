import { Component } from '@angular/core';

@Component({
  selector: 'app-down-arrow-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      class="h-[18px] w-[18px]"
    >
      <path
        d="M14.9405 6.7124L10.0505 11.6024C9.47305 12.1799 8.52805 12.1799 7.95055 11.6024L3.06055 6.7124"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: [],
})
export class downArrowIcon {}
