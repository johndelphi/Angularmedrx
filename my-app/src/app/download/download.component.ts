// download.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
  // Add methods for button click handlers
  onDownloadClick(): void {
    // Implement download functionality
    console.log('Download button clicked');
  }

  onStoreClick(store: string): void {
    // Handle store icon clicks
    console.log(`${store} icon clicked`);
  }

  onSignUpClick(): void {
    // Handle sign up button click
    console.log('Sign up button clicked');
  }

  onWatchVideoClick(): void {
    // Handle watch video button click
    console.log('Watch video button clicked');
  }
}