import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setupComponents();
  }

  setupComponents() {
    console.log('x');
  }

  citizenForm = this.fb.group({
    fullname: [''],
    address: [''],
    localname: ['']
  });

}
