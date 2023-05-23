import { Component, OnInit } from '@angular/core';
import { VisibilityService } from './visibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {
  title = 'MedRx';
=======
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(private visibilityService: VisibilityService) {}


  get loginVisible(): boolean {
    return this.visibilityService.loginVisible.getValue();
  }

  get signupVisible(): boolean {
    return this.visibilityService.signupVisible.getValue();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

>>>>>>> master
}
