import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {

  constructor(private router: Router) { }

  showSignInPage: boolean = true;

  navigateTosignUp() {
    this.router.navigate(['/sign-up-page']);
    this.showSignInPage = false;
  }


  username!: string;
  password!: string;

  onSubmit() {
    // Perform the sign-in logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add your sign-in logic here, such as making an API request or validating credentials
  }
}

