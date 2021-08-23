import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoMultiselectOption } from '@po-ui/ng-components';
import { SocketioService } from 'src/services/web-socket.service';

export interface Form {
  id: string;
  fullName: string,
  mailAddress: string,
  localName: string,
  value: number,
  localAddress: string,
  allowedActivities: string[]
} 

@Component({
  selector: 'app-display-form-hall',
  templateUrl: './display-form-hall.component.html',
  styleUrls: ['./display-form-hall.component.css']
})
export class DisplayFormHallComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) modalEditarForm: PoModalComponent;

  @Input() form: Form;

  localActivities: Array<PoMultiselectOption> = [
    { value: 'futebol', label: 'Futebol' },
    { value: 'ginastica', label: 'Ginástica' },
    { value: 'basquete', label: 'Basquete' },
    { value: 'outros', label: 'Outros' }
  ];

  primaryActionEditarForm: PoModalAction = {
    action: () => {
      this.modifyForm();
      this.modalEditarForm.close();
    },
    label: 'Confirmar'
  };

  secondaryActionEditarForm: PoModalAction = {
    action: () => {
      this.modalEditarForm.close();
    },
    label: 'Cancelar'
  };

  openModal() {
    this.editCitizenForm.controls['fullName'].patchValue(this.form.fullName);
    this.editCitizenForm.controls['mailAddress'].patchValue(this.form.mailAddress);
    this.editCitizenForm.controls['localName'].patchValue(this.form.localName);
    this.editCitizenForm.controls['value'].patchValue(this.form.value);
    this.editCitizenForm.controls['localAddress'].patchValue(this.form.localAddress);
    this.editCitizenForm.controls['allowedActivities'].patchValue(this.form.allowedActivities);
    this.modalEditarForm.open();
  }

  get allowedActivities(): string {
    if(this.form.allowedActivities.length) {
      return this.form?.allowedActivities?.join(', ');
    }
    return '';
  }

  constructor(private webSocketService: SocketioService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  editCitizenForm = this.fb.group({
    fullName: [''],
    mailAddress: [''],
    localName: [''],
    value: [''],
    localAddress: [''],
    allowedActivities: ['']
  });

  modifyForm(): void {
    const formEdited = {
      id: this.form.id,
      fullName: this.editCitizenForm.get('fullName').value,
      mailAddress: this.editCitizenForm.get('mailAddress').value,
      localName: this.editCitizenForm.get('localName').value,
      value: this.editCitizenForm.get('value').value,
      localAddress: this.editCitizenForm.get('localAddress').value,
      allowedActivities: this.editCitizenForm.get('allowedActivities').value
    }

    this.webSocketService.modifyForm(this.form.id, formEdited)
  }

  // OK
  deleteForm(): void {
    this.webSocketService.deleteForm(this.form.id);
  }

  // OK
  approveForm(): void {
    this.webSocketService.approveForm(this.form.id);
  }  
}
