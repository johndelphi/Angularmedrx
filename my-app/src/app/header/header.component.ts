
import { Component, HostListener, ViewChild } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isMenuOpen = false
  isHovered: boolean = false;
  isSignInHovered: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation event:', event);
      }
    })
  }

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



  handleDropdownClick(event: Event) {
    event.stopPropagation(); // Prevent the event from propagating
  }

  handleSigninMousedown(event: Event) {
    event.stopPropagation(); // Prevent the event from propagating
  }

  navigateToSignIn(event: Event) {
    event.stopPropagation();
    this.isContentOpen = !this.isContentOpen;
    this.isContentOpen = true;
    this.signInComponent.showSignInPage = true;
    this.router.navigate(['/sign-in']); // Replace 'sign-in' with the actual path
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const dropdownContent = document.querySelector('.dropdown-content') as HTMLElement;

    if (!dropdownContent.contains(target)) {
      this.closeDropdown();
    }
  }



  closeDropdown() {
    this.isContentOpen = false;
  }



}

