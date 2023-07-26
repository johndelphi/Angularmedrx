import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails-signup',
  templateUrl: './userdetails-signup.component.html',
  styleUrls: ['./userdetails-signup.component.css']
})
export class UserdetailsSignupComponent implements OnInit {

  wordToHighlight = 'Free';
  signupForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
     this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required,]],
      dateOfbirth: ['', [Validators.required,]],
      passWord: ['', [Validators.required,]]
    })
  }

  onSubmit(event: Event) {
    // Perform the sign-in logic here
    event.preventDefault(); // Prevent form submission
    this.formSubmitted = true; // Set formSubmitted flag to true

    if (this.signupForm.invalid) {
      return; // Exit the function if the form is invalid
    }

    // Continue with the sign-up logic here
    console.log('First name:', this.signupForm.value.firstName);
    console.log('last name:', this.signupForm.value.lastName);
    console.log('Date of birth:', this.signupForm.value.dateOfbirth);
    console.log('Password:', this.signupForm.value.passWord);
    // Add your sign-in logic here, such as making an API request or validating credentials
  }

  closeSignUp() {
    this.router.navigate(['/header']);
  }

}
