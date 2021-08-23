import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/app/city-hall/display-form-hall/display-form-hall.component';

@Component({
  selector: 'app-display-form-citizen',
  templateUrl: './display-form-citizen.component.html',
  styleUrls: ['./display-form-citizen.component.css']
})
export class DisplayFormCitizenComponent implements OnInit {
  
  @Input() formApproved: Form;

  get allowedActivities(): string {
    if(this.formApproved.allowedActivities.length) {
      return this.formApproved?.allowedActivities?.join(', ');
    }
    return '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
