import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SocketioService } from 'src/services/web-socket.service';

@Component({
  selector: 'app-city-hall',
  templateUrl: './city-hall.component.html',
  styleUrls: ['./city-hall.component.css']
})
export class CityHallComponent implements OnInit {

  get forms() {
    return this._forms;
  }
  private _forms: any[];

  constructor(private webSocketService: SocketioService) { }

  ngOnInit(): void {
    this.webSocketService.getForms().subscribe((forms: any[])=> {
      this._forms = forms;
    })
  }
  
}
