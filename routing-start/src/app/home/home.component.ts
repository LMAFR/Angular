import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLoadServers(){
    //Add some complex calculations
    // The ['X'] notation below is used to work with absolute paths. In either case, it would be a relative path.
    this.router.navigate(['/servers'])
  }
}
