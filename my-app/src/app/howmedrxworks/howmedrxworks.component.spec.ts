import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowmedrxworksComponent } from './howmedrxworks.component';

describe('HowmedrxworksComponent', () => {
  let component: HowmedrxworksComponent;
  let fixture: ComponentFixture<HowmedrxworksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowmedrxworksComponent]
    });
    fixture = TestBed.createComponent(HowmedrxworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
