import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameServerInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameServerInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameServerInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameServerInput.value,
      serverContent: this.newServerContent
    });
  }

}
