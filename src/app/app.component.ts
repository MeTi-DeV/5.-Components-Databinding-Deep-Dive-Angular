import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //component 1 : serverElements is AppComponent property to call it inside of this component
  // and it will storage new objects (server-element)
  serverElements = [{type:'server' , name:'Test Server' , content:'Its New Server'}];



}
