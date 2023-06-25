import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      title: 'Pharmastock',
      image: 'assets/Images/inventorymanagament62.jpeg',
      description: ' Hey there! Are you tired of losing track of your inventory and constantly running out of products? Well, we ve got you covered with our inventory management service! Our easy-to-use system allows you to keep track of your inventory levels, set up alerts for when youre running low on products, and even generate reports for better analysis of your sales trends  With our service, you ll never have to worry about manually counting your inventory or losing track of your stock again. Plus, our platform is customizable to fit the unique needs of your business. Whether you have a small boutique or a large warehouse, our inventory management service can help you streamline your operations and save you time and money. So, what are you waiting for? Sign up now and take control of your inventory today!',
      collapsed : true,
    },
    {
      title: 'Compare prices and get Discounts',
      image: 'assets/Images/comparepriceswoman.jpeg',
      description: `Are you tired of paying full price for your prescriptions? Look no further than our drug compare and coupons service! We know that the cost of medication can be overwhelming, which is why we’ve made it our mission to help you save money. Our service allows you to compare prices of different medications at various pharmacies, so you can find the best deal for your budget. Plus, we offer coupons for many popular drugs, so you can get even more savings.

      We know that dealing with health issues can be stressful enough, without the added burden of high medication costs. That’s why we’ve made our service as easy to use as possible. Simply search for your medication, compare prices, and redeem your coupon at checkout. It’s that simple! Our informal tone reflects our commitment to making this process as accessible and stress-free as possible. So why pay full price for your prescriptions when you could save with our drug compare and coupons service?`,
      collapsed : true,
    },
    {
      title: 'PharmaConnect: Your One-Stop B2B Solution',
      image: 'assets/Images/b2b.jpeg',
      description: 'Hey there! Are you a business looking to expand your product offerings? Our business to business trade service may be just what you need! We connect you with other businesses who are looking to buy and sell products in bulk, creating a mutually beneficial partnership Our platform makes it easy for you to browse and connect with potential partners, and our team is always available to provide support and answer any questions you may have. Whether you’re a small business or a large corporation, our B2B trade service can help you save time and money by streamlining the procurement process. So why wait? Sign up now and start growing your business today!',
      collapsed : true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleViewMore(service: any): void {
    service.collapsed = !service.collapsed;
  }

}
