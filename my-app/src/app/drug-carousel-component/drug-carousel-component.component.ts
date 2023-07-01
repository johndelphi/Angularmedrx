import { Component, ViewChild,ElementRef } from '@angular/core';


interface Drug {
 image : string;
  name: string;
  details: string;
  originalPrice: string;
  discountedPrice: string;
  discountDetails: string;
}
@Component({
  selector: 'app-drug-carousel-component',
  templateUrl: './drug-carousel-component.component.html',
  styleUrls: ['./drug-carousel-component.component.css']
})
export class DrugCarouselComponentComponent {
  @ViewChild('cardContainer') cardContainer!: ElementRef;
  drugs: Drug[] = [
    {
      image:'https://www.grxstatic.com/d4fuqqd5l3dbz/products/cwf_tms/DrugItem_15029.PNG?width=384&quality=75',
      name: 'Atorvastatin',
      details: '40mg, 30 tablets',
      originalPrice: '59.99',
      discountedPrice: '40',
      discountDetails: '98% off with MedRx'
      
    },
    {
      image:'https://buzzrx.s3.amazonaws.com/gs/DrugItem_5059.JPG',
      name: 'Metformin',
      details: '500mg, 60 tablets',
      originalPrice: '24.99',
      discountedPrice: '0.75',
      discountDetails: '97% off with MedRx'
    },
    {image:'https://buzzrx.s3.amazonaws.com/gs/DrugItem_5059.JPG',
      name: 'Lisinopril',
      details: '20mg, 30 tablets',
      originalPrice: '$29.99',
      discountedPrice: '19',
      discountDetails: '95% off with MedRx'
    },
    {
      image:'https://buzzrx.s3.amazonaws.com/caf6e1e8-8e0e-45c3-840d-c10080913b0e/lisinopril-img.jpeg',
      name: 'Lisinopril',
      details: '20mg, 30 tablets',
      originalPrice: '29.99',
      discountedPrice: '19.22',
      discountDetails: '95% off with MedRx'
    }, 
    {
      image:'https://buzzrx.s3.amazonaws.com/caf6e1e8-8e0e-45c3-840d-c10080913b0e/lipitor-img.jpeg',
      name: 'Lipitor ',
      details: '20mg, 30 tablets',
      originalPrice: '69.99',
      discountedPrice: '50',
      discountDetails: '95% off with MedRx'
    }
  ];

  getCoupon(drug:Drug): void {
    console.log(`Getting coupon for drug: ${drug.name}`);
    // Implement your logic to get a coupon here...
  }

  scrollLeft(): void {
    this.cardContainer.nativeElement.scrollLeft -= 200; // change this value as per your requirement
  }

  scrollRight(): void {
    this.cardContainer.nativeElement.scrollLeft += 200; // change this value as per your requirement
  }
}
