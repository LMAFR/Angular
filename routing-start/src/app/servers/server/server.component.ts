import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    // The plus symbol before "this" in the line below and "params" some lines below too, is there to convert the result of the call (a string) in a number, as id is defined as a number.
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params:Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

}
