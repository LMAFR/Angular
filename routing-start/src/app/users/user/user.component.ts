import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  // The new "Load Anna" link we created does not change the values in this.user, as the component is not destroyed and re-created,
  // so we have to add a asynchronous listener to make those changes just in case someone click on Load Anna in a certain moment:
  this.route.params.subscribe(
    (params:Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    }
  )
  }

}
