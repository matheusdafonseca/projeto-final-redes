import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {

  localActivities: Array<PoMultiselectOption> = [
    { value: '1', label: 'Futebol' },
    { value: '2', label: 'Ginástica' },
    { value: '3', label: 'Basquete' },
    { value: '4', label: 'Outros' }
  ];

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
