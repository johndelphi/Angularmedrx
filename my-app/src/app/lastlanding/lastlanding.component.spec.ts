import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastlandingComponent } from './lastlanding.component';

describe('LastlandingComponent', () => {
  let component: LastlandingComponent;
  let fixture: ComponentFixture<LastlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastlandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
