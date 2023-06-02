
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isMenuOpen = false

  toggleSideNav() {
    this.isMenuOpen = !this.isMenuOpen;

  }

  closeDropdownMenu() {
    this.isMenuOpen = false;
  }

  isContentOpen: boolean = false;

  toggleSignin() {
    this.isContentOpen = !this.isContentOpen;
  }

}

