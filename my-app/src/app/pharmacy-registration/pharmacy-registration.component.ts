import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './pharmacy-registration.component.html',
  styleUrls: ['./pharmacy-registration.component.css']
})
export class  PharmacyRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  router: any;
  selectedCounty!: string;
  selectedSubcounty!: string;
  KenyanCounties: string[] = [
    'Mombasa', 'Kwale', 'Kilifi', 'Tana River', 'Lamu', 'Taita-Taveta','Garissa','Wajir', 'Mandera', 'Marsabit',
    'Isiolo', 'Meru', 'Tharaka-Nithi', 'Embu','Kitui', 'Machakos', 'Makueni', 'Nyandarua', 'Nyeri', 'Kirinyaga',
    'Muranga', 'Kiambu', 'Turkana', 'West Pokot', 'Samburu', 'Trans-Nzoia', 'Uashin Gishu', 'Elgeyo-Marakwet', 'Nandi',
    'Baringo', 'Laikipia', 'Nakuru', 'Narok', 'Kajiado', 'Kericho', 'Bomet', 'Kakamega', 'Vihiga', 'Bungoma', 'Busia',
    'Siaya', 'Kisumu', 'Homa Bay', 'Migori', 'Kisii', 'Nyamira', 'Nairobi',
  ];
  countysubcountiesMap: { [key: string]: string[] } = {
    Mombasa: ['Changamwe', 'Jomvu', 'Kisauni', 'Nyali', 'Likoni', 'Mvita'],
    Kwale: ['Matuga', 'Msambweni', 'Kinango', 'Lunga Lunga'],
  };
  SubCounties!: string[];

  onCountyChange() {
    this.SubCounties = this.countysubcountiesMap[this.selectedCounty] || [];
    this.selectedSubcounty = '';
  }



  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      pharmacyName: ['', Validators.required],
      region: ['', Validators.required],
      county: ['', Validators.required],
      subcounty: ['', Validators.required],
      landmark: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.registrationForm?.invalid) {

      return;
    }

      console.log(this.registrationForm?.value);




  }


}




