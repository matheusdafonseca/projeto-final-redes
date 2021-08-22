import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-hall',
  templateUrl: './city-hall.component.html',
  styleUrls: ['./city-hall.component.css']
})
export class CityHallComponent implements OnInit {

  forms: any[];

  constructor() { }

  ngOnInit(): void {
    this.getForms();
  }

  getForms(): void {
    // this.service.subscribe blabalba q vai retornar os forms
    // this.forms = forms;
  }
  // Criar no backend uma variavel que vai retornar todos os FORMS
  // Criar metodo websocketservice que vai ser um Observable e vai retornar os formularios do backend e dar um subscribe via cityhall
  // City hall vai receber os formularios e exibir com ngfor, no botao do ngfor  no onclick vai ter um metodo que vai 
}
