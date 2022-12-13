import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        // Asynchronous validators are written apart from usual validators:
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
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

  forbiddenEmails(control:FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com'){
          resolve({'emailIsForbidden':true});
        } else {
          // Observe that a promise has no return, but "resolve" or "reject". Also, observe that in these cases we return null is there is no error,
          //  as that is the value that errors will take for this field after submit the form.
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }
}
