import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notverified',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notverified.html'
})
export class Notverified {
  selectedFileName = '';
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  // Triggered when user selects file
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (!file) return;

    this.selectedFileName = file.name;
    console.log('Uploaded image:', file.name);

    const reader = new FileReader();
    reader.onload = () => {
      this.ngZone.run(() => {
        this.imageUrl = reader.result;
        this.cdr.markForCheck();
      });
    };
    reader.readAsDataURL(file);
  }

  // Programmatically open file dialog
  triggerFileInput(input: HTMLInputElement) {
    input.click();
  }
}
