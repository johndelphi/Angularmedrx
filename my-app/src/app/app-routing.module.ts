import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { PharmacyRegistrationComponent } from './pharmacy-registration/pharmacy-registration.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { UserdetailsSignupComponent } from './userdetails-signup/userdetails-signup.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
//   {path:'results',
//   component: SearchResultsPageComponent,
//   children: [
//     {path: '',pathMatch: 'full',redirectTo: 'search-results'},
//     {path: 'search-results',component: SearchResultsPageComponent},

// ],
// },
  {path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent },
  {path: 'home', component: HomeComponent},
  {path: 'sign-up-page', component: SignUpPageComponent},
  {path: 'pharmacy-registration', component: PharmacyRegistrationComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'userdetails-signup', component: UserdetailsSignupComponent},
  {path: 'results', component: SearchResultsPageComponent},
  {path: 'signin', component: SigninComponent},
  { path: 'loader', component: LoaderComponent },
  {path: 'landing-page', component: LandingPageComponent},
  {path: '**', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

