import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  readonly emailAddresses = [
    'johnmichael@medfastgo.com',
    'jacintacharles@medfastgo.com',
    'alexm@medfastgo.com',
    'joshua@medfastgo.com'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  scrollToMap(event: Event): void {
    event.preventDefault();
    const mapElement = document.getElementById("map");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      
      // Create email body
      const emailBody = `
Dear MedfastGo Team,

A new contact form submission has been received:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

Best regards,
${formData.firstName} ${formData.lastName}
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:${this.emailAddresses.join(',')}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Optional: Reset form after opening email client
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}