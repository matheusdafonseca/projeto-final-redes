import { Component } from '@angular/core';
import { SocketioService } from 'src/services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-final-redes';

  constructor(private webSocket: SocketioService) {}
  
  ngOnInit(): void {
    this.webSocket.setupSocketConnection();
  }
}
