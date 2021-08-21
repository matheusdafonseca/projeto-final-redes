import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PoMultiselectOption } from '@po-ui/ng-components';
import { WebSocketService } from 'src/services/web-socket.service';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css']
})
export class FillFormComponent implements OnInit {

  localActivities: Array<PoMultiselectOption> = [
    { value: 'futebol', label: 'Futebol' },
    { value: 'ginastica', label: 'Ginástica' },
    { value: 'basquete', label: 'Basquete' },
    { value: 'outros', label: 'Outros' }
  ];

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.setupComponents();
  }

  setupComponents() {
  }

  citizenForm = this.fb.group({
    fullName: [''],
    mailAddress: [''],
    localName: [''],
    value: [''],
    localAddress: [''],
    allowedActivities: ['']
  });

  sendForm() {
    console.log(this.citizenForm.controls['fullName'].value);
    console.log(this.citizenForm.controls['mailAddress'].value);
    console.log(this.citizenForm.controls['localName'].value);
    console.log(this.citizenForm.controls['value'].value);
    console.log(this.citizenForm.controls['localAddress'].value);
    console.log(this.citizenForm.controls['allowedActivities'].value);
  }
}
