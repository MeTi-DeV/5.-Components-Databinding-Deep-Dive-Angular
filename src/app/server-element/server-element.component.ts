import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  //comment 1 : it's a property of the ServerElementComponent with types we want to get it
  //comment 2 : call Input() method to reuseable this property out sid of this component
  @Input() element: { type: string; name: string; content: string };
  newServerName = "";
  newServerContent = "";
  constructor() {}
  ngOnInit(): void {}
  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
