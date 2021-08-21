import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  
  socket: Socket;
  
  constructor() { 
    this.socket = io("http://localhost:3000");
    this.socket.io.on("error", (error) => {
      console.log('erro');
    });
  }

  listen(eventName: string) {
    return new Observable((subscribe) => {
      this.socket.on(eventName, (data) => {
        subscribe.next(data);
      })
    })
  }

  emit(eventName, data) {
    this.socket.emit(eventName, data);
  }
}
