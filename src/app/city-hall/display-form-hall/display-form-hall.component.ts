import { Component, OnInit, Input } from '@angular/core';
import { SocketioService } from 'src/services/web-socket.service';

@Component({
  selector: 'app-display-form-hall',
  templateUrl: './display-form-hall.component.html',
  styleUrls: ['./display-form-hall.component.css']
})
export class DisplayFormHallComponent implements OnInit {

  @Input() form;

  constructor(private webSocketService: SocketioService) { }

  ngOnInit(): void {
  }

  approveForm(): void {
    this.webSocketService.approveForm(this.form.id);
  }  
}
