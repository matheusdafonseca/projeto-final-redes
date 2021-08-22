import { Injectable } from '@angular/core';
import { io } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;

  constructor() { }

  setupSocketConnection() {
    this.socket = io("http://localhost:3000");
  }

  sendForm(form) {
    this.socket.emit('sendToCityHall', form);
  }

  approveForm(id: string) {
    this.socket.emit('approveForm', id);
  }

  getForms() {
    //this.socket.listen?
  }
}
