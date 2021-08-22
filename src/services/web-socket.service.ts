import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;

  constructor() { }

  setupSocketConnection() {
    this.socket = io("http://192.168.15.2:3000");
  }

  // OK
  sendForm(form) {
    this.socket.emit('sendToCityHall', form);
  }

  deleteForm(id: string) {
    this.socket.emit('deleteForm', id);
  }

  // OK
  approveForm(id: string) {
    this.socket.emit('approveForm', id);
  }

  getForms() {
    return new Observable(subscribe => {
      this.socket.on('distributeFormCityHall', (forms: any[]) => {
        subscribe.next(forms);
      });
    })
  }
}
