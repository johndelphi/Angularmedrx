import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmiddleSectionComponent } from './lmiddle-section.component';

describe('LmiddleSectionComponent', () => {
  let component: LmiddleSectionComponent;
  let fixture: ComponentFixture<LmiddleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LmiddleSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmiddleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
