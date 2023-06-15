import { Component } from '@angular/core';

@Component({
  selector: 'app-userdetails-signup',
  templateUrl: './userdetails-signup.component.html',
  styleUrls: ['./userdetails-signup.component.css']
})
export class UserdetailsSignupComponent {

  wordToHighlight = 'Free';
  firstName!: string;
  lastName!: string;
  dateOfbirth!: string;
  passWord!: string;

  onSubmit() {
    // Perform the sign-in logic here
    console.log('First name:', this.firstName);
    console.log('last name:', this.lastName);
    console.log('Date of birth:', this.dateOfbirth);
    console.log('Password:', this.passWord);
    // Add your sign-in logic here, such as making an API request or validating credentials
  }
}
