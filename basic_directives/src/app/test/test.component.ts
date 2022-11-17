import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  secret_check = false;
  clicks_log = [new Date()];

  constructor() { }

  ngOnInit(): void {
  }

  OnClickEvent() {
    this.clicks_log.push(new Date());
  }

}
