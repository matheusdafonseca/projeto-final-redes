import { Component, OnInit, Input } from '@angular/core';
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

  @Input() form: Form;

  get allowedActivities(): string {
    if(this.form.allowedActivities.length) {
      return this.form?.allowedActivities?.join(', ');
    }
    return '';
  }

  constructor(private webSocketService: SocketioService) { }

  ngOnInit(): void {
  }

  modifyForm(): void {

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
