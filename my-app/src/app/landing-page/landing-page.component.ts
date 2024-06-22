import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  landingpage = [
    {
      title: 'Empowering Pharmacies through Mobile Solutions In Africa',
      image: 'assets/Images/pic4.jpg',
      description: 'Download Our App',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}