import { Component, OnInit  } from '@angular/core';
import { io } from "socket.io-client";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socketClient';
  ngOnInit(): void {
    const socket = io("http://localhost:3000" , { transports: ['websocket'] });
    // receive a message from the server
    socket.on("hello", (arg) => {
    console.log(arg); // prints "world"
    });
    // send a message to the server
    socket.emit("howdy", "stranger things");
  }

}
