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
    // The slash notation below is used to work with absolute paths. Without that slash, the string would refer to a relative path whose root would be "/" by default.
    this.router.navigate(['/servers'])
  }
}
