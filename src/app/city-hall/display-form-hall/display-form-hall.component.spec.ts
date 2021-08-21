import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormHallComponent } from './display-form-hall.component';

describe('DisplayFormHallComponent', () => {
  let component: DisplayFormHallComponent;
  let fixture: ComponentFixture<DisplayFormHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFormHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFormHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
