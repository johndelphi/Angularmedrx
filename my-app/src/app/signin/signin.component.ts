import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit{

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

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

