import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbacks = [
    {
      message: 'MedFastGo has revolutionized the way we manage our pharmacy\'s point-of-sale system. The real-time tracking feature is a game-changer, allowing us to monitor inventory levels and sales effortlessly. The user interface is intuitive and easy to navigate, making it a breeze for our staff to use. Highly recommend!',
      name: 'Sarah M.'
    },
    {
      message: 'Since we started using MedFastGo, it has significantly improved our operational efficiency. The ability to track sales data in real-time has helped us make better inventory decisions and reduced out-of-stock situations. The support team is also very responsive and helpful. Five stars!',
      name: 'John D.'
    },
    {
      message: 'MedFastGo has been an excellent addition to our pharmacy. The app\'s detailed reporting and analytics have provided us with valuable insights into our sales patterns and customer preferences. This has enabled us to optimize our stock levels and enhance our overall service quality. It\'s a must-have tool for any pharmacy!',
      name: 'Maria R.'
    },
    {
      message: 'MedFastGo has been a fantastic tool for our pharmacy. The comprehensive dashboard provides all the information we need at a glance, and the ability to track sales trends has been invaluable. The app is reliable and has streamlined our daily operations. We couldn\'t be happier with our choice!',
      name: 'Emma L.'
    },
    {
      message: 'Using MedFastGo has been a game-changer for our business. The app\'s accuracy in tracking POS data has minimized errors and saved us a lot of time. The customer support is outstanding, always ready to assist with any issues. We highly recommend MedFastGo to any pharmacy looking to enhance their operations.',
      name: 'Michael T.'
    },
  ];

  currentIndex = 0;

  selectFeedback(index: number) {
    this.currentIndex = index;
  }
}
