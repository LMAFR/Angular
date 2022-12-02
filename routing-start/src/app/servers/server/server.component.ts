import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {

    this.route.data
      .subscribe(
        (data:Data) => {
          // In the line below, the argument of data has to be the same we wrote as key in the app-routing file when we call the argument "resolve".
          this.server = data['server'];
        }
      );

    //The lines below were commented because the server-resolver service does the same but better.
    // The plus symbol before "this" in the line below and "params" some lines below too, is there to convert the result of the call (a string) in a number, as id is defined as a number.
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params:Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling: 'preserve'})
  }
}
