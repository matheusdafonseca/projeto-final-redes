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
    //this._forms = this.webSocketService.getForms();
  }

  getForms() {
    
    // this.service.subscribe blabalba q vai retornar os forms
    // this.forms = forms;
  }
  // Criar no backend uma variavel que vai retornar todos os FORMS
  // Criar metodo websocketservice que vai ser um Observable e vai retornar os formularios do backend e dar um subscribe via cityhall
  // City hall vai receber os formularios e exibir com ngfor, no botao do ngfor  no onclick vai ter um metodo que vai 
}
