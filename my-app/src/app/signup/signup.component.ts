import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateform';
import { VisibilityService } from '../visibility.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  [x: string]: any;

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signupForm!: FormGroup;
  signupVisible: boolean = false;
  constructor(private fb : FormBuilder, private visibilityService: VisibilityService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.visibilityService.signupVisible.subscribe((visible: boolean) => {
      this.signupVisible = visible;
    });

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }

  onSignup(){

    if(this.signupForm.valid){

      console.log(this.signupForm.value)
      //perform logic for sign up
    }else{
      ValidateForm.validateAllFormFields(this.signupForm)
      alert("your form is invalid")
       //logic for throwing error
    }
  }

}
