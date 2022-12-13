import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm:FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      // The first value in FormControl is the default value os that field in the form
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }
  onSubmit(){
    console.log(this.signUpForm);
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getControls(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  forbiddenNames(control:FormControl):{[s:string]:boolean} {
    // The "!== -1" in the line below is because if the control (username) is not in the forbiddenUsernames list, then indexOf will return -1.
    if (this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden':true};
    }
    return null;
  }
}
