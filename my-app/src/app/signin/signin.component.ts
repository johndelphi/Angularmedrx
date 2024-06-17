import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit{

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.showSignInPage = true;
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

  @Input() isSignInHovered: boolean = false;
  @Output() signInHovered = new EventEmitter<boolean>();
  @Output() signInClosed = new EventEmitter<void>();

  keepSigninDropdownOpen() {
    this.signInHovered.emit(true);
  }

  closeSigninDropdown() {
    this.signInHovered.emit(false);
    this.signInClosed.emit();
  }

  showSignUpModal = false;

  openSignUpModal() {
    this.showSignUpModal = true;
    this.showSignInPage = false;
  }

  closeSignUpModal() {
    this.showSignUpModal = false;
  }
}

