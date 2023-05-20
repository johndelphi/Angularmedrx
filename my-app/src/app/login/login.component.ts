import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateform';
import { VisibilityService } from '../visibility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  [x: string]: any;


  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  loginVisible: boolean = false;
  constructor(private fb: FormBuilder, private visibilityService: VisibilityService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })

    this.visibilityService.loginVisible.subscribe((visible: boolean) => {
      this.loginVisible = visible;
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }

  onSubmit(){
     if(this.loginForm.valid){

      console.log(this.loginForm.value)
      //send obj to database
    }else{


      //throw the error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("your form is invalid")

    }
  }


}
