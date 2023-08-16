import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './pharmacy-registration.component.html',
  styleUrls: ['./pharmacy-registration.component.css']
})
export class PharmacyRegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  selectedCounty!: string;
  selectedSubcounty!: string;
  KenyanCounties: string[] = [
    'Mombasa', 'Kwale', 'Kilifi', 'TanaRiver', 'Lamu', 'TaitaTaveta','Garissa','Wajir', 'Mandera', 'Marsabit',
    'Isiolo', 'Meru', 'TharakaNithi', 'Embu','Kitui', 'Machakos', 'Makueni', 'Nyandarua', 'Nyeri', 'Kirinyaga',
    'Muranga', 'Kiambu', 'Turkana', 'WestPokot', 'Samburu', 'TransNzoia', 'UashinGishu', 'ElgeyoMarakwet', 'Nandi',
    'Baringo', 'Laikipia', 'Nakuru', 'Narok', 'Kajiado', 'Kericho', 'Bomet', 'Kakamega', 'Vihiga', 'Bungoma', 'Busia',
    'Siaya', 'Kisumu', 'Homa Bay', 'Migori', 'Kisii', 'Nyamira', 'Nairobi',
  ];
  countysubcountiesMap: { [key: string]: string[] } = {
    Mombasa: ['Changamwe', 'Jomvu', 'Kisauni', 'Nyali', 'Likoni', 'Mvita'],
    Kwale: ['Matuga', 'Msambweni', 'Kinango', 'Lunga Lunga'],
    Kilifi: ['Ganze', 'Kaloleni', 'Kilifi North', 'Kilifi South', 'Magarini', 'Malindi', 'Rabai'],
    TanaRiver: ['Bura', 'Galole', 'Garsen'],
    Lamu: ['Lamu East', 'Lamu West'],
    TaitaTaveta: ['Mwatate', 'Taveta', 'Voi'],
    Garissa: ['Balambala', 'Dadaab', 'Fafi', 'Garissa Township', 'Ijara', 'Lagdera'],
    Wajir: ['Eldas', 'Tarbaj', 'Wajir East', 'Wajir North', 'Wajir South', 'Wajir West'],
    Mandera: ['Banissa', 'Lafey', 'Mandera East', 'Mandera North', 'Mandera South', 'Mandera West'],
    Marsabit: ['Laisamis', 'Moyale', 'North Horr', 'Saku', 'Turbi'],
    Isiolo: ['Isiolo', 'Garba Tulla', 'Merti'],
    Meru: ['Buuri', 'Igembe Central', 'Igembe North', 'Igembe South', 'Imenti Central', 'Imenti North', 'Imenti South', 'Tigania Central', 'Tigania East'],
    TharakaNithi: ['Chuka', 'Igambangombe', 'Maara', 'Tharaka'],
    Embu: ['Manyatta', 'Mbeere North', 'Mbeere South', 'Runyenjes'],
    Kitui: ['Kitui Central', 'Kitui East', 'Kitui Rural', 'Kitui South', 'Kitui West'],
    Machakos: ['Athi River', 'Kangundo', 'Kathiani', 'Machakos', 'Masinga', 'Matungulu', 'Mavoko', 'Mwala', 'Yatta'],
    Makueni: ['Kaiti', 'Kibwezi East', 'Kibwezi West', 'Kilome', 'Makueni', 'Mbooni'],
    Nyandarua: ['Kinangop', 'Kipipiri', 'Ndaragwa', 'Ol Kalou'],
    Nyeri: ['Kieni East', 'Kieni West', 'Mathira East', 'Mathira West', 'Mukurweini', 'Nyeri Central', 'Tetu'],
    Kirinyaga: ['Gichugu', 'Kirinyaga Central', 'Kirinyaga East', 'Kirinyaga West', 'Mwea East', 'Mwea West'],
    Muranga: ['Gatanga', 'Kahuro', 'Kandara', 'Kangema', 'Kigumo', 'Maragua', 'Mathioya'],
    Kiambu: ['Gatundu North', 'Gatundu South', 'Githunguri', 'Juja', 'Kabete', 'Kiambaa', 'Kiambu', 'Kikuyu', 'Limuru', 'Ruiru', 'Thika Town'],
    Turkana: ['Kakuma', 'Kerio', 'Kibish', 'Lapur', 'Loima', 'Turkana Central', 'Turkana East', 'Turkana North', 'Turkana South'],
    WestPokot: ['Kacheliba', 'Kapenguria', 'Pokot Central', 'Pokot North', 'Pokot South', 'Sigor'],
    Samburu: ['Baragoi', 'Samburu Central', 'Samburu East', 'Samburu North', 'Samburu West'],
    TransNzoia: ['Cherangany', 'Kwanza', 'Saboti', 'Teti'],
    UashinGishu: ['Ainabkoi', 'Kapseret', 'Kesses', 'Moiben', 'Soy', 'Turbo'],
    ElgeyoMarakwet: ['Keiyo North', 'Keiyo South', 'Marakwet East', 'Marakwet West'],
    Nandi: ['Aldai', 'Chesumei', 'Emgwen', 'Mosop', 'Tinderet'],
    Baringo: ['Baringo Central', 'Baringo North', 'Baringo South', 'Eldama Ravine', 'Mogotio', 'Tiaty'],
    Laikipia: ['Laikipia Central', 'Laikipia East', 'Laikipia North', 'Laikipia West', 'Nyahururu'],
    Nakuru: ['Bahati', 'Gilgil', 'Kuresoi North', 'Kuresoi South', 'Molo', 'Naivasha', 'Nakuru Town East', 'Nakuru Town West', 'Njoro', 'Rongai', 'Subukia'],
    Narok: ['Emurua Dikirr', 'Kilgoris', 'Narok East', 'Narok North', 'Narok South', 'Trans Mara East', 'Trans Mara West'],
    Kajiado: ['Kajiado Central', 'Kajiado East', 'Kajiado North', 'Kajiado West', 'Loitokitok', 'Magadi'],
    Kericho: ['Ainamoi', 'Belgut', 'Bureti', 'Kipkelion East', 'Kipkelion West', 'Sigowet/Soin'],
    Bomet: ['Bomet Central', 'Bomet East', 'Chepalungu', 'Konoin', 'Sotik'],
    Kakamega: ['Butere', 'Ikolomani', 'Khwisero', 'Lugari', 'Malava', 'Matungu', 'Mumias East', 'Mumias West', 'Navakholo'],
    Vihiga: ['Emuhaya', 'Hamisi', 'Luanda', 'Sabatia', 'Vihiga'],
    Bungoma: ['Bumula', 'Kabuchai', 'Kanduyi', 'Kimilili', 'Mount Elgon', 'Sirisia', 'Tongaren', 'Webuye East', 'Webuye West'],
    Busia: ['Budalangi', 'Bunyala', 'Butula', 'Nambale', 'Teso North', 'Teso South'],
    Siaya: ['Alego Usonga', 'Gem', 'Rarieda', 'Ugenya', 'Ugunja'],
    Kisumu: ['Kisumu Central', 'Kisumu East', 'Kisumu West', 'Muhoroni', 'Nyakach', 'Nyando', 'Seme'],
    HomaBay: ['Homa Bay', 'Kabondo Kasipul', 'Karachuonyo', 'Kasipul', 'Mbita', 'Ndhiwa', 'Rangwe', 'Suba'],
    Migori: ['Awendo', 'Kuria East', 'Kuria West', 'Migori', 'Nyatike', 'Rongo', 'Suna East', 'Suna West', 'Uriri'],
    Kisii: ['Bobasi', 'Bomachoge Borabu', 'Bomachoge Chache', 'Kitutu Chache North', 'Kitutu Chache South', 'Nyaribari Chache', 'Nyaribari Masaba'],
    Nyamira: ['Borabu', 'Manga', 'Masaba North', 'Masaba South', 'Nyamira North', 'Nyamira South'],
    Nairobi: ['Embakasi Central', 'Embakasi East', 'Embakasi North', 'Embakasi South', 'Embakasi West', 'Kamukunji', 'Kasarani', 'Langata', 'Makadara', 'Mathare', 'Nairobi West', 'Roysambu', 'Ruaraka', 'Starehe', 'Westlands'],
  };
  SubCounties!: string[];
  formSubmitted: boolean = false;

  onCountyChange() {
    const county = this.registrationForm.get('county')?.value;
    this.SubCounties = this.countysubcountiesMap[county] || [];
    this.registrationForm.patchValue({ subcounty: '' });
  }



  constructor(private formBuilder: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      pharmacyName: ['', Validators.required],
      location: ['', Validators.required],
      county: ['', Validators.required],
      subcounty: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(07|01|2547|2541)[0-9]{8}$/)]],
    });
  }


  onSubmit(event: Event) {
     event.preventDefault();
    this.formSubmitted = true;
    if (this.registrationForm?.invalid) {

      return;
    }

    console.log('Pharmacy name:', this.registrationForm.value.pharmacyName);
    console.log('Location:', this.registrationForm.value.location);
    console.log('County:', this.registrationForm.value.county);
    console.log('Subcounty:', this.registrationForm.value.subcounty);
    console.log('Phone number:', this.registrationForm.value.phoneNumber);

  }

   closePharmacy() {
    this.router.navigate(['/header']);
  }


}




