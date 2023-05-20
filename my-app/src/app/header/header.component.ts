import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisibilityService } from '../visibility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    constructor(private router: Router, private visibilityService: VisibilityService){

    }

    showLogin() {
      this.visibilityService.loginVisible.next(true);
    }

    showSignup() {
      this.visibilityService.signupVisible.next(true);
    }

  ngOnInit(): void {

  }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }

  goToSignup(){
    this.router.navigateByUrl('/signup')
  }

}
