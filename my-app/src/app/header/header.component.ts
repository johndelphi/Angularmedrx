
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
  isHovered: boolean = false;
  isSignInHovered: boolean = false;

  constructor(private router: Router) {}

  @ViewChild(SigninComponent) signInComponent!: SigninComponent;

  toggleSideNav() {
    this.isMenuOpen = !this.isMenuOpen;

  }

  closeDropdownMenu() {
    this.isMenuOpen = false;
  }

  closeSigninDropdown() {
     if (!this.isSignInHovered) {
      this.isContentOpen = false;
    }
    this.isSignInHovered = false;
  }

  isContentOpen: boolean = false;

 toggleSignin() {
    this.isHovered = !this.isHovered;
    this.isContentOpen = this.isHovered;
  }

  keepSigninDropdownOpen() {
    this.isSignInHovered = true;
  }


}

