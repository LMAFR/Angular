import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm:FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      // The first value in FormControl is the default value os that field in the form
      'gender': new FormControl('male')
    });
  }
  onSubmit(){
    console.log(this.signUpForm);
  }
}
