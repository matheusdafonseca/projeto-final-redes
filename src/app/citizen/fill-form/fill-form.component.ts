import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PoMultiselectOption } from '@po-ui/ng-components';
import { SocketioService } from 'src/services/web-socket.service';
import { uid } from 'uid';
import { PoNotificationService } from '@po-ui/ng-components';

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
    public webSocket: SocketioService,
    public poNotification: PoNotificationService
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
    const form = {
      id: uid(20),
      fullName: this.citizenForm.get('fullName').value,
      mailAddress: this.citizenForm.get('mailAddress').value,
      localName: this.citizenForm.get('localName').value,
      value: this.citizenForm.get('value').value,
      localAddress: this.citizenForm.get('localAddress').value,
      allowedActivities: this.citizenForm.get('allowedActivities').value
    }

    this.webSocket.sendForm(form);

    this.citizenForm.controls['fullName'].patchValue('');
    this.citizenForm.controls['mailAddress'].patchValue('');
    this.citizenForm.controls['localName'].patchValue('');
    this.citizenForm.controls['value'].patchValue('');
    this.citizenForm.controls['localAddress'].patchValue('');
    this.citizenForm.controls['allowedActivities'].patchValue('');

    this.poNotification.success("Formulário enviado com sucesso!");
  }
}
