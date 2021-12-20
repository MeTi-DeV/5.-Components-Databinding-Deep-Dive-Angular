import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @Output() serverCreated = new EventEmitter<{
    severName: string,
    serverContent: string,
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    severName: string,
    serverContent: string,
  }>();
  @ViewChild('serverContentInput', { static: true })
  serverContentInput!: ElementRef;
  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      severName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      severName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
