import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit{

  wordToHighlight = 'Free';
  formSubmitted: boolean = false;
  signupForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(07|01|2547|2541)[0-9]{8}$/)]]
    })
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent form submission
    this.formSubmitted = true; // Set formSubmitted flag to true

    if (this.signupForm.invalid) {
      return; // Exit the function if the form is invalid
    }

    // Continue with the sign-up logic here
    console.log('Email:', this.signupForm.value.email);
    console.log('Phone:', this.signupForm.value.phone);
    // Add logic to navigate to another page if needed
    this.userSignUp();
  }

  @Output() closeSignUp = new EventEmitter<void>();

  onCloseSignUp() {
    this.closeSignUp.emit();
  }

  userSignUp() {
    this.router.navigate(['/userdetails-signup']);
    this.closeSignUp.emit();
  }


}
