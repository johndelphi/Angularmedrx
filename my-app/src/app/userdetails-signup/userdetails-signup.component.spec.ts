import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsSignupComponent } from './userdetails-signup.component';

describe('UserdetailsSignupComponent', () => {
  let component: UserdetailsSignupComponent;
  let fixture: ComponentFixture<UserdetailsSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdetailsSignupComponent]
    });
    fixture = TestBed.createComponent(UserdetailsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
