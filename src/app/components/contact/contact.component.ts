import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = signal(false);
  messageSent = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted.set(true);

    if (this.contactForm.valid) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.contactForm.value);

      // Show success message
      this.messageSent.set(true);

      // Reset form and hide success message after 3 seconds
      this.contactForm.reset();
      this.submitted.set(false);

      setTimeout(() => {
        this.messageSent.set(false);
      }, 3000);
    }
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  openEmail() {
    window.location.href = 'mailto:ramadeshpande029@gmail.com?subject=Contact%20from%20Portfolio';
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/rama-deshpande-a11454202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
  }

  openGithub() {
    window.open('https://github.com/rvd2004', '_blank');
  }
}
