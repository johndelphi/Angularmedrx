import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit{
  signUp(){

  }
  email!: string;
  password!: string;

  onSubmit(form: NgForm){
    if(form.valid){
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      form.reset();
    }
  }


  constructor(private router: Router) {}

  ngOnInit(): void {

  }
  


}
