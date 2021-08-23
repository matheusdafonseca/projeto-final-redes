import { Component, OnInit } from '@angular/core';
import { SocketioService } from 'src/services/web-socket.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  get forms() {
    return this._formsApproved;
  }
  private _formsApproved: any[];

  constructor(private webSocketService: SocketioService) { }

  ngOnInit(): void {
    this.webSocketService.getApprovedForms().subscribe((forms: any[])=> {
      this._formsApproved = forms
    })
  }

}
