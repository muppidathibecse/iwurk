import { Component } from '@angular/core';

@Component({
  selector: 'app-logout-icon',
  standalone: true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373V11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M20.998 12.0004H9.99805M20.998 12.0004C20.998 11.3002 19.0037 9.9919 18.498 9.50037M20.998 12.0004C20.998 12.7006 19.0037 14.0089 18.498 14.5004"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: [],
})
export class logoutIcon {}
