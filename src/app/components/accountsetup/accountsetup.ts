import { CommonModule } from '@angular/common';
import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accountsetup',
  imports: [CommonModule, FormsModule],
  templateUrl: './accountsetup.html',
  styleUrl: './accountsetup.css',
})
export class Accountsetup {
  organization = {
    companyName: '',
    industryName: '',
    companyWebsite: '',
    companyDescription: '',
  };

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

  removeImage(event: MouseEvent, fileInput: HTMLInputElement) {
    event.stopPropagation(); // prevent triggering upload click
    this.imageUrl = null;
    this.selectedFileName = '';
    fileInput.value = ''; // ✅ reset input so same file can be re-uploaded
    console.log('Image removed');
  }
  submitted = false;
  companyName = false;
  companyWebsite = false;
  description = false;
  industryName = false;
  submit() {
    this.submitted = true;
    this.companyName = /[a-zA-Z]/.test(this.organization.companyName);
    this.description = /[a-zA-Z]/.test(this.organization.companyDescription);
    this.companyWebsite = /[a-zA-Z]/.test(this.organization.companyWebsite);
    this.industryName = /[a-zA-Z]/.test(this.organization.industryName);
    if (
      this.companyName &&
      this.organization.companyDescription !== ' ' &&
      this.organization.industryName !== ' ' &&
      this.organization.companyWebsite !== ' '
    ) {
      alert('All are filled');
    }
  }
}
