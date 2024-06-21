
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { PharmacyRegistrationComponent } from './pharmacy-registration/pharmacy-registration.component';
import { SigninComponent } from './signin/signin.component';
import { UserdetailsSignupComponent } from './userdetails-signup/userdetails-signup.component';
import { DrugCarouselComponentComponent } from './drug-carousel-component/drug-carousel-component.component';
import { HowmedrxworksComponent } from './howmedrxworks/howmedrxworks.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';
import { StoreModule } from '@ngrx/store';
import { MedicineSearchresultsReducer } from './State/medicine.search.reducer';
import { AppState } from './State/app.state';
import { BackendserviceService } from './backendservice.service';
import { AboutComponent } from './about/about.component';
import { HomefooterComponent } from './homefooter/homefooter.component';
import { LoaderComponent } from './loader/loader.component';
import { LandingPageComponent } from './landing-page/landing-page.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    ServicesComponent,
    FeaturesComponent,
     HomeComponent,
    SignUpPageComponent,
    PharmacyRegistrationComponent,
    SigninComponent,
    UserdetailsSignupComponent,
    DrugCarouselComponentComponent,
    HowmedrxworksComponent,
    LandingPageComponent,


    SearchResultsPageComponent,
      AboutComponent,
      HomefooterComponent,
      LoaderComponent,







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    StoreModule.forRoot({search: MedicineSearchresultsReducer}),
    MatAutocompleteModule,
    MatListModule,
    MatButtonModule

  ],
  providers: [
  BackendserviceService,
  {provide: 'appState', useValue: {} as AppState},


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
