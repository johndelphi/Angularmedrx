import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingiconsComponent } from './landingicons.component';

describe('LandingiconsComponent', () => {
  let component: LandingiconsComponent;
  let fixture: ComponentFixture<LandingiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingiconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
