import { Component } from '@angular/core';
import { WebSocketService } from 'src/services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-final-redes';

  constructor(public webSocketService: WebSocketService) {}
  
  ngOnInit(): void {
    this.webSocketService.listen('conectei').subscribe(data => {
      console.log(data);
    });
  }
}
