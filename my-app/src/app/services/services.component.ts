import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      title: 'Inventory Management',
      image: 'assets/Images/Inventory.jpg',
      bulletPoints: [
        'Get real-time inventory updates',
        'Ensure optimal stock levels',
        'Enhance overall operational efficiency',
        'Automates reordering processes'
      ],
      collapsed: true,
    },
    {
      title: 'Point of Sale (POS)',
      image: 'assets/Images/b2b.jpeg',
      bulletPoints: [
        'Fast and efficient checkout process',
        'Accurate sales tracking/reporting',
        'Offline/Online capabilities',
        'Access to exclusive discounts'
      ],
      collapsed: true,
    },
    {
      title: 'PharmaConnect: Your One-Stop B2B Solution',
      image: 'assets/Images/b2b.jpeg',
      bulletPoints: [
        'Provide acces and transparency of drug prices',
        'No middlemen, direct access to manufacturers',
        'access to suppliers to ensure quality/authenticity',
        'Enhance business connectivity'
      ],
      collapsed: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleViewMore(service: any): void {
    service.collapsed = !service.collapsed;
  }
}
