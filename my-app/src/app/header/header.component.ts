import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private eRef: ElementRef) {}

  // Toggle the menu when the burger icon is clicked
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Close the menu when clicking a link
  closeMenu() {
    this.menuOpen = false;
  }

  // Close the menu when clicking outside the navigation
  @HostListener('document:click', ['$event'])
  closeMenuOutside(event: Event) {
    const targetElement = event.target as HTMLElement;

    // Close menu if click happens outside the navigation or burger menu
    if (this.menuOpen && !this.eRef.nativeElement.contains(targetElement)) {
      this.menuOpen = false;
    }
  }
}
