
import { Component, ViewChild } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isMenuOpen = false

  constructor(private router: Router) {}

  @ViewChild(SigninComponent) signInComponent!: SigninComponent;

  toggleSideNav() {
    this.isMenuOpen = !this.isMenuOpen;

  }

  closeDropdownMenu() {
    this.isMenuOpen = false;
  }

  isContentOpen: boolean = false;

  toggleSignin() {
    if (this.isContentOpen) {
      // If the "Sign Up" link in the sign-in page is clicked, navigate to the home page and hide the sign-in container
      this.router.navigate(['/']);
      this.isContentOpen = false;
    } else {
      // If the "Sign In" link is clicked, show the sign-in container
      this.isContentOpen = true;
    }
    this.isMenuOpen = false; // Close the menu when clicking the sign-in link
  }

}

