import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit{
  signUp(){

  }

  constructor(private router: Router) {}

  ngOnInit(): void {

  }
  wordToHighlight = 'Free';
  email!: string;
  phone!: string;
  formSubmitted: boolean = false;

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent form submission
    this.formSubmitted = true; // Set formSubmitted flag to true

    if (!this.email || !this.phone) {
      return; // Exit the function if fields are empty
    }

    // Continue with the sign-up logic here
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
    // Add logic to navigate to another page if needed
  }


  closeSignUp() {
    this.router.navigate(['/header']);
  }

  userSignUp() {
    this.router.navigate(['/userdetails-signup']);
  }


}
