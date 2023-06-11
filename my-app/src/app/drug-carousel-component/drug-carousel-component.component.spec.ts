import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugCarouselComponentComponent } from './drug-carousel-component.component';

describe('DrugCarouselComponentComponent', () => {
  let component: DrugCarouselComponentComponent;
  let fixture: ComponentFixture<DrugCarouselComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugCarouselComponentComponent]
    });
    fixture = TestBed.createComponent(DrugCarouselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  