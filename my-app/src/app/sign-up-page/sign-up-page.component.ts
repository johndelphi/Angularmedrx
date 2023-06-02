import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  wordToHighlight = 'Free';
  email!: string;
  phone!: string;

  onSubmit() {
    // Perform the sign-in logic here
    console.log('Username:', this.email);
    console.log('Password:', this.phone);
    // Add your sign-in logic here, such as making an API request or validating credentials
  }


}
