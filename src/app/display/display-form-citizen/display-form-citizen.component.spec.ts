import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormCitizenComponent } from './display-form-citizen.component';

describe('DisplayFormCitizenComponent', () => {
  let component: DisplayFormCitizenComponent;
  let fixture: ComponentFixture<DisplayFormCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFormCitizenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFormCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
