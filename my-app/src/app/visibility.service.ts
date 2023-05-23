import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  loginVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  signupVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() { }
}
